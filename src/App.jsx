import { useState } from "react";
import Form from "./Components/Form/Form.jsx";
import DisplayProducts from "./Components/DisplayProducts/DisplayProducts.jsx";
import './GlobalStyle/GlobalStyle.scss'


export default function App() {

    const [productList, setProductList] = useState([])
    const [productID, setProductID] = useState(0)
    console.log(productList)

    const handleFormSubmit = (data) => { 
        let newProductList = []

        if (productList.length === 0) {
            data.id = productID
        } else {
            data.id = productID + 1
            setProductID(data.id)
        }
        newProductList = [...productList, data]
        setProductList(newProductList)
    }

    // const productToRemove = () => {

    // }

    return(
        <>
            <main>
                <Form onFormSubmit={handleFormSubmit}/>
                <DisplayProducts products={productList}/>
            </main>
        </>
    )
}