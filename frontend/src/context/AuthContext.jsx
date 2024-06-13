import React, {createContext,useContext,useState} from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);


    const login = ()=>{
        setIsAuthenticated(true);
    }


    const logout = ()=>{
        setIsAuthenticated(false);
    }



  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
        
        {children}
        
        </AuthContext.Provider>
  )
}


const useAuth = ()=>{
    const context = useContext(AuthContext);
    console.log(context)
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    const isAuthenticated = ()=>context.isAuthenticated;

    return{...context, isAuthenticated};

};



export {AuthProvider,useAuth}
