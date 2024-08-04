import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import api from "@/services/api";

type LayoutContextProps = {
  siteData: any;
};

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [siteData, setSiteDate] = useState([]);

  const fetchSiteData = useCallback(async () => {
    const resp = await api.get("/data");

    setSiteDate(resp.data);
  }, []);

  useEffect(() => {
    fetchSiteData();
  }, [fetchSiteData]);

  return (
    <LayoutContext.Provider value={{ siteData }}>
      <Header />
      {children}
      <Footer />
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("Sem contexto");
  }

  return context;
};

export default LayoutProvider;
