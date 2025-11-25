const url = "https://691b85f82d8d785575731501.mockapi.io/products"

export const fetchProducts = async () => {
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("Error al solicitar los productos")
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) throw new error("No se pudo identificar el producto")
        return await response.json();
    } catch (error) {
        console.error(error)
        throw(error)
    }
}