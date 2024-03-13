import { combineReducers, legacy_createStore as createStore } from "redux";
import { appReducer } from './reducers/app-reducer';

const rootReducer = combineReducers({
    app : appReducer
});

export const store = createStore(rootReducer);
store.subscribe(() => {});