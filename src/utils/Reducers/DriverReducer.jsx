import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    name: "",
    licenseNumber: "",
    driverId: "",
    riskMatrix: null || 10,
};

const DriverContext = createContext(INITIAL_STATE);

const DriverReducer = (state, action) =>{
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        default:
            return state;
    }
}

export const DriverProvider = (props) => {
    const [state, dispatch] = useReducer(DriverReducer, INITIAL_STATE);

    return (
        <DriverContext.Provider value={
            { state, dispatch }
        }>
            {props.children}
        </DriverContext.Provider>
    );
};

export default DriverContext;