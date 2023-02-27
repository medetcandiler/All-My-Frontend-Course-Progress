import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(['medet', 'aybis', 'demos'])

    const values = {
        user,
        setUser
    }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)