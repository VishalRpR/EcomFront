import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Cart() {
    const [cartitems, setCartitems] = useState([])

    useEffect(() => {

        async function listCartHandler() {
            const items = await axios.get("http://localhost:3001/api/v1/cart")

            console.log(items)

            setCartitems(items.data.data)
            console.log(items.data.data)
        }


        listCartHandler()
    }, [])


    return (

        <>
            {cartitems.map((elem) => (
                    <h1>{elem.name}</h1>
                   


            ))}
        </>

    )
}


export default Cart;