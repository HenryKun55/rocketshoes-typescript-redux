import {Action, Reducer} from "redux";

export interface InitialState {
    name: string;
    address: string;
}

export const initialState: InitialState = {
    name: '',
    address: '',
};

export interface DispatchAction extends Action {
    payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state, action) => {
    return initialState;
};
