import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { fetchProducts } from "../../assets/services/productService"
import Navbar from "../../components/Navbar/Navbar"
import Item from "../../components/Item/Item"

const Category = () => {

    const { categoryId } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
            .catch(error => console.error("Error al cargar productos:", error))
    }, [])

    const filtered = products.filter(p => p.category === categoryId)

    return (
        <div>
            <Navbar />
            <h2>Categoría: {categoryId}</h2>

            {filtered.length === 0 && <p>No hay productos en esta categoría.</p>}

            {filtered.map(prod => (
                <Item key={prod.id} product={prod} />
            ))}
        </div>
    )
}

export default Category
