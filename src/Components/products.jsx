import ProductTable from "./productTable";

function Products({ productList }) {
	const categorySet = new Set(productList.map((product) => product.category));
	return (
		<>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Nom</th>
						<th>Prix</th>
					</tr>
				</thead>
				<tbody>
					{Array.from(categorySet).map((category) => {
						return (
							<>
								<tr key={category}>
									<td className="category" colSpan={2}>
										{category}
									</td>
								</tr>
								<ProductTable productList={productList.filter((product) => product.category === category)} />
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
export default Products;
