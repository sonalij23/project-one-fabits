import React, { createContext, useContext,  useState } from 'react';


const FocusContext = createContext();

export const useFocus = () => useContext(FocusContext);


export const FocusProvider = ({ children }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocusChange = (focused) => {
    setIsInputFocused(focused);
  };



  
  return (
    <FocusContext.Provider value={{ isInputFocused, handleInputFocusChange }}>
      {children}
    </FocusContext.Provider>
  );
};
