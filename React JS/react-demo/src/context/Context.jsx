import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext(null)

const MyContext = ({children}) => {
    const [state, setState] = useState([])
    return <Context.Provider value={{state, setState}}>
        {children}
    </Context.Provider>
}

export default MyContext