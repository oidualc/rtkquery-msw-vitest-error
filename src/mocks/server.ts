import { rest } from "msw";
import { setupServer } from "msw/node";

export const restHandlers = [
  rest.get("http://localhost:8000/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.text("First post"));
  }),
];

export const server = setupServer(...restHandlers);
