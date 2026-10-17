import Button from "../Button/Button";
import Search from "../Search/Search";

function SearchBar(){
    return(
        <>
      
        <Search placeholder="Search for Products, Brands and More"  type="text" />
        <Button buttonText={"Search"} />
       
        </>
    )
}

export default SearchBar;