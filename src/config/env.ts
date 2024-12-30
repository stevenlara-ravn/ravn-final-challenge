import { envSchema } from "@/schemas/env";

const { success, error, data } = envSchema.safeParse(import.meta.env);

if (!success) {
  console.error("❌ Invalid environment variables:", error?.format());
  throw new Error("Invalid environment variables");
}

export const { VITE_GRAPHQL_RAVN_API, VITE_GRAPHQL_RAVN_API_KEY } = data;
