import dotenv from 'dotenv';
dotenv.config();

import { EnvironmentEnum } from "@/globals/enum";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.nativeEnum(EnvironmentEnum),
    PORT: z.string().min(1, 'PORT is required').refine((v) => !Number.isNaN(Number(v)), { message: "PORT must be a number", }),
    EXPOSE_PORT: z.string().min(1, 'EXPOSE_PORT is required').refine((v) => !Number.isNaN(Number(v)), { message: "EXPOSE_PORT must be a number", }),
});

function createEnv() {
    const parseEnvs = envSchema.safeParse(process.env);
    if (!parseEnvs.success) {
        console.error("Invalid environment variables");
        console.error("Make sure the environment variables match the env schema");
        console.error(parseEnvs.error.errors);

        process.exit(1);
    }
    console.info("Environment variables are valid");
    return parseEnvs.data;
}

const env = createEnv();

export { env };
