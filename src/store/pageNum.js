import { createContext, useContext } from "react";

export const PageContext = createContext({
    page: 0,
    setPage: (num)=>{}
});

export function usePage () {
    return useContext(PageContext);
}
