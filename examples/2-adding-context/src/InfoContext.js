import React, { useReducer } from "react";

let reducer = (info, newInfo) => {
  return { ...info, ...newInfo };
};

const initialState = {
  name: "John Smith",
  age: 0,
  email: "john.smith@gmail.com"
};

const InfoContext = React.createContext();

function InfoProvider(props) {
  const [info, setInfo] = useReducer(reducer, initialState);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
}

export { InfoContext, InfoProvider };
