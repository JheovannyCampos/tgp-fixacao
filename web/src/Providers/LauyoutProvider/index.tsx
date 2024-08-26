import {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Header from "../../components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { SkeletonTheme } from "react-loading-skeleton";
import api from "@/services/api";
import { LayoutContext } from "../context";

export type Post = {
  title: string;
  description: string;
  images: string[];
};

export type UseSiteDataProps = {
  siteData: {
    principal: {
      logo: string;
      image1: string;
      image2: string;
      image3: string;
      image4: string;
      image5: string;
      subTitle: string;
      title: string;
    };
    about: {
      cardDescription1: string;
      cardDescription2: string;
      cardDescription3: string;
      cardTitle1: string;
      cardTitle2: string;
      cardTitle3: string;
      subTitle: string;
      title: string;
    };
    services: {
      info1: string;
      description1: string;
      info2: string;
      description2: string;
      info3: string;
      description3: string;
      image: string;
      subTitle: string;
      title: string;
    };
    whatsapp: {
      message: string;
      name: string;
      phone: string;
      statusMessage: string;
    };
    portfolio: {
      title: string;
      subTitle: string;
      posts: Post[];
    };
    contact: {
      title: string;
      subTitle: string;
    };
    inserts: {
      title: string;
      subTitle: string;
      insertTitle1: string;
      insertSubTitle1: string;
      insertTitle2: string;
      insertSubTitle2: string;
      insertTitle3: string;
      insertSubTitle3: string;
      insertImage1: string;
      insertImage2: string;
      insertImagem3: string;
    };
  };
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
  loading: boolean;
};

const initSiteDataValue = {
  principal: {
    logo: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    subTitle: "",
    title: "",
  },
  about: {
    cardDescription1: "",
    cardDescription2: "",
    cardDescription3: "",
    cardTitle1: "",
    cardTitle2: "",
    cardTitle3: "",
    subTitle: "",
    title: "",
  },
  services: {
    info1: "",
    description1: "",
    info2: "",
    description2: "",
    info3: "",
    description3: "",
    image: "",
    subTitle: "",
    title: "",
  },
  whatsapp: { message: "", name: "", phone: "", statusMessage: "" },
  portfolio: { title: "", subTitle: "", posts: [] as never },
  contact: { title: "", subTitle: "" },
  inserts: {
    title: "",
    subTitle: "",
    insertTitle1: "",
    insertSubTitle1: "",
    insertTitle2: "",
    insertSubTitle2: "",
    insertTitle3: "",
    insertSubTitle3: "",
    insertImage1: "",
    insertImage2: "",
    insertImagem3: "",
  },
};

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [siteData, setSiteData] =
    useState<UseSiteDataProps["siteData"]>(initSiteDataValue);
  const [loading, setLoading] = useState(true);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const fetchSiteData = async () => {
    try {
      setLoading(true);
      const resp = await api.get("/data");

      setSiteData(resp.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteData();
  }, []);

  const value = useMemo(
    () => ({
      siteData,
      loading,
      contactRef,
    }),
    [loading, siteData]
  );

  return (
    <LayoutContext.Provider value={value}>
      <SkeletonTheme baseColor="#f7f7f7">
        <Header />
        {children}
        <FloatingWhatsApp
          phoneNumber={siteData.whatsapp?.phone}
          accountName={siteData.whatsapp?.name}
          chatMessage={siteData.whatsapp?.message}
          placeholder="Digite uma mensagem"
          avatar={siteData.principal?.logo}
          statusMessage={siteData.whatsapp?.statusMessage}
        />
        <Footer />
      </SkeletonTheme>
    </LayoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("Sem contexto");
  }

  return context;
};

export default LayoutProvider;
