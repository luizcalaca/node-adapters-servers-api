import { IController, IRequest, IResponse } from "../controllers/controller.interface";
import { Request, ResponseToolkit } from "@hapi/hapi";

export default class HapiRoutesAdapter {

    static adapt(controller: IController) {
        return async (req: Request, res: ResponseToolkit) => {
            const request: IRequest = {
                payload: req.payload,
                params: req.params,
                query: req.query
            }
            const response: IResponse = await controller.handle(request)
            return res.response(response.payload).code(response.status)
        }
    }
}