import { createContext, useState } from 'react';

const LogUserContext = createContext(null)

export const LogUserProvider = ({ children }) => {
    const [ data, setData ] = useState(null)

    const values={ data, setData}

    return <LogUserContext.Provider value={values}>{children}</LogUserContext.Provider>
}

export default LogUserContext;