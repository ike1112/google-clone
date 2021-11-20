//create the initial state
export const initialState={
    term:null
};


//create  action types
export const actionTypes={
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
};

//create a reducer
export const reducer=(state,action)=>{
    switch(action.type)
    {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term:action.term
            }
            default:
                return state;
    }
}