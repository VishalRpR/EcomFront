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
