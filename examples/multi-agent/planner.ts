import { z } from 'zod';
import { HumanMessage } from '@langchain/core/messages';
import type { BaseChatModel } from '@langchain/core/language_models/chat_models';

export const plannerOutputSchema = z.object({
  web_task: z.string(),
  next_steps: z.array(z.string()),
  observation: z.string().optional(),
  done: z.boolean(),
});
export type PlannerOutput = z.infer<typeof plannerOutputSchema>;

export class Planner {
  constructor(private readonly model: BaseChatModel) {}

  async plan(command: string): Promise<PlannerOutput> {
    const messages = [
      new HumanMessage(`사용자 명령에 따라 웹 시나리오를 JSON 형태로 작성하세요.\n명령: ${command}`),
    ];
    const llm = this.model.withStructuredOutput(plannerOutputSchema, { includeRaw: false });
    const res = await llm.invoke(messages);
    if (!res.parsed) {
      throw new Error('Planner 결과 파싱 실패');
    }
    return res.parsed;
  }
}
