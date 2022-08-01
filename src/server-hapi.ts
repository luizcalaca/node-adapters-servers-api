import HapiRoutesAdapter from "./adapters/hapi-routes.adapter"
import GetAllUserController from "./controllers/user.controller"
import Hapi from '@hapi/hapi'

(async function start() {
    const server = Hapi.server({
        port: 3335,
        host: 'localhost'
    })
    await server.start()

    const userController = new GetAllUserController()

    server.route({
        method: 'GET',
        path: '/users',
        handler: HapiRoutesAdapter.adapt(userController)
    })
}())