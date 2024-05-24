import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { userRoutes } from "./http/controller/users/routes";
import { gymsRoutes } from "./http/controller/gyms/routes";
import { checkInsRoutes } from "./http/controller/check-ins/routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRETE,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m",
  },
});
app.register(fastifyCookie);

app.register(userRoutes);
app.register(gymsRoutes);
app.register(checkInsRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "❌ Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to on external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "⚠️ Internal server error." });
});
