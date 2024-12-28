import { z } from "zod";

export const envSchema = z.object({
    VITE_GRAPHQL_RAVN_API: z.string().url(),
    VITE_GRAPHQL_RAVN_API_KEY: z.string().min(1),
});