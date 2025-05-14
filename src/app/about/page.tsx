import Container from "@/components/Container";
import Credits from "@/components/Credits";
import Enterprises from "@/components/Enterprises";
import ExplainText from "@/components/ExplainText";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre | Kodarte</title>
        <meta
          name="description"
          content="Projetos que a Kodarte já fundou, trabalhou e criou. Conhecendo as empresas que confiam em nossos serviços."
        />
      </Head>
      <Container className="!p-0">
        <Navbar />
        <main className="flex">
          <Credits margin={false} />
          <div className="px-[2.81vw] max-mdl:px-[6vw] py-10 mx-auto mt-[15vh] max-mdl:mt-[7.5vh]">
            <h2 className="text-lg font-space-grotesk font-bold leading-7 tracking-[0.32rem] text-primary-200 text-center uppercase to-top">
              empresas confiam nos nossos serviços
            </h2>
            <h1 className="mt-3 font-bold tracking-widest font-space-grotesk text-[2rem] max-xl:text-2xl text-support-100 uppercase text-center max-w-[791px] mx-auto to-top">
              somos os{" "}
              <ExplainText
                text="Artesãos"
                explain={
                  <>
                    <span className="font-bold">Artesãos da web</span> são quem moldam códigos como
                    arte, criando sites com cuidado, detalhe e paixão, como quem esculpe com pixels
                    e lógica.
                  </>
                }
              />{" "}
              que têm a{" "}
              <ExplainText
                text="cosmovisão"
                explain={
                  <>
                    <span className="font-bold">Cosmovisão</span> é o jeito único de enxergar o
                    mundo — como se cada pessoa usasse óculos diferentes pra entender a vida, o
                    certo, o errado e o tudo.
                  </>
                }
              />{" "}
              que vai levar seu site ao auge da web
            </h1>
            <p className="mt-3 text-lg tracking-[0.1rem] font-normal text-support-400 text-center max-w-[791px] mx-auto">
              Acreditamos que um bom trabalho vai além do código: ele traduz propósito. Nosso maior
              valor é ver nossos clientes verdadeiramente satisfeitos, não só com o que entregamos,
              mas com o que aquilo representa. Se decidir caminhar conosco, entregaremos mais que um
              site — entregaremos presença, clareza e significado digital.
            </p>
            <Enterprises />
          </div>
        </main>
      </Container>
    </>
  );
}
