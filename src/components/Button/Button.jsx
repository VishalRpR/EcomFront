<<<<<<< HEAD
import { buttonStyles } from "./buttonstyles";

export default function Button({buttonText,type}){
    return(
        <button
         className={`${buttonStyles(type)} px-5 py-2 rounded `}
         > 
         
         {buttonText}
         
         </button>
    )
}

=======
import { buttonStyles } from "./buttonstyles";

export default function Button({buttonText,type}){
    return(
        <button
         className={`${buttonStyles(type)} px-5 py-2 rounded `}
         > 
         
         {buttonText}
         
         </button>
    )
}

>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)
