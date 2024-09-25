import { create } from "zustand";
import api from "@/services/api";

export type Post = {
  title: string;
  description: string;
  images: string[];
};

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
  loading: boolean;
  fetchSiteData: () => Promise<void>;
};

const initSiteDataValue = {
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
  portfolio: { title: "", subTitle: "", posts: [] as Post[] },
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

const useContentStore = create<UseSiteDataProps>((set, get) => ({
  siteData: initSiteDataValue,
  loading: false,

  fetchSiteData: async () => {
    const { siteData, loading } = get();

    console.log("Antes do fetch, siteData:", siteData); // Verificar o estado inicial

    // Remover temporariamente a verificação para sempre chamar o fetch.
    // if (loading || siteData.principal.logo) return;

    if (loading) {
      console.log("Fetch em andamento...");
      return;
    }

    set({ loading: true });

    try {
      const resp = await api.get("/data");
      console.log("Dados da API recebidos:", resp.data); // Verificar se os dados da API são retornados corretamente
      set({ siteData: resp.data });

      console.log("Após o fetch, siteData:", get().siteData); // Verificar se o estado foi atualizado corretamente
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useContentStore;
