import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import type { BaseChatModel } from '@langchain/core/language_models/chat_models';
import type { AgentContext } from '../src/background/agent/types';
import type { BasePrompt } from '../src/background/agent/prompts/base';
import { BaseAgent } from '../src/background/agent/agents/base';

class DummyPrompt implements BasePrompt {
  getSystemMessage() {
    return {} as any;
  }
  async getUserMessage() {
    return {} as any;
  }
  async buildBrowserStateUserMessage() {
    return {} as any;
  }
}

class TestAgent extends BaseAgent<z.ZodType, unknown> {
  execute() {
    return Promise.resolve({ id: this.id, result: null });
  }
}

describe('getChatModelLibrary', () => {
  it('reads library property from model instance', () => {
    const model = { library: 'dummy-lib' } as unknown as BaseChatModel;
    const prompt = new DummyPrompt();
    const context = {} as AgentContext;
    const agent = new TestAgent(z.any(), { chatLLM: model, context, prompt });
    expect((agent as any).chatModelLibrary).toBe('dummy-lib');
  });
  it('reads library from constructor when instance property missing', () => {
    class Model {}
    (Model as any).prototype.invoke = async () => ({});
    const model = new Model() as unknown as BaseChatModel;
    (model.constructor as any).library = 'ctor-lib';
    const prompt = new DummyPrompt();
    const context = {} as AgentContext;
    const agent = new TestAgent(z.any(), { chatLLM: model, context, prompt });
    expect((agent as any).chatModelLibrary).toBe('ctor-lib');
  });
});
