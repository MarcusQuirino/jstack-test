/**
 * Define your environment variables here
 *
 * Access these in your API (fully type-safe):
 * @see https://hono.dev/docs/helpers/adapter#env
 */

export type Bindings = {
  REDIS_URL: string
  REDIS_TOKEN: string
  TURSO_DATABASE_URL: string
  TURSO_AUTH_TOKEN: string
}
