
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function ProductPage(){
    const {state}=useLocation();
    console.log(state)
    const navigate = useNavigate();

    async function addCardClickHandler(){
    try {

        const response = await axios.post("http://localhost:3001/api/v1/cart/item", {
            productId: state.key,
            cartId:1,
            quantity: 1,
        },
        {
            withCredentials:true
        }
        )

        console.log(response.data)


        if (response.data.success==true){
            navigate("/cart")
        }


        
    } catch (error) {
        if(error.response.status==401){
            navigate("/login")
          }
    }
           
    }


    function buyClickHandler(){

        navigate("/checkout",{
            state:state
        })

    }
    


    return(
        <>
        <div>
            product page
            <h1> 
                {state.title}
            </h1>
            <h1>
            {state.key}    
            </h1>
            <p>
            {state.description}
            </p>
            <p>
                {state.price}
            </p>
            
            
        </div>

        <Button color="Primary" onClick={addCardClickHandler}>
            Add to Cart 
        </Button>

        <Button color="Primary" onClick={buyClickHandler}>
            Buy Now 
        </Button>
        </>
    )
}

export default ProductPage;