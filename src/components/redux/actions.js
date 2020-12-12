import { ADD_USER, CURRENT_PAGE, FILTER_OFF, FILTER_ON, HIDE_FORM, SHOW_FORM } from "./types";

export function showForm() {
    return {
        type: SHOW_FORM
    }
}

export function hideForm() {
    return {
        type: HIDE_FORM
    }
}

export function addUser(userData) {
    return {
        type: ADD_USER,
        payload: userData
    }
}

export function filterOn(filteredUsers) {
    return {
        type: FILTER_ON,
        payload: filteredUsers
    }
}

export function filterOff() {
    return {
        type: FILTER_OFF
    }
}

export function currentPage(currentPage) {
    return {
        type: CURRENT_PAGE,
        payload: currentPage
    }
}