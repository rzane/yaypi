import * as fastify from "fastify";
import { Storage, reviewSchema } from "./storage";

const storage = new Storage();

const app = fastify({
  logger: { prettyPrint: true }
});

app.get("/reviews", async (_request, reply) => {
  reply.send(storage.listReviews());
});

app.post(
  "/reviews",
  { schema: { body: reviewSchema } },
  async (request, reply) => {
    reply.send(storage.createReview(request.body));
  }
);

export { app };
