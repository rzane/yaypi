import * as fastify from "fastify";

const app = fastify({
  logger: { prettyPrint: true }
});

app.get("/", (_request, reply) => {
  reply.send({ hello: "world" });
});

export { app };
