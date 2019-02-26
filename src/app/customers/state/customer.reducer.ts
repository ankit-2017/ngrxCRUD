import * as customerActions from './customer.actions';
import { Customer } from "../customer.model";
import * as fromRoot from "../../state/app-state"

export interface CustomerState {
    customers : Customer[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    customers : CustomerState
}

export const initialState: CustomerState = {
    customers : [],
    loading: false,
    loaded: false,
    error: ""
}

export function customerReducer(state = initialState, action: customerActions.Action){
    switch (action.type) {
        case customerActions.CustomerActionTypes.LOAD_CUSTOMER:
            return {
                ...state,
                loading: true
            }
        
        case customerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                customers: action.payload
            }
        
        case customerActions.CustomerActionTypes.LOAD_CUSTOMER_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            }
        default:
            return state;
    }
}