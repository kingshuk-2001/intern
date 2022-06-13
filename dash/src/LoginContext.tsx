import { createContext, useState } from "react";

const loginContext  = createContext<any>({});

export function LoginProvider({children}:any){
    return (
        <loginContext.Provider value={{auth:true}}>{children}</loginContext.Provider>
    )
}

export default loginContext