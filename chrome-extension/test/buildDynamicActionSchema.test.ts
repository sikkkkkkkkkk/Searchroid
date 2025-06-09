import { describe, it, expect } from 'vitest';
import { buildDynamicActionSchema, Action } from '../src/background/agent/actions/builder';
import { doneActionSchema } from '../src/background/agent/actions/schemas';
import { ActionResult } from '../src/background/agent/types';

function createDummyAction() {
  return new Action(async () => new ActionResult(), doneActionSchema);
}

describe('buildDynamicActionSchema', () => {
  it('parses with missing action', () => {
    const schema = buildDynamicActionSchema([createDummyAction()]);
    expect(schema.parse({})).toEqual({});
  });

  it('parses provided action', () => {
    const schema = buildDynamicActionSchema([createDummyAction()]);
    const data = schema.parse({ done: { text: 'hi', success: true } });
    expect(data.done.text).toBe('hi');
  });
});
