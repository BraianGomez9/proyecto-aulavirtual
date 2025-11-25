import { useEffect, useState } from "react"
import { fetchProducts } from "../../assets/services/productService"
import Navbar from "../../components/Navbar/Navbar"
import ItemListContainer from "../../components/Item/ItemListContainer"
import "../../main.css"

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {

      setLoading(true);

      try {
        const data = await fetchProducts();
        setProducts(data)
      } catch (error) {
        console.error("Error al cargar los productos", error)
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [])


  return (
    <div className="main-home-container">
      <Navbar />
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  )
}

export default Home