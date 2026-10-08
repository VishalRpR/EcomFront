import ProductCard from "./ProductCard"


export default function ProdctCardContainer({description ,title,image}){

    function productCardHandler(){
        console.log("Product clicked inside product container")
    }
return(
    <>
    <ProductCard productCardHandler={productCardHandler} title={title} description={description} image={image}/>
    </>
)
}