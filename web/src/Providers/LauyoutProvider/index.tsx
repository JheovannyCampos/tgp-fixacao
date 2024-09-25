import { ReactNode, useContext, useEffect, useMemo, useRef } from "react";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { SkeletonTheme } from "react-loading-skeleton";
import useContentStore from "@/store/contentStore";
import { LayoutContext } from "../context";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const { siteData, loading, fetchSiteData } = useContentStore();
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchSiteData();
  }, []);

  const value = useMemo(
    () => ({
      contactRef,
    }),
    [contactRef]
  );

  return (
    <LayoutContext.Provider value={value}>
      <SkeletonTheme baseColor="#f7f7f7">
        <Header />
        {children}
        {!loading && (
          <FloatingWhatsApp
            phoneNumber={siteData.whatsapp?.phone}
            accountName={siteData.whatsapp?.name}
            chatMessage={siteData.whatsapp?.message}
            placeholder="Digite uma mensagem"
            avatar={siteData.principal?.logo}
            statusMessage={siteData.whatsapp?.statusMessage}
          />
        )}
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
