import ProdctCardContainer from "./ProductCard/ProductCardContainer"
import { useEffect, useState } from "react"
import axios from "axios"
export function SectionCards() {

  const [products, setProducts] = useState([])
  useEffect(() => {

    async function getProducts() {
      const response = await axios.get("http://localhost:3001/api/v1/product", {
      })
      console.log(response.data.data)


      setProducts(response.data.data)
    }


    getProducts()
  }, [])



  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">

      {products.map((elem) => (
        <ProdctCardContainer
          key={elem.id}
          productid={elem.id}
          title={elem.name}
          description={elem.description}
          image={elem.image}
          price={elem.price} />
      ))}



    </div>
  )
}