

// src/components/registerContext.js

import React, { createContext, useState, useContext } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [tutorData, setTutorData] = useState(null);
  const [caozinhoData, setCaozinhoData] = useState(null);

  const saveTutorData = (data) => {
    setTutorData(data);
  };

  const saveCaozinhoData = (data) => {
    setCaozinhoData(data);
  };

  return (
    <RegisterContext.Provider
      value={{ tutorData, saveTutorData, caozinhoData, saveCaozinhoData }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
