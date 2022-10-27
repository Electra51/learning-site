import { useState } from "react";
import { createContext } from "react";
import CheckOut from "../../Pages/CheckOut/CheckOut";





 export const AuthContext = createContext();
// const auth=getAuth(App)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    



//     const authInfo = { user,providerLogin}
    


    return <AuthContext.Provider value={{user, setUser,loading,setLoading}}>
           {children}
           </AuthContext.Provider>
            
        
//     );
}

export default AuthProvider;