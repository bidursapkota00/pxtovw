import {ERROR_DATA, RECEIVED_DATA} from "./constants";

export const fetchDataSuccess = (payload) => ({
    type: RECEIVED_DATA,
    payload,
});

export const fetchDataError = (error) => ({
    type: ERROR_DATA,
    error,
})