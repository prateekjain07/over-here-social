import {createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user : {
        _id :"61a3b95ee2cf6e30207d0171",
        "profilePicture" : "", "coverPicture" : "", "followers" : [ ], "following" : [ ], "isAdmin" : false, "username" : "Heyy", "email" : "prateekjn395@gmail.com",
    },
    isFetching : false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
 
    return (
        <AuthContext.Provider value = {{user : state.user, isFetching : state.isFetching, error: state.error, dispatch,}}>
        
        {children}
        </AuthContext.Provider>
    )
}