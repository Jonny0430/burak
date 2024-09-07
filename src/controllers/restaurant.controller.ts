import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from"../models/member.service";


const restaurantController: T = {};
restaurantController.goHome = (req: Request, res:Response) => {
    try {
        console.log("goHome");
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err);
    }
};
restaurantController.getLogin = (req: Request, res:Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("Error, goLogin:", err);
    }
};
restaurantController.getSignup = (req: Request, res:Response) => {
    try {
        console.log("getSingup");
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, goSignup:", err);
    }
};

restaurantController.processLogin = (req: Request, res:Response) => {
    try {
        console.log("processLogin");
      res.send("DONE");
    } catch (err) {
        console.log("Error, processLogin:", err);
    }
};


restaurantController.processSignup = (req: Request, res:Response) => {
    try {
        console.log("processSingup");
      res.send("DONE");
    } catch (err) {
        console.log("Error, processSingup:", err);
    }
};
export default restaurantController;