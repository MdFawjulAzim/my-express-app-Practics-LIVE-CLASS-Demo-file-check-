import express from 'express';
const router =express.Router();
import * as taskController from "../app/controllers/taskController.js";


//Create Route
router.post("/demo1",taskController.createTask);

