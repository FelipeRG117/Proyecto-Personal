import { Item } from "./Item"

export const ItemList = ({ products }) => {
    console.log("esto es products", products)
    try {
        return (
            <div>
                {
                    products.length > 0 && products.map((prod) => {
                        return (
                            <Item key={prod.id} product={prod} />
                        )
                    })
                }
            </div>
        )

    } catch (error) {
        console.log("error en ItemList", error)
    }
}