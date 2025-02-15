import { useEffect, useState } from "react";
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

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productList))
    },[productList])

    // useEffect(() => {
    //     const products = localStorage.getItem("products")
    //     // if (products) {
    //         // let productsList = products.map((produto) => )
    //         // setProductList(products)
    //         // products.map((produto) => {
    //         //     console.log(produto)
                
    //         // })
            
    //     }
    // },[])

    return(
        <>
            <main className="main">
                <section className="mainContent">
                    <h1>Cadastro de Produto</h1>
                    <Form onFormSubmit={handleFormSubmit}/>
                </section>
                <section>
                    <DisplayProducts products={productList} removeProductFromList={productToRemove}/>
                </section>
            </main>
        </>
    )
}