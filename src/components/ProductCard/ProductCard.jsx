<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function ProductCard({description ,title,image,productCardHandler}){

    return(
        <>
      
        <div className="justify-items-center bg-green-300" onClick={productCardHandler}>
            <img className="h-40 w-50" src={image}></img>
            <div>
                {description}
            </div>
            <h1>{title} </h1>
        </div>
        </>
    )
}
=======
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProductCard({description ,title,image,productCardHandler}){

    return(
        <>

        <Card className="relative mx-auto w-full max-w-sm pt-0" onClick={productCardHandler}>
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
        {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View product</Button>
      </CardFooter>
    </Card>



        </>
    )
}




>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)
