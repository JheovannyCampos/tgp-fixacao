import api from "@/services/api";
import { useEffect, useMemo, useRef, useState } from "react";

export type UseSiteDataProps = {
  siteData: {
    principal: {
      logo: string;
      image: string;
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
      posts: [];
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

export const useSiteData = () => {
  const [siteData, setSiteData] = useState<UseSiteDataProps["siteData"]>({
    principal: {
      logo: "",
      image: "",
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
    portfolio: { title: "", subTitle: "", posts: [] },
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
  });

  const [loading, setLoading] = useState(true);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const fetchSiteData = async () => {
    setLoading(true);
    try {
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
      contactRef,
      loading,
    }),
    [loading, siteData]
  );

  return value;
};
