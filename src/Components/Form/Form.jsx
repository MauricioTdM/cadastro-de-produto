import S from './Form.module.scss'

export default function Form({onFormSubmit}) {
    
    const register = (event) => {
        event.preventDefault()

        let productName = event.target[0].value
        let productDescription = event.target[1].value
        let productPrice = Number(event.target[2].value)
        let isProductAvailable = event.target[3].checked

        let dataProduct = {
            name: productName,
            description: productDescription,
            price: productPrice,
            available: isProductAvailable
        }
        onFormSubmit(dataProduct)
    }

    return(
        <>
            <form className={S.form} onSubmit={register}>
                <h1>Cadastro de Produto</h1>
                <section>
                    <label htmlFor="name">Nome:</label>
                    <input className={S.textInput} type="text" name="name" required/>
                </section>
                <section>
                    <label htmlFor="description">Descrição:</label>
                    <input className={S.textInput} type="text" name="description" required/>
                </section>
                <section>
                    <label htmlFor="price">Valor (R$):</label>
                    <input className={S.textInput} type="text" name="price" required/>
                </section>
                <section>
                    <span>Disponível para venda:</span>
                    <label htmlFor="affirmative">Sim</label>
                    <input type="radio" id="affirmative" name="available" value="true" required/>
                    <label htmlFor="negative">Não</label>
                    <input type="radio" id="negative" name="available" value="false" required/>
                </section>
                <section className={S.submitButton}>
                    <button type="submit">Cadastrar</button>
                </section>
            </form> 
        </>
    )
}