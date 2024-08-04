import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-white">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Preencha o formulário abaixo e um de nossos especialistas entrará em
            contato com você.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2">
            <Input type="text" placeholder="Nome" className="max-w-lg flex-1" />
            <Input
              type="email"
              placeholder="E-mail"
              className="max-w-lg flex-1"
            />
            <Textarea
              placeholder="Mensagem"
              rows={4}
              className="max-w-lg flex-1"
            />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
