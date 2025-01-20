import { useState } from "react";
import Form from "./Components/Form/Form.jsx";
import DisplayProducts from "./Components/DisplayProducts/DisplayProducts.jsx";
import './GlobalStyle/GlobalStyle.scss'


export default function App() {
    const [productList, setProductList] = useState([])
    console.log(productList)
    function handleFormSubmit(data) {   
        let newProductList = [...productList, data]
        setProductList(newProductList)
    } 

    return(
        <>
            <main>
                <Form onFormSubmit={handleFormSubmit}/>
                <DisplayProducts products={productList}/>
            </main>
        </>
    )
}