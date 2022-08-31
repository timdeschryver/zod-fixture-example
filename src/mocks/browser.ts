import { setupWorker, rest } from 'msw'
import {z} from "zod";
import {createFixture} from "zod-fixture";
import {CustomerSchema} from "../models/customer";

export const handlers = [
  rest.get('/api/customers', (req, res, ctx) => {
    const customers = createFixture(z.array(CustomerSchema));
    return res(
      ctx.json(customers),
    )
  }),
]

export const worker = setupWorker(...handlers)
