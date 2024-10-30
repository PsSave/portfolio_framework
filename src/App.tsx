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
                <SidebarMenuButton size="lg" asChild>
                  <a>
                    <div className="flex aspect-square size-10 items-center justify-center rounded-lg border-2 border-one-green opacity-80">
                      <p className="tracking-wide text-2xl font-semibold text-one-green">
                        IF
                      </p>
                    </div>
                    <div className="flex flex-col gap-[2px] leading-none">
                      <span className="font-semibold dark:text-one-white">
                        PORTFÓLIO
                      </span>
                      <span className="dark:text-one-white">
                        Frameworks para Web
                      </span>
                    </div>
                  </a>
                </SidebarMenuButton>
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
                        className="font-medium dark:text-one-white mb-1"
                      >
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <SidebarMenuSub className="border-one-green transition-all">
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url} className="h-full py-1">
                                {item.title}
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
          <header className="flex h-16 shrink-0 items-center gap-2 border-b dark:bg-[#18181B] shadow-sm">
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

            <section className="">
              <h2 className="text-2xl font-semibold mb-4">Trabalho Prático</h2>
              <p className="mb-4">
                With SSR, the page's content is generated on each request. This
                is useful for pages that display frequently updated data, or for
                pages with user-specific content.
              </p>
              {/* <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">
                    pages/ssr-example.js
                  </span>
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(`
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
  return { props: { data } }
}

export default function SSRPage({ data }) {
  return <div>{data.title}</div>
}
                  `)
                    }
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button> */}
              {/* </div>  */}
              {/* <pre className="text-sm overflow-x-auto">
                  <code>{`
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()
  return { props: { data } }
}

export default function SSRPage({ data }) {
  return <div>{data.title}</div>
}
                `}</code>
                </pre> */}
              {/* </div> */}
            </section>

            <section>
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
            </section>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
