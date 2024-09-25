import useContentStore from "@/store/contentStore";
import { Portfolio } from "../Porfolio";
import Skeleton from "react-loading-skeleton";

const GraniteCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-3">
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto de Transição (CJGTP) Usado em testeira
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/CJGTP.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto de Gancho de Pino (CJGP) Usado em fechamentio superior
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/CJGP.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto Orelha Pino Simples (CJLS) Usado em painéis
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/CJLS.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto de Orelha de Pino Duplo (CJLD) Usado em fundo de vigas e
            painéis
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/CJLD.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto Orelha de Transição (CJLT) Usado em testeiras (sacadas)
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/CJLT.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto de Orelha de Grau (CJLG) Utilização pontos específicos
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/CJLG.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto Especial de Pino Simples ou Duplo (EPS ou EPD)
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/EPS_ou_EPD.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto com afastamento (Alça especial) Usado para prolongar o
            afastamento
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/alca_especial.jpg" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

const PorcelainCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-3">
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Sistema Gancho Simples</h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/SGS.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Sistema Gancho de Transição</h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/SGT.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Sistema Orelha Simples</h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/SS.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Sistema Orelha Dupla</h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/SD.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Sistema Orelha Grau</h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/SG.jpg" alt="" />
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">
            Conjunto com afastamento (Alça especial) Usado para prolongar o
            afastamento
          </h3>
          <p className="text-sm text-muted-foreground">
            <img src="/assets/inserts/alca_especial.jpg" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

const Inserts = () => {
  const { siteData, loading } = useContentStore();

  return (
    <section className="w-full py-12 flex flex-col gap-52">
      <div className="container flex flex-col gap-5">
        <div>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Inserts
          </div>
          {!loading ? (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {siteData.inserts?.title}
            </h2>
          ) : (
            <Skeleton />
          )}
          {!loading ? (
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {siteData.inserts?.subTitle}
            </p>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="w-full h-full p-5 rounded-lg bg-slate-100 mt-8 flex gap-3 flex-col">
          <h1 className="text-2xl font-semibold flex justify-center">
            Inserts metálicos para granito
          </h1>
          <GraniteCards />
        </div>
        <div className="w-full h-full p-5 rounded-lg bg-slate-100 mt-8 flex gap-3 flex-col">
          <h1 className="text-2xl font-semibold flex justify-center">
            Inserts metálicos para porcelanato
          </h1>
          <PorcelainCards />
        </div>
      </div>
      <Portfolio />
    </section>
  );
};

export default Inserts;
