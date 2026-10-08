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