import { z } from 'zod';

export const CustomerSchema = z.object({
  name: z.string(),
  birthday: z.date(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
  }),
  pets: z.array(z.object({ name: z.string(), breed: z.string() })),
  totalVisits: z.number(),
});

export type Customer = z.infer<typeof CustomerSchema>;
