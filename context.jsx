import { createContext,useReducer,useContext } from "react";
import red from "./reducer";
export const Cartcontext=createContext(null);
export const CarTop =()=> useContext(Cartcontext);




export const Cartprovider=(props)=>{
    let reducer=(state,action)=>{
        
       return action
        // return state;
    
   

    }

    let intialState=[];
    let[state,dispatch]=useReducer(reducer,intialState);

    
    let inscart={
        name:"",
        price:""
    }
    let [scart,dcart]=useReducer(red,inscart);
    let macBook = () =>{
        return dcart({
            type:'macbook',
            payload: {
                name:'MAcbook',
                price:10000,
            },
       });
    };

    
    let Mob = () =>{
        return dcart({
            type:'mobile',
            payload: {
                name:'phone',
                price:23000,
            },
       });
    };
    let Pane = () =>{
        return dcart({
            type:'panedrive',
            payload: {
                name:'panedrive',
                price:10000,
            },
       });
    };
    
    return(
    <Cartcontext.Provider value={{state,dispatch,...scart,macBook,Pane,Mob}}>
        {props.children}
    </Cartcontext.Provider>
)
}