import { useContext } from "react"

/*Enum*/
import { EnumActionType } from "../reducers/actions/pagesActions"

/*Provider Page*/
import { ContextPages, StateContextType } from "../context/PageProvider"

const usePagesStateHook = () => {

    const context = useContext<StateContextType | undefined>(ContextPages)

    if (!context) {
        throw new Error("usePagesStateHook debe ser utilizado dentro de un PageProvider");
    }

    const { state, dispatch } = context;

    const startNewStateOnPage = (type: string) => {
        dispatch({ type: (EnumActionType as any)[type], isActive: true })
    }


    return {
        state,
        startNewStateOnPage,
    }

}


export default usePagesStateHook