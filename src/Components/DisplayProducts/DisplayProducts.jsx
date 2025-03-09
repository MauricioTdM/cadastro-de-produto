import S from './DisplayProducts.module.scss'
import trashCan from '../../Assets/trash_can.png'
import Swal from 'sweetalert2'

export default function MainPage({products, removeProductFromList}) {
    let dataProduct
    
    const removeProduct = (event) => {
        const productID = Number(event.target.getAttribute('data-id'))
        
        removeProductFromList(productID)
    }
    
    function openModal(event) {
        Swal.fire({
                    title: "Deseja excluir o item?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Sim, excluir!",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "Cancelar"
                }).then((result) => {
                    const shouldDelete = result.isConfirmed
                    if (shouldDelete) {
                        removeProduct(event)
                        Swal.fire({
                            title: "Excluído!",
                            icon: "success"
                        })
                    }
                })
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
                        // TODO: Adicionar um efeito para indicar que um campo precisa ser preenchido
                        products.map((product) => {
                            return(
                            <tr key={product.id} id={`row-${product.id}`}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.available ? "Sim" : "Não"}</td>
                                <td><button onClick={openModal}><img src={trashCan} alt="Ícone de Lixeira" data-id={product.id} /></button></td>
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