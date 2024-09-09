import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from"../models/member.service";
import { MemberInput } from "../libs/types/member";
import {  MemberType } from "../libs/enums/member.enum";


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


restaurantController.processSignup = async (req: Request, res:Response) => {
    try {
        console.log("processSingup");
        console.log("body:", req.body);

         const newMember: MemberInput = req.body;
         newMember.memberTaype = MemberType.RESTAURANT; 

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
      res.send(result);
    } catch (err) {
        console.log("Error, processSingup:", err);
    }
};
export default restaurantController;