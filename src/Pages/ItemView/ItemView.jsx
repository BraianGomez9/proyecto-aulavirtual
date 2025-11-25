import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchProductById } from "../../assets/services/productService"
import Navbar from "../../components/Navbar/Navbar"

const ItemView = () => {

    const [item, setItem] = useState(null);

    const id = useParams().id

    useEffect(() => {
        fetchProductById(Number(id))
            .then((item) => {
                setItem(item)
            })
            .catch((err) => {
                console.error("Error al solicitar el producto", err)
            })
    }, [id])

    if (!item) return <p>Cargando producto...</p>;

    return (
        <div className="item-view-container">
            <Navbar />
            <div className="item-view-element"
                 key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.image} alt="" />
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        </div>
    )
}

export default ItemView