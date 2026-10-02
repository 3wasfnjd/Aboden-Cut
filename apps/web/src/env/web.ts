import { z } from "zod";

const webEnvSchema = z.object({
	// Node
	NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
	ANALYZE: z.string().optional(),
	NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),

	// Public
	NEXT_PUBLIC_SITE_URL: z.url().default("https://aboden-cut.vercel.app"),
	NEXT_PUBLIC_MARBLE_API_URL: z.url().default("https://api.marblecms.com"),

	// Optional integrations for the first Aboden Cut web preview.
	// These defaults allow the editor UI to build and run before external
	// database, Redis, Marble, and Freesound services are configured.
	DATABASE_URL: z
		.string()
		.default("postgresql://localhost:5432/aboden_cut"),
	BETTER_AUTH_SECRET: z
		.string()
		.default("aboden-cut-preview-secret-change-before-auth"),
	UPSTASH_REDIS_REST_URL: z
		.url()
		.default("https://example.invalid"),
	UPSTASH_REDIS_REST_TOKEN: z
		.string()
		.default("aboden-cut-preview"),
	MARBLE_WORKSPACE_KEY: z
		.string()
		.default("aboden-cut-preview"),
	FREESOUND_CLIENT_ID: z
		.string()
		.default("aboden-cut-preview"),
	FREESOUND_API_KEY: z
		.string()
		.default("aboden-cut-preview"),
});

export type WebEnv = z.infer<typeof webEnvSchema>;

export const webEnv = webEnvSchema.parse(process.env);
