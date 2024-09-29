import { createContext, ReactElement, useState } from "react";

export const GlobalContext = createContext({
    title: '',
    setTitle: (_e: string) => { return }
})

interface Props {
    children: ReactElement
}

export const GlobalContextProvider = ({ children }: Props) => {
    const [title, setTitle] = useState('Intial Title');

    const store = { title, setTitle }

    return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
}



