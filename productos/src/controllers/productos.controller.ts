//aqui va el manesjae
import { Request, Response } from "express";

export const getAll = (_req: Request,res:Response)=> {
    //res.send("lista de productos");
    return res.status(200).json({message: "UNACH"});
}