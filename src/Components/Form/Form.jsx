import S from './Form.module.scss'
import CurrencyInput from 'react-currency-input-field'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { RegisterSuccess } from '../RegisterSuccess/RegisterSuccess'

export default function Form({onFormSubmit}) {
    const [productID, setProductID] = useState(0)
    
    const register = (event) => {
        event.preventDefault()        

        const productName = event.target[0].value
        const productPrice = event.target[1].value
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
        RegisterSuccess('Produto Cadastrado com Sucesso')
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
                        <CurrencyInput
                            id="priceForLabel" 
                            allowNegativeValue={false} 
                            decimalsLimit={2} 
                            placeholder="Ex.: 999,99" 
                            prefix="R$ "
                            decimalSeparator=","
                            groupSeparator="."
                            fixedDecimalLength={2}
                            required/>
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
                <ToastContainer />
            </form> 
        </>
    )
}