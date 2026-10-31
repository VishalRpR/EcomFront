import { useLocation, useNavigate } from "react-router-dom";

function Checkout(){

    const {state}=useLocation();
    console.log(state)
    const navigate = useNavigate();
    return (
        <>
        <div>
            {state.title}
            <p>
                {state.description}
            </p>
            <h1>
               {state.price} 
            </h1>
        </div>
    </>)

}

export default Checkout;