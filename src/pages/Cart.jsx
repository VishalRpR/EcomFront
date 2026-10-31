import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const [cartitems, setCartitems] = useState([])

    useEffect(() => {

        async function listCartHandler() {
            try {


                const items = await axios.get("http://localhost:3001/api/v1/cart")
                const products = await axios.get("http://localhost:3001/api/v1/product")



                const idsToKeep = new Set(items.data.data.map(item => item.productId));

                const filtered = products.data.data.filter(item => idsToKeep.has(item.id));

                console.log(filtered)


                setCartitems(filtered)



            } catch (error) {
                 if(error.response.status==401){
                   navigate("/login")
                 }
            }




        }


        listCartHandler()
    }, [])


    return (

        <>
            {cartitems.map((elem) => {
                return <>
                    <p>product</p>
                    <h1 key={elem.id}>{elem.name}</h1>
                    <p>
                        {elem.desciption}
                    </p>
                </>
            }




            )}
        </>

    )
}


export default Cart;