import { getAllProduct,categorydata,addData,removeData,updateData} from "./action-type"
import {productData} from "./../data/productData";
import {categoryData} from "./../data/categoryData";

export const getAllproduct=()=>{
    let list=productData.map((list)=>list={...list,count:1})
    return{
        type:getAllProduct,
        payload:list
    }
}
export const allCategoryData=()=>{
    return{
        type:categorydata,
        payload:categoryData
    }
}
export const addProduct=(data)=>{
    return{
        type:addData,
        payload:data
    }
}
export const increseProduct=(data)=>{
    return{
        type:updateData,
        payload:data
    }
}
export const decreaseProduct=(data)=>{
    return{
        type:removeData,
        payload:data
    }
}
// export const loginUser=(data)=>{
//     return{
//         type:login,
//         payload:data
//     }
// }
// export const signupUser=(data)=>{
//     return{
//         type:signup,
//         payload:data
//     }
// }
