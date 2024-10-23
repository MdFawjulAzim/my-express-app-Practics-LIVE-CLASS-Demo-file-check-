import express from 'express';
const router =express.Router();
import * as taskController from "../app/controllers/taskController.js";


//demo 1 url params 
router.post("/demo1/:name/:age/:city",taskController.demo1);

//demo 1 query params
router.post("/demo1q/:name/:age/:city",taskController.demo1q);

//demo 2 Request body params
router.post("/demo2",taskController.demo2);

//demo 3 Request form data
router.post("/demo3",taskController.demo3);










export default router;