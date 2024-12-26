import { z } from '@hono/zod-openapi'

// The output from the route
export const UserSchema = z.object({
    name: z.string().min(1).max(10).openapi({
      example: 'John Doe',
    }),
    age:z.number().int().openapi({
      example: 30,
    }),
    id:z.string().min(1).max(10).openapi({
      example: '123',
    }),
 })
  