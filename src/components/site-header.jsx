
import { useNavigate } from "react-router-dom"
import SearchBar from "./Navbar/SearchBar"
import { Button } from "./ui/button"

export function SiteHeader() {
  const navigate = useNavigate();
  function onClick(e){
    navigate("/login")
  }
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">

        <SearchBar/>
        <Button onClick={onClick}>
          login
        </Button>
      </div>
    </header>
  )
}
