<<<<<<< HEAD
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

function Home(){
return(
    <>
      <div className="max-w-4/6 justify-self-center">
        <div className="sticky top-0  ">
          <Navbar />

        </div>
        <div className="" >
          <Main />

        </div>
      </div>
    </>
)
}

=======
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";

function Home(){
return(
    <>
      <div className="max-w-4/6 justify-self-center">
        <div className="" >
       

        </div>

        </div>


        <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } 
      }
    >
     
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

              <SectionCards />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
     
    </>
)
}

>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)
export default Home;