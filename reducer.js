let red=(scart,action)=>{
    if(action.type==='macbook'){
    return{
        ...scart,
        name:action.payload.name,
        price:action.payload.price
    }
    }

     if(action.type==='mobile'){
        return{
            ...scart,
            name:action.payload.name,
            price:action.payload.price
        }
        }

        if(action.type==='panedrive'){
            return{
                ...scart,
                name:action.payload.name,
                price:action.payload.price
            }
            }
            return scart;

}
export default red;