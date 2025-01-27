import { useState } from "react";
import Form from "./Components/Form/Form.jsx";
import DisplayProducts from "./Components/DisplayProducts/DisplayProducts.jsx";
import './GlobalStyle/GlobalStyle.scss'


export default function App() {

    const [productList, setProductList] = useState([])
    
    console.log(productList)

    // TODO: Quando eu vou utilizar o useEffect: Nesse caso, na primeira vez que eu iniciar o navegador, ele vai procurar no localStorage se tem algum produto. Caso tenha, será usado o setProductList pra jogar na lista de ser produtos a ser exibida na tela

    const handleFormSubmit = (data) => { 
        let newProductList = []
        newProductList = [...productList, data]
        setProductList(newProductList)
    }

    const productToRemove = (productID) => {
        const newProductList = productList.filter((produto) => produto.id !== productID)
        setProductList(newProductList)
    }

    return(
        <>
            <main>
                <Form onFormSubmit={handleFormSubmit}/>
                <DisplayProducts products={productList} removeProductFromList={productToRemove}/>
            </main>
        </>
    )
}