import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import api from "@/services/api";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { SkeletonTheme } from "react-loading-skeleton";

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
      <SkeletonTheme baseColor="#f7f7f7">
        <Header />
        {children}
        <FloatingWhatsApp
          phoneNumber="5531994143730"
          accountName="TGP Fixação"
          chatMessage="Olá! Bem-vindo à TGP Fixação. Agradecemos pelo seu contato. Nossa equipe responderá em breve."
          placeholder="Digite uma mensagem"
          statusMessage="Geralmente respondemos em menos de 1 hora."
        />
        <Footer />
      </SkeletonTheme>
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
