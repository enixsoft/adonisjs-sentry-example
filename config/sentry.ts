import app from '@adonisjs/core/services/app'
import { defineConfig } from '@rlanz/sentry'
import env from '#start/env'

export default defineConfig({
  /**
   * Enable or disable Sentry
   */
  enabled: true,

  /**
   * The environment Sentry is running in
   */
  environment: env.get('ENV', app.nodeEnvironment),

  /**
   * The DSN of the project
   */
  dsn: env.get('SENTRY_DSN', ''),

  /**
   * Additional integrations to use with the Sentry SDK
   * @see https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/#available-integrations
   */
  integrations: [],

  /**
   * The sample rate of traces to send to Sentry
   * @see https://docs.sentry.io/platforms/javascript/guides/node/configuration/sampling
   */
  tracesSampleRate: env.get('SENTRY_TRACES_SAMPLE_RATE', 1),

  /**
   * Enable debug mode
   */
  debug: true,
})
