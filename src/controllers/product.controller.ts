import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();


const productController: T = {};
/** SPA */

/** SSR */
productController.getAllProducts = async (req: Request, res:Response) => {
    try {
        console.log("getAllProducts");
        res.render("products");

       
    } catch (err) {
        console.log("Error, getAllProducts:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct = async (req: AdminRequest, res:Response) => {
    try {
        console.log("createNewProduct");
        console.log("req.body:", req.body);

       console.log("req.files:", req.files.length);
        if(!req.files?.length)
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR,Message.CREATE_FAILED);
        
        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele => {
            return ele.path;
        });
        
    
        await productService.createNewProduct(data);
        res.send(
            `<script> alert("Sucessful creation!"); window.location.replace('/admin/product/all'); </script>`
        );
    } catch (err) {
        console.log("Error, createNewProduct:", err);
        const message = 
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
       res.send(
        `<script> alert("${message}"); window.location.replace('/admin/product/all'); </script>`
       );
    }
};

productController.updateChosenProduct = async (req: Request, res:Response) => {
    try {
        console.log("updateChosenProductct");
        const id = req.params.id;
        const result = await productService.updateChosenProduct(id, req.body);


        res.status(HttpCode.OK).json({ data: result });
    } catch (err) {
        console.log("Error, updateChosenProduct:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default productController;