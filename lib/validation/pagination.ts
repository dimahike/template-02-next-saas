import { z } from "zod";

export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  pageSize: z.number().int().positive().max(100).default(20)
});

export type PaginationInput = z.infer<typeof paginationSchema>;
