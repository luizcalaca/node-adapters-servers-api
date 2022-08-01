import { Request, Response } from 'express'

export default class GetAllUserController {

    async handle(_req: Request, res: Response): Promise<Response> {
        return res.send('OK')
    }
}