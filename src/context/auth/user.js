import { createContext, useState } from "react";

const UserContext = createContext();


const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;