import Button from "../Button/Button";
import Search from "../Search/Search";

function Navbar(){
    return(
        <>
        <Search placeholder="Search for Products, Brands and More"  type="text" />
        <Button buttonText={"Search"} type="warning" />
        </>
    )
}

export default Navbar;