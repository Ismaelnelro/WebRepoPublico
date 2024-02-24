import { EnumActionType } from "./actions/pagesActions";



export interface IState {
    isLoading: boolean;
    isHomePageActive: boolean;
    isFormPageActive: boolean;
    isAboutPageActive: boolean;
    isContactPageActive: boolean;
    isSkillsPageActive: boolean;
    isPortfolioPageActive: boolean;
}


export type Action =
    | { type: EnumActionType.SET_HOME_ACTIVE; isActive: boolean }
    | { type: EnumActionType.SET_FORM_ACTIVE; isActive: boolean }
    | { type: EnumActionType.SET_ABOUT_ACTIVE; isActive: boolean }
    | { type: EnumActionType.SET_CONTACT_ACTIVE; isActive: boolean }
    | { type: EnumActionType.SET_SKILLS_ACTIVE; isActive: boolean }
    | { type: EnumActionType.SET_PORTFOLIO_ACTIVE; isActive: boolean }
    | { type: EnumActionType.SET_LOADING_ACTIVE; isActive: boolean };




export const initialStatePage: IState = {
    isLoading: false,
    isHomePageActive: true,
    isFormPageActive: false,
    isAboutPageActive: false,
    isContactPageActive: false,
    isSkillsPageActive: false,
    isPortfolioPageActive: false,
}


export function pageReducer(state: IState, action: Action) {

    switch (action.type) {
        case EnumActionType.SET_HOME_ACTIVE:
            return {
                ...initialStatePage,
                isHomePageActive: action.isActive,
                isLoading: action.isActive
            };
        case EnumActionType.SET_FORM_ACTIVE:
            return {
                ...initialStatePage,
                isFormPageActive: action.isActive,
                isHomePageActive: false
            };
        case EnumActionType.SET_ABOUT_ACTIVE:
            return {
                ...initialStatePage,
                isAboutPageActive: action.isActive,
                isHomePageActive: false
            };
        case EnumActionType.SET_CONTACT_ACTIVE:
            return {
                ...initialStatePage,
                isContactPageActive: action.isActive
            };
        case EnumActionType.SET_SKILLS_ACTIVE:
            return {
                ...initialStatePage,
                isSkillsPageActive: action.isActive,
                isHomePageActive: false
            };
        case EnumActionType.SET_PORTFOLIO_ACTIVE:
            return {
                ...initialStatePage,
                isPortfolioPageActive: action.isActive,
                isHomePageActive: false
            };
        case EnumActionType.SET_LOADING_ACTIVE:
            return {
                ...initialStatePage,
                isLoading: action.isActive
            }
        default:
            return { ...state };
    }
}