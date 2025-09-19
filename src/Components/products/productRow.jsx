/**
 * 
 * @param {{name: string, stocked: boolean, price: string}} param0 
 * @returns 
 */

export function ProductRow({product}){
    const style = product.stocked ? undefined : {color: 'red'};
    return (
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}€</td>
        </tr>
    )
}