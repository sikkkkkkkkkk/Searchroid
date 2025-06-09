import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { convertZodToJsonSchema } from '../src/background/utils';
import { buildDynamicActionSchema, Action } from '../src/background/agent/actions/builder';
import {
  doneActionSchema,
  searchGoogleActionSchema,
  goToUrlActionSchema,
  goBackActionSchema,
  clickElementActionSchema,
  inputTextActionSchema,
  switchTabActionSchema,
  openTabActionSchema,
  closeTabActionSchema,
  cacheContentActionSchema,
  scrollDownActionSchema,
  scrollUpActionSchema,
  sendKeysActionSchema,
  scrollToTextActionSchema,
  getDropdownOptionsActionSchema,
  selectDropdownOptionActionSchema,
  waitActionSchema,
  type ActionSchema,
} from '../src/background/agent/actions/schemas';
import { ActionResult, agentBrainSchema } from '../src/background/agent/types';
import { jsonNavigatorOutputSchema } from '../../packages/schema-utils/lib/json_schema';

function makeAction(schema: ActionSchema) {
  return new Action(async () => new ActionResult(), schema);
}

describe('convertZodToJsonSchema', () => {
  it('produces schema matching jsonNavigatorOutputSchema', () => {
    const actions = [
      doneActionSchema,
      searchGoogleActionSchema,
      goToUrlActionSchema,
      goBackActionSchema,
      clickElementActionSchema,
      inputTextActionSchema,
      switchTabActionSchema,
      openTabActionSchema,
      closeTabActionSchema,
      cacheContentActionSchema,
      scrollDownActionSchema,
      scrollUpActionSchema,
      sendKeysActionSchema,
      scrollToTextActionSchema,
      getDropdownOptionsActionSchema,
      selectDropdownOptionActionSchema,
      waitActionSchema,
    ].map(makeAction);

    const actionSchema = buildDynamicActionSchema(actions);
    const outputSchema = z.object({
      current_state: agentBrainSchema,
      action: z.array(actionSchema),
    });

    const generated = convertZodToJsonSchema(outputSchema, 'NavigatorAgentOutput', true);
    expect(generated).toEqual(jsonNavigatorOutputSchema);
  });
});
