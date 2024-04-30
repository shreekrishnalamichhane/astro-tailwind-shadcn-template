import { env } from "@/config/env";
import { EnvironmentEnum } from "@/globals/enum";

export const isDev = env.NODE_ENV === EnvironmentEnum.Development;
export const isStaging = env.NODE_ENV === EnvironmentEnum.Staging;
export const isProd = env.NODE_ENV === EnvironmentEnum.Production;