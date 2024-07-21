import { ReactNode } from "react";
import { LayoutContext } from "./context";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <Header />
      {children}
      <Footer />
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
