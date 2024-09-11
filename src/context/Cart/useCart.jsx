//AQUI VAMOS A ARMAR U HOOK: UN HOOK ES UN COMPONENTE CON MULTIPLES FUNCIONES DENTRO LAS CUALES RETORNA PARA PODER UTILIAR EN OTRO COMPONENTE 
import { useContext } from "react"
import { CartContext } from "./CartContext"


export const useCart = () => {
    try {
        //AQUI VAMOS A ESTAR MANEJANDO TODA LA LOGICA Y FUNCIONES DE COARRITO PARA PODER UTILIZARLA EN OTROS COMPONENTE Y PASARLO COMO PROPS Y MANDAR ESTA INFO 
        /*   const [cart, setCart] = useState([]) */
        const { cart, setCart } = useContext(CartContext)
        console.log("This is caaaaaaart", cart)

        const { cartCount, setCartCount } = useContext(CartContext)
        console.log("esto es lo que llega por cartCOunt", cartCount)

        //AQUI TENEMOS OTRO ESTADO ESPECUAL PARA CAREwIDGET QUE SMARMA ECON LO QUE SE PASA DEN NHANDELCOUNT 

        //AQUI MANEJAR UNA FUCNION DONDE MANEJE EL COUNT QUE VIENE DESDE ItemDetail
        const handleCount = (count) => {
            //del parametro de esta funcion llega el count de cada poducto que esta en el itemDetail
            setCartCount(cartCount + count)
            console.log("peso plumaaa", count)

        }


        const AddToCart = (product, count) => {
            console.log("esto es iteeeeem", product)//producto que nos llega

            try {
                const newCart = [...cart]//una copia del estado de cart 
                console.log("este es new Cart", newCart)

                const itemInCart = newCart.find((prod) => prod.id === product.id)
                console.log("this i s produuuuuct", itemInCart)//busqueda de producto nuevo en el array 
                console.log("con mi misica le sigo  ", itemInCart)

                //aqui modificamos el stock menos el count 
                product.stock - count
                console.log(product)
                if (itemInCart) {//comporbacion de si ya se ecneutra 
                    itemInCart.count = itemInCart.count + product.count
                    console.log("ya ese encu itemInCart.count = itemInCart.count + product.countentra en el cart", itemInCart)
                    //crear logica para manipular el count      
                } else {
                    newCart.push(product) //si no se encuentra pushemaos 
                    console.log("no sew encuentra en el cart")
                }
                //o haceos una resta directa con el setCartCount o hacemos una destrucuturacion del objeto con un spreed y modificamos el campo directzamnete 



                console.log("esta mierda es CARRRT ", cart)
                setCart(newCart)//


            } catch (error) {
                console.log("Hubo un error en mandar a cart", error)
            }
        }


        const handleToCart = () => {
            try {

            } catch (error) {
                console.log("Hubo un error en mandar a cart", error)
            }
        }

        const handleSubtractToCart = () => {
            try {

            } catch (error) {
                console.log("Hubo un error en eliminar a cart", error)
            }
        }

        const handleUpdateToCart = () => {
            try {

            } catch (error) {
                console.log("Hubo un error en actualizar a cart", error)
            }
        }

        return (
            {
                AddToCart,
                handleCount
            }
        )
    } catch (error) {
        console.log("error en hanlde CART", error)
    }
}