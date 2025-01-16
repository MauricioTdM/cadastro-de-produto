import S from './Form.module.scss'

export default function Form({onFormSubmit}) {
    function register(event) {
        event.preventDefault()

        let dataProduct = {
            name: event.target[0].value,
            description: event.target[1].value,
            price: Number(event.target[2].value),
            available: event.target[3].checked
        }
        onFormSubmit(dataProduct)
    }

    return(
        <>
            <form className={S.Form} onSubmit={register}>
                <section>
                    <label htmlFor="name">Nome:</label>
                    <input className={S.textInput} type="text" name="name"/>
                </section>
                <section>
                    <label htmlFor="description">Descrição:</label>
                    <input className={S.textInput} type="text" name="description" />
                </section>
                <section>
                    <label htmlFor="price">Valor (R$):</label>
                    <input className={S.textInput} type="text" name="price" />
                </section>
                <section>
                    <span>Disponível para venda:</span>
                    <label htmlFor="affirmative">Sim</label>
                    <input type="radio" id="affirmative" name="available" value="true" />
                    <label htmlFor="negative">Não</label>
                    <input type="radio" id="negative" name="available" value="false" />
                </section>
                <section className={S.submitButton}>
                    <button type="submit">Cadastrar</button>
                </section>
            </form> 
        </>
    )
}