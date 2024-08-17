import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import api from "@/services/api";

type LayoutContextProps = {
  siteData: any;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
};

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [siteData, setSiteDate] = useState([]);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const fetchSiteData = async () => {
    const resp = await api.get("/data");

    setSiteDate(resp.data);
  };

  useEffect(() => {
    fetchSiteData();
  }, []);

  const value = {
    siteData,
    contactRef,
  };

  return (
    <LayoutContext.Provider value={value}>
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
