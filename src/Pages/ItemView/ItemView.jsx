import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchProductById } from "../../assets/services/productService"
import ItemList from "../../components/Item/ItemList"
import Navbar from "../../components/Navbar/Navbar"

const ItemView = () => {


    return (
        <div className="item-view-container">
            <Navbar />
            <ItemList />
        </div>
    )
}

export default ItemView