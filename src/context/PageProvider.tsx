import React, { createContext, useReducer } from 'react'

/*Page Reducer | Interfaces | Types*/
import { Action, IState, initialStatePage, pageReducer } from '../reducers/pagesReducers';


export interface StateContextType {
  state: IState;
  dispatch: React.Dispatch<Action>;
}

export const ContextPages = createContext<StateContextType | undefined>(undefined);


const PageProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer(pageReducer, initialStatePage);


  return (
    <ContextPages.Provider value={{ state, dispatch }}>
      {children}
    </ContextPages.Provider>
  )
}

export default PageProvider