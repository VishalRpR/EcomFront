
import Search from "../Search/Search";
import { Button } from "../ui/button";

function SearchBar(){
    return(
        <>
      <div className="flex items-center">
      <Search placeholder="Search for Products, Brands and More"  type="text" />
      <Button>
        Search
      </Button>
      </div>
        
       
        </>
    )
}

export default SearchBar;