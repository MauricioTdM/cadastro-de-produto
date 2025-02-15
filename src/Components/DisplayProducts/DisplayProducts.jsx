import S from './DisplayProducts.module.scss'
import trashCan from '../../Assets/trash_can.png'

export default function MainPage({products, removeProductFromList}) {
    let dataProduct
    
    const removeProduct = (event) => {
        const productID = Number(event.target.getAttribute('data-id'))
        console.log(productID)
        
        removeProductFromList(productID)
    }

    products.sort((a, b) => a.price - b.price)

    if (products.length !== 0) {
        dataProduct = (
            <table className={S.mainTable}>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor(R$)</th>
                        <th scope="col">Disponível</th>
                    </tr>
                </thead>
                <tbody className={S.tableBody}>
                    {
                        // TODO: Adicionar na memória do navegador para não perder os dados ao fechar a página ou atualizá-la: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
                        // TODO: Adicionar um efeito para indicar que um campo precisa ser preenchido
                        products.map((product) => {
                            return(
                            <tr key={product.id} id={`row-${product.id}`}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.available ? "Sim" : "Não"}</td>
                                <td><button onClick={removeProduct}><img src={trashCan} alt="Ícone de Lixeira" data-id={product.id} /></button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        )
    } else {
        dataProduct = <h3>Nenhum produto cadastrado</h3>
    }
    
    return(
        <>
            <section className={S.registeredProducts}>
                <h2>Produtos Cadastrados</h2>
                <div>
                    {dataProduct}
                </div>
            </section>
        </>
    )
}