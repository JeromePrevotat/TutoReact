function ProductTable({ productList }) {
    console.log(productList);
    return (
        <>
            {productList.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                </tr>
            ))}
        </>
    );
}
export default ProductTable;