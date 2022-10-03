import {ERROR_DATA, RECEIVED_DATA} from "./constants";

const initialState = {
    testData: {},
    errorTestData: {},
};

const testReduxReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_DATA:
            return {
                ...state,
                testData: action.payload,
            }
        case ERROR_DATA:
            return {
                ...state,
                errorTestData: action.error,
            }
        default:
            return state;
    }
}

export default testReduxReducer;