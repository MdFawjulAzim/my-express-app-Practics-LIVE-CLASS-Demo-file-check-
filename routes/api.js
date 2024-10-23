import express from 'express';
const router =express.Router();
import * as taskController from "../app/controllers/taskController.js";


//demo 1 url params 
router.post("/demo1/:name/:age/:city",taskController.demo1);









export default router;