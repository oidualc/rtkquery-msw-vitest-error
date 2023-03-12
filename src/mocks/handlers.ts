import { rest } from "msw";

export const restHandlers = [
  rest.get("http://localhost:8000/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ post: "First post" }));
  }),
];
