import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";



@Injectable()
export class BookMiddlware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {

        const protocol = req.protocol;
        const host = req.get("host");
        const url = req.originalUrl;
        const method = req.method;
        const date = new Date().toDateString();
        console.log(`${protocol}://${host} ${url} ${method} ${date}`);

        next();

    }

}