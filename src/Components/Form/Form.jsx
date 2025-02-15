import { useState } from 'react'
import S from './Form.module.scss'

export default function Form({onFormSubmit}) {
    const [productID, setProductID] = useState(0)
    
    const register = (event) => {
        event.preventDefault()

        const productName = event.target[0].value
        const productPrice = Number(event.target[1].value)
        const productDescription = event.target[2].value
        const isProductAvailable = event.target[3].checked

        const dataProduct = {
            id: productID,
            name: productName,
            description: productDescription,
            price: productPrice,
            available: isProductAvailable,
        }
        let newID = productID
        setProductID(newID + 1)
        
        onFormSubmit(dataProduct)
    }

    return(
        <>
            <form className={S.form} onSubmit={register}>
                <section className={S.firstSection}>
                    <div>
                        <label htmlFor="nameForLabel">Nome:</label>
                        <input className={S.textInput} type="text" name="name" id='nameForLabel' placeholder='Ex.: Smartphone' required/>
                    </div>
                    <div>
                        <label htmlFor="priceForLabel">Valor:</label>
                        <input className={S.textInput} type="number" step="0.01" name="price" id='priceForLabel' placeholder='Ex.: 999.99 ou 999,99' required/>
                    </div>
                </section>
                <section className={S.secondSection}>
                    <label htmlFor="descriptionForLabel">Descrição:</label>
                    <textarea className={S.textInput} name="description" id='descriptionForLabel' placeholder='Descreva o produto' required></textarea>
                </section>
                <section className={S.thirdSection}>
                    <span>Disponível para venda:</span>
                    <div>
                        <input type="checkbox" id='toggle' name="available"/>
                        <label htmlFor="toggle"></label>
                    </div>
                </section>
                <section className={S.submitButton}>
                    <button type="submit">Adicionar Produto</button>
                </section>
            </form> 
        </>
    )
}