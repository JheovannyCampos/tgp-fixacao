import { Portfolio } from "../Porfolio";

const Card = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-3">
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Reforma de Fachadas</h3>
          <p className="text-sm text-muted-foreground">
            Realizamos a reforma completa de fachadas, utilizando materiais de
            alta qualidade e tecnologia de ponta.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Instalação de Fachadas</h3>
          <p className="text-sm text-muted-foreground">
            Oferecemos a instalação de fachadas de porcelanato em novos
            empreendimentos, garantindo a qualidade e durabilidade do projeto.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Manutenção de Fachadas</h3>
          <p className="text-sm text-muted-foreground">
            Realizamos a manutenção e limpeza periódica das fachadas, garantindo
            a preservação da aparência e a segurança dos usuários.
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="w-full py-12">
      <div className="container">
        <div>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Sobre
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Sobre a TGP{" "}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A TGP é uma empresa especializada em soluções de fachadas de
            porcelanato. Fundada em 2010, a empresa se consolidou como uma das
            principais referências no mercado, oferecendo serviços de alta
            qualidade e inovação tecnológica.
          </p>
        </div>
        <Card />
      </div>
      <Portfolio />
    </section>
  );
};

export default About;
