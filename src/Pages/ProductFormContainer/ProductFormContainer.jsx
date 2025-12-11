import { useState } from "react";
import { uploadToImgbb } from "../../components/uploadImage";
import Navbar from "../../components/Navbar/Navbar";
import "../../main.css"

const ProductFormContainer = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    if (file) {
      setPreviewUrl(URL.createObjectURL(file)); // 👉 CREAR PREVIEW
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadToImgbb(formData.image);

      const newProduct = {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        stock: Number(formData.stock),
        category: formData.category,
        image: imageUrl,
      };

      const res = await fetch(
        "https://691b85f82d8d785575731501.mockapi.io/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct),
        }
      );

      if (!res.ok) throw new Error("Error al guardar en MockAPI");

      alert("Producto creado correctamente 🎉");
    } catch (error) {
      console.error(error);
      alert("Error al crear producto");
    }
  };

  return (
    <div className="form-container">
      <Navbar />
      <h2>Crear producto</h2>

      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="text"
          name="title"
          placeholder="Nombre del producto"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar categoría</option>
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>

        <input type="file" accept="image/*" onChange={handleImage} required />

        {previewUrl && (
          <div className="image-preview">
            <img src={previewUrl} alt="Vista previa" />
          </div>
        )}

        <button type="submit">Crear producto</button>
      </form>
    </div>
  );
};

export default ProductFormContainer;


