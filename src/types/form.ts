import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z.string().regex(/^01[0-9]-\d{4}-\d{4}$/, '올바른 전화번호 형식을 입력해주세요 (예: 010-1234-5678)'),
});

export type FormData = z.infer<typeof formSchema>;
