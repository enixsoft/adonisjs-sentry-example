/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TestsController = () => import('../app/controllers/tests_controller.js')

router.get('/', async () => {
  return {
    message: 'Hello World',
  }
})

router
  .group(() => {
    router.get('/error', [TestsController, 'error'])
    router.get('/span/:id', [TestsController, 'span'])
    router.get('/user/:id', [TestsController, 'user'])
  })
  .prefix('/test')
