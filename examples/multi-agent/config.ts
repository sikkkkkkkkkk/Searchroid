import { ChatOpenAI } from '@langchain/openai';
import { ChatAnthropic } from '@langchain/anthropic';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import type { BaseChatModel } from '@langchain/core/language_models/chat_models';

export type Provider = 'openai' | 'anthropic' | 'gemini';

export interface LLMConfig {
  provider: Provider;
  apiKey: string;
  model?: string;
}

export function createChatModel(cfg: LLMConfig): BaseChatModel {
  const { provider, apiKey, model } = cfg;
  switch (provider) {
    case 'openai':
      return new ChatOpenAI({ apiKey, model: model ?? 'gpt-4o' });
    case 'anthropic':
      return new ChatAnthropic({ apiKey, model: model ?? 'claude-3-opus-20240229' });
    case 'gemini':
      return new ChatGoogleGenerativeAI({ apiKey, model: model ?? 'gemini-pro' });
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
}
