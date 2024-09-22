import mongoose, { Schema  } from "mongoose";
import { productCollection,ProductSize,ProductStatus, ProductVolume } from "../libs/enums/product.enum";



const productSchema = new Schema(
    {
      ProductStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
      },

      productCollection: {
        type: String,
        enum: productCollection,
        required: true,
      },

    productName: {
        type: String,
        required: true,
    },

    productPrice: {
        type: Number,
        required: true,
    },

    ProductSize: {
        type: String,
        enum: ProductSize,
        default: ProductSize.NORMAL,
    },

    ProductVolume: {
        type: String,
        enum: ProductVolume,
        default: ProductVolume.ONE,
    },

    productDesc: {
        type: String,
        required: true,
    },

    productImages: {
        type: [String],
        default: [],
    },

    productViews: {type: Number,
        default: 0,
    }
    },
{ timestamps: true }
);

productSchema.index(
    { ProductName: 1, ProductSize: 1, ProductVolume: 1},
    { unique: true }
);

export default mongoose.model('Product',productSchema);