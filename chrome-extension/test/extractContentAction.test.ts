import { describe, it, expect } from 'vitest';
import { ActionBuilder } from '../src/background/agent/actions/builder';
import type { AgentContext } from '../src/background/agent/types';
import type { BaseChatModel } from '@langchain/core/language_models/chat_models';

function createBuilder() {
  const context = {} as AgentContext;
  const llm = { invoke: async () => ({ content: 'ok' }) } as unknown as BaseChatModel;
  return new ActionBuilder(context, llm);
}

describe('ActionBuilder', () => {
  it('includes extract_content action', () => {
    const builder = createBuilder();
    const actions = builder.buildDefaultActions();
    const names = actions.map(a => a.name());
    expect(names).toContain('extract_content');
  });
});
