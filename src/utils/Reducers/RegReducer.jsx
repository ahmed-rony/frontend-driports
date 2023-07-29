import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  role: "" || "role1",
  // companyId: "",
  mobileNo: "",
  username: "",
  pricePlan: {},
  transactionId: ""
};

const RegContext = createContext(INITIAL_STATE);

const RegReducer = (state, action) => {
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

export const RegProvider = (props) => {
  const [state, dispatch] = useReducer(RegReducer, INITIAL_STATE);

  useEffect(()=>{
    const cleanedState = { ...state };
    delete cleanedState.pricePlan.features;

    sessionStorage.setItem("reg_Info", JSON.stringify(state))
}, [state])

  return (
    <RegContext.Provider value={{ state, dispatch }}>
      {props.children}
    </RegContext.Provider>
  );
};

export default RegContext;
