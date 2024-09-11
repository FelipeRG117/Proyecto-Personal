import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDataById } from "../helpers/getData"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
    try {
        const id = useParams().id
        //console.log(id)
        const [product, setProduct] = useState({})


        useEffect(() => {
            getDataById(id)
                .then((item) => {
                    setProduct(item)
                })
                .catch((err) => console.log("error en getDataById", err))
        }, [id])

        //console.log("WARA WARA ", product)


        return (
            <div>
                <ItemDetail item={product} />
            </div>
        )


    } catch (error) {
        console.log("HUbi un error en itemdetailcontainer", error)
    }
}