//primero el ejercicio que se va ahhacer ess tomar la data del json por medio de una promesa luego esta misma data renderizarla por UIX
//primero importamos la data 
import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import { getData } from "../helpers/getData.js"
import { ItemList } from "./ItemList.jsx"
export const ItemListContainer = () => {

    try {
        //ya vimos que conseguimos la data ahora debemos de crear un useState por que vamos a utilizar variables que van a cambiar de estado y de esta amnera se podra actualizar con react en vez de hacerlo esttatico como seria si no utilizamos el useState que permite la ctualziacion y cambios en elementos unicos del array 
        const [products, setProducts] = useState([])
        //ahora que lo tenemos ahora hacemos una funcion que lo que va a tener dentro es un apromesa y retornara el resutlado de la data capturada por que se hace una rpoemsa? por que la pedida de daa para lectura  o escritura etc son emtodos asincronos 

        useEffect(() => {
            getData()
                .then((productos) => {
                    setProducts(productos)
                    console.log("esto es produuuucts ", productos)
                })

                .catch((err) => {
                    console.log("hubo un error en get data .then ", err)
                })

        }, [])
        console.log("estiiiiiii", products)


        return (
            <div className="target">
                <ItemList products={products} />
            </div>
        )


    } catch (error) {
        console.log("hubo un error ", error)
    }
}
