import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  vin: "",
  brand: "",
  model: "",
  color: "",
  plate: "",
};

const VehicleContext = createContext(INITIAL_STATE);

const VehicleReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export const VehicleProvider = (props) => {
  const [state, dispatch] = useReducer(VehicleReducer, INITIAL_STATE);

  return (
    <VehicleContext.Provider value={{ state, dispatch }}>
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleContext;
