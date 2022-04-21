const INIT_STATE={
    carts:[]
}

export const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            
                // carts:[action.payload] this will return only new value and old value will be removed
                // return{
                //     carts:[action.payload]
                // }

                //to  get old and new values use this
                // return{
                //     ...state,
                //     carts:[...state.carts,action.payload]
                // }

                // increment and decrement of quantity 
                //state.carts means data inside the carts
                //action.payload.id is the id sent by the user through payload
                //item.id means we are matching id of the item in the cart and  id sent by the user with the help of findIndex
                //itemIndex will store the id which was compared/matched
                const itemIndex = state.carts.findIndex((item)=>item.id===action.payload.id)
                
                if(itemIndex>=0){
                    //initially the quantity is 0 in the cardsData.js for each item
                    //if the quantity of itemIndex:-(when a particular item is added to cart more than once),then perform below operation
                    //if the data is already present inside the cart for once after clicking then if it is clicked again then we will
                    // increase the quantity in cardDetais rather than adding in the card seperately again and again after each click  
                    // and then we will do increment in cardDetails.js
                    state.carts[itemIndex].qnty +=1
                    return{
                        ...state,
                        carts:[...state.carts] }
                }
                else{
                    //if data is clicked once or for the first time
                    //...action.payload means no.of times matched id by itemIndex is called and then if id is called more
                    // than once then if statement will be executed  

                    const temp = {...action.payload,qnty:1}
                    return{
                        ...state,
                    carts:[...state.carts,temp] }
                }
                    
                case "RMV_CART":
                    //we will filter data inside carts array
                    const data= state.carts.filter((el)=>el.id !== action.payload)
                    
                    return {
                        ...state,
                        carts:data
                    }
                    //id send by the user and the id of data inside the carts will be compared  
                    //the above data will return the id of the data which is not matched with user data and the one which is matched will not be returned.
                  
                case "RMV_ONE" :
                // increment and decrement of quantity 
                //state.carts means data inside the carts
                //action.payload.id is the id sent by the user through payload
                //item.id means we are matching id of the item in the cart and  id sent by the user with the help of findIndex
                //itemIndex_dec will store the id which was compared/matched 
                    const itemIndex_dec  = state.carts.findIndex((item)=>item.id===action.payload.id)

                    //after finding the itemIndex_dec we will check that the item which user want to decrement is present or not
                    //if the quantity of that item is 1 or more than,then perform below operation
                    if(state.carts[itemIndex_dec].qnty >=1){

                        //to check decrement in browser console
                        // when a particular item is one or more than one then delete the item one by one and then we will do decrement in cardDetails.js
                        const dltItem = state.carts[itemIndex_dec].qnty -=1
                        console.log([...state.carts,dltItem]); // check decrement in browser console

                        return {
                            ...state,
                            carts:[...state.carts]
                        }
                    }
                    //if the quantity becomes 1 after decrementing then perform below operation and then quantity will be zero
                    else if(state.carts[itemIndex_dec].qnty === 1 ){
                        const data = state.carts.filter((el)=>el.id !== action.payload);
        
                        return {
                            ...state,
                            carts:data
                        }
                    }
            

                    break;
                    default:
                        return state
                    }
}