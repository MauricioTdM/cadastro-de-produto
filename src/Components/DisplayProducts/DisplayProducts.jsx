import S from './DisplayProducts.module.scss'

export default function MainPage({products}) {
    let dataProduct
    
    if (products.length !== 0) {
        dataProduct = (
            <table className={S.mainTable}>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor(R$)</th>
                        <th scope="col">Disponível</th>
                    </tr>
                </thead>
                <tbody className={S.tableBody}>
                    {
                        // TODO: O ideal é que cada item cadastrado tenha um ID único para ser colocado no parâmetro "key", posso fazer isso dinamicamente - https://react.dev/learn/updating-arrays-in-state
                        // TODO: Colocar ordenação dos produtos por valor do menor para o maior, pelo que entendi, precisa do ID pra colocar no parâmetro "key"
                        // TODO: Ajustar o estilo(SCSS) da tabela
                        // TODO: Adicionar na memória do navegador para não perder os dados ao fechar a página ou atualizá-la: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
                        // TODO: Adicionar botão para excluir um produto
                        // TODO: Adicionar um efeito para indicar que um campo precisa ser preenchido

                        products.map((product, index) => {
                            return(
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.available ? "Sim" : "Não"}</td>
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