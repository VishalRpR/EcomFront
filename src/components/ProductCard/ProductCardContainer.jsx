<<<<<<< HEAD
import { useNavigate } from "react-router-dom"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import axios from "axios"


export default function ProdctCardContainer({ description, title, image }) {
    const navigate = useNavigate()
    const [products, setProducts] = useState("")
    useEffect(() => {

        async function getProducts() {
            const response = await axios.get("http://localhost:3001/product", {
            })
            console.log(response)


            setProducts[resonse.data]
        }
       

        getProducts()
    }, [])

    function productCardHandler(productid) {
        console.log("Product clicked inside product container")
        navigate(`product/${productid}`)

    }
    return (
        <>
            {/* {products.map((elem) => {
                <ProductCard key={elem.id} productCardHandler={() => productCardHandler(elem.id)} title={elem.title} description={elem.description} image={elem.image} />
            })} */}
            <ProductCard productCardHandler={productCardHandler} title={title} description={description} image={image} />
        </>
    )
=======
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
>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)
}