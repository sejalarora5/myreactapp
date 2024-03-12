import axios from "axios";

export const FETCH_USER_REQUEST= 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS= 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE= 'FETCH_USER_FAILURE';
export const fetchUsersDataRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUsersDataSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
export const fetchUsersDataFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
export const fetchUsersData = () => {
    return (dispatch) => {
        dispatch(fetchUsersDataRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            response => {
                const users = response.data
                dispatch(fetchUsersDataSuccess(users))
            }
        )
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchUsersDataFailure(errorMessage))
        })
    }
}