import { ReactNode } from "react";
import { LayoutContext } from "./context";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <header>Header aqui</header>
      {children}
      <footer>Footer aqui</footer>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
