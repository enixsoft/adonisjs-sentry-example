/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { Sentry } from '@rlanz/sentry'

router.get('/test/error', async () => {
  throw new Error('Test error')
})

router.get('/test/span/:id', async (ctx) => {
  const id = ctx.params.id

  await Sentry.startSpan({ name: `test/span/${id}` }, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  })

  return {
    spanId: id,
  }
})

router.get('/test/user/:id', async (ctx) => {
  const id = ctx.params.id

  Sentry.setUser({
    id,
    email: 'test@test.test',
  })

  return {
    userId: id,
  }
})
