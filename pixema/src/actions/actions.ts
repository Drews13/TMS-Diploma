import { IFiltets } from "src/interfaces/IFilters";
import { IUser } from "src/interfaces/IUser";

export const ON_SEARCH_CREATOR = (payload: string) => ({type: "ON_SEARCH", payload});
export const SHOW_MORE_CREATOR = () => ({type: "SHOW_MORE"});
export const RESET_PAGINATION_CREATOR = () => ({type: "RESET_PAGINATION"});
export const SET_FILTERS_VISIBILITY_CREATOR = () => ({type: "SET_FILTERS_VISIBILITY"});
export const SET_FILTERS_CREATOR = (payload: IFiltets) => ({type: "SET_FILTERS", payload});
export const CLEAR_FILTERS_CREATOR = () => ({type: "CLEAR_FILTERS"});
export const SET_LOADER_VISIBILITY_CREATOR = () => ({type: "SET_LOADER_VISIBILITY"});
export const SET_USER_DATA_CREATOR = (payload: IUser | null) => ({type: "SET_USER_DATA", payload});
export const SET_MODAL_VISIBILITY_CREATOR = () => ({type: "SET_MODAL_VISIBILITY"});