import { useEffect, useState } from "react";
import Form from "./Components/Form/Form.jsx";
import DisplayProducts from "./Components/DisplayProducts/DisplayProducts.jsx";
import './GlobalStyle/GlobalStyle.scss'


export default function App() {

    const storedProducts = JSON.parse(localStorage.getItem("products")) || []

    const [productList, setProductList] = useState(storedProducts)

    const handleFormSubmit = (data) => { 
        let newProductList = []
        newProductList = [...productList, data]
        setProductList(newProductList)
    }

    const productToRemove = (productID) => {
        const newProductList = productList.filter((produto) => produto.id !== productID)
        setProductList(newProductList)
    }

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productList))
    },[productList])

    return(
        <>
            <main className="main">
                <section className="box">
                    <section className="mainContent">
                        <h1>Cadastro de Produto</h1>
                        <Form onFormSubmit={handleFormSubmit}/>
                    </section>
                    <section className="displayProducts">
                        <DisplayProducts products={productList} removeProductFromList={productToRemove}/>
                    </section>
                </section>
            </main>
        </>
    )
}