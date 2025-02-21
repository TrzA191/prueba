//mandar a llamar getAll
//se definien los endpont
// protocolos htttp

import {Router} from "express";

import {getAll} from "../controllers/productos.controller";

const router =Router();

//endponit Get: /productos/all 
router.get("/all");

export default router;
