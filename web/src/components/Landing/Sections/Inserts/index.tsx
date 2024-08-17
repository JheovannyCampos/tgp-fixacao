import { Card } from "@/components/ui/card";

const Inserts = () => {
  return (
    <div className="w-full bg-[#f1f5f9] flex flex-col lg:flex-row">
      <div className="lg:w-[50%] py-12 flex flex-col justify-center pl-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Inserts de Fixação
        </h2>
        <p className="lgmax-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Conheça os inserts de fixação que utilizamos para garantir a
          durabilidade da sua fachada de porcelanato.
        </p>
      </div>
      <div className="lg:w-[50%] h-full flex flex-col gap-6 justify-end py-3 lg:py-12 lg:pr-12 px-4">
        <Card className="p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            <img
              src="https://storage.builderall.com//franquias/2/5264/editor-html/7917813.jpg"
              width="84"
              height="84"
              alt="Insert 1"
              className="rounded-md"
            />
            <div>
              <p className="font-medium">Insert Tipo A</p>
              <p className="text-muted-foreground text-sm">
                Ideal para fachadas com estrutura de concreto.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            <img
              src="https://storage.builderall.com//franquias/2/5264/editor-html/7917890.jpg"
              width="84"
              height="84"
              alt="Insert 2"
              className="rounded-md"
            />
            <div>
              <p className="font-medium">Insert Tipo B</p>
              <p className="text-muted-foreground text-sm">
                Indicado para fachadas com estrutura metálica.
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            <img
              src="https://storage.builderall.com//franquias/2/5264/editor-html/7917963.jpg"
              width="84"
              height="84"
              alt="Insert 3"
              className="rounded-md"
            />
            <div>
              <p className="font-medium">Insert Tipo C</p>
              <p className="text-muted-foreground text-sm">
                Utilizado em fachadas com estrutura mista.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Inserts;
