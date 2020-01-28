import {DispatchAction, InitialState, rootReducer} from "./rootReducer";
import { createStore } from 'redux';

const store = createStore<InitialState, DispatchAction, null, null>(rootReducer);

export default store
