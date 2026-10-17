import { useNavigate } from "react-router-dom"
import ProductCard from "./ProductCard"


export default function ProdctCardContainer({ productid,description, title, image }) {
    const navigate = useNavigate()

    function productCardHandler() {
        console.log("Product clicked inside product container",productid)
        navigate(`product/`,{
            state:{key:productid,description:description,title:title}
        })

    }
    return (
        
           
            <ProductCard  productCardHandler={productCardHandler} title={title} description={description} image={image} />


        
    )
}
