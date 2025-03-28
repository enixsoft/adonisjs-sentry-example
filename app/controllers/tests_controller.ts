import type { HttpContext } from '@adonisjs/core/http'
import { Sentry } from '@rlanz/sentry'

export default class TestsController {
  public async error() {
    throw new Error('Test error')
  }

  public async span(ctx: HttpContext) {
    const id = ctx.params.id

    await Sentry.startSpan({ name: `test/span/${id}` }, async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })

    return {
      spanId: id,
    }
  }

  public async user(ctx: HttpContext) {
    const id = ctx.params.id

    Sentry.setUser({
      id,
    })

    return {
      userId: id,
    }
  }
}
