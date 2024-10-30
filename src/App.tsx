import { ExternalLink } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Aula 1",
      url: "",
      items: [
        {
          title: "Avaliação e Planejamento",
          url: "",
          isActive: true,
        },
        {
          title: "Python e Flask",
          url: "",
          isActive: false,
        },
        {
          title: "Venv: Ambientes Virtuais",
          url: "",
          isActive: false,
        },
      ],
    },
    {
      title: "Aula 2",
      url: "",
      items: [
        {
          title: "Sem aula",
          url: "",
          isActive: false,
        },
      ],
    },
    {
      title: "Aula 3",
      url: "",
      items: [
        {
          title: "Pip: Gerenciador de Pacotes",
          url: "",
          isActive: false,
        },
        {
          title: "Criando um Ambiente Virtual",
          url: "",
          isActive: false,
        },
        {
          title: "Estrutura de pastas e arquivos do Flask",
          url: "",
          isActive: false,
        },
        {
          title: "Projeto em grupo",
          url: "",
          isActive: false,
        },
      ],
    },
  ],
};
function App() {
  return (
    <>
      <SidebarProvider>
        <Sidebar className="dark">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <a className="flex items-center gap-3 px-2 pt-2 pb-0">
                  <div
                    className="flex aspect-square size-10 items-center justify-center rounded-lg 
                  bg-green-500/10
              "
                  >
                    <p className="tracking-wide text-2xl font-semibold text-one-green ">
                      IF
                    </p>
                  </div>
                  <div className="flex flex-col gap-[2px] leading-none ">
                    <span className="text-green-200 group-hover:text-green-100 transition-colors duration-300">
                      PORTFÓLIO
                    </span>
                    <span className="text-green-200 group-hover:text-green-100 transition-colors duration-300">
                      Frameworks para Web
                    </span>
                  </div>
                </a>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="font-medium text-green-400 hover:text-green-100 transition-colors duration-300 mb-1"
                      >
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <SidebarMenuSub className="border-green-800 transition-all">
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={subItem.isActive}
                              className={`h-full py-1 ${
                                subItem.isActive
                                  ? "text-green-300 bg-green-900/30"
                                  : "text-green-200 hover:text-green-100"
                              } transition-colors duration-300`}
                            >
                              <a href={subItem.url} className="h-full py-1">
                                {subItem.title}
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset className="dark bg-gradient-to-tl from-neutral-700 via-neutral-800 to-neutral-900">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b dark:bg-[#18181B] shadow-sm ">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger className="text-one-white" />
              <Separator
                orientation="vertical"
                className="mr-2 h-4 bg-one-green"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      {data.navMain[0].title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block text-one-green" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {data.navMain[0].items[0].title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div
            className="flex flex-1 flex-col gap-8 p-8 max-w-4xl mx-auto dark:text-gray-300 
"
          >
            <section>
              <h1 className="text-4xl font-bold mb-4 ">
                Avaliação e Planejamento
              </h1>
              <p className="text-lg text-gray-700 mb-2 dark:text-gray-300">
                Conforme a aula, o planejamento dos trabalhos e das provas foram
                votados pelos alunos. Com trabalhos praticos e uma prova que
                sera um Live Coding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1ª nota - programação ao vivo
              </h2>
              <p className="mb-2">
                Vai ser uma prova prática, o tema será passado pelo professor
                48h antes da prova. Será individual.
              </p>
              <small className="underline">11 e 18 de dezembro</small>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2ª nota - portfólio
              </h2>
              <p className="mb-2">
                O portfólio deve conter tudo que foi passado nas aulas, desde o
                primeiro dia. É importante ter também todos os projetos e
                codigos passados em aula (funcionando).
              </p>
              <small className="underline">12 de fevereiro</small>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3ª nota - aplicação prática
              </h2>
              <p className="mb-2">
                Precisa ser entregue uma API desenvolvida pelo aluno, com pelo
                menos um endpoint, documentado, com código limpo e validado.
                <br />
                Tem um bonus para quem usar aplicação Elastica/Escalável.
                <br />
                Precisa estar integrado com um banco de dados e o projeto será
                testado apenas com a documentação criado pelo aluno.
              </p>
              <small className="underline">22 de janeiro - individual</small>
            </section>
            {/* <section>
              <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
              <p className="mb-4">
                For more information on data fetching in Next.js, check out the
                official documentation:
              </p>
              <a
                href="https://nextjs.org/docs/basic-features/data-fetching"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
              >
                Next.js Data Fetching Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </section> */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
