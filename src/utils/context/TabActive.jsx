import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const TabsContext = createContext();

export function useTabs() {
  return useContext(TabsContext);
}

const TabsContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <TabsContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsContextProvider;
