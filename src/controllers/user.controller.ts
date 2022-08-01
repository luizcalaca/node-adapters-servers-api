import { IController, IRequest, IResponse } from './controller.interface'

export default class GetAllUserController implements IController {

    async handle(_req: IRequest): Promise<IResponse> {
        return {
            status: 200,
            payload: {
                message: 'Olá, adapter express'
            }
        }
    }
}