export const ADD=(item)=>{
    return {
        type:"ADD_CART",
        payload:item
    }
}

//remove cart
//here we take id because we will delete the data of object which will be matched to our url id
export const DLT=(id)=>{
    return {
        type:"RMV_CART",
        payload:id
    }
}

//decrement 
//here we do decrement in cardDetails page
export const REMOVE=(items)=>{
    return {
        type:"RMV_ONE",
        payload:items
    }
}
