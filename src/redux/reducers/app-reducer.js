import { AppActions } from '../actions/app-actions';
 
const initialState = {
    setSelectedTab : 1
}

export function appReducer(state = initialState,action){
    switch(action.type){
        case AppActions.SET_SELECTED_MENU_KEY : 
            return {
                ...state,
                setSelectedTab : action.payload
            }
        default : return state;
    }
}