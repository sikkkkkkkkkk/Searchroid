import { z } from 'zod';
import { HumanMessage } from '@langchain/core/messages';
import type { BaseChatModel } from '@langchain/core/language_models/chat_models';

export const validationSchema = z.object({
  isValid: z.boolean(),
  summary: z.string(),
});
export type ValidationResult = z.infer<typeof validationSchema>;

export class Validator {
  constructor(private readonly model: BaseChatModel) {}

  async validate(result: string): Promise<ValidationResult> {
    const messages = [
      new HumanMessage(`다음 결과를 평가하고 요약해주세요.\n\n${result}`),
    ];
    const llm = this.model.withStructuredOutput(validationSchema, { includeRaw: false });
    const res = await llm.invoke(messages);
    if (!res.parsed) {
      throw new Error('Validator 결과 파싱 실패');
    }
    return res.parsed;
  }
}
