import { ADD_USER, CURRENT_PAGE, FILTER_OFF, FILTER_ON, HIDE_FORM, SHOW_FORM } from "./types"

const initialState = {
    form: false,
    users: JSON.parse(localStorage.getItem('users')) || [],
    filteredUsers: [],
    filter: false,
    pages: 1,
    currentPage: 1
}

export const rootReduser = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FORM:
            return {...state, form: !state.form}
        case HIDE_FORM:
            return {...state, form: !state.form}
        case ADD_USER:
            action.payload.id = state.users.length+1
            localStorage.setItem('users', JSON.stringify([...state.users, action.payload]))
            return {...state, users: [...state.users, action.payload]}
        case FILTER_ON:
            return {...state, filteredUsers: action.payload, filter: true}
        case FILTER_OFF:
            return {...state, filteredUsers: [], filter: false}
        case CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        
        default: return state
    }


}