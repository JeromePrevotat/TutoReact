import { ProductRow } from "./Components/products/productRow";
import { ProductCategoryRow } from "./Components/products/productCategoryRow";
import { Input } from "./Components/forms/input";
import { Checkbox } from "./Components/forms/checkbox";
import { useState } from "react";
import { TimerComponent } from "./Components/exercice/timer";
import { CompteurComponent } from "./Components/exercice/compteur";
import { UseDocTitleComponent } from "./Components/exercice/docTitle";
import { ApiFetchComponent } from "./Components/exercice/apiFetch";
import { useApiFetch } from "./hooks/useApiFetch";

function App() {
	const productList = [
		{ id: 1, name: "Apple", price: 1, category: "Fruits", stocked: true },
		{
			id: 2,
			name: "Dragonfruit",
			price: 1,
			category: "Fruits",
			stocked: true,
		},
		{
			id: 3,
			name: "Passionfruit",
			price: 2,
			category: "Fruits",
			stocked: false,
		},
		{
			id: 4,
			name: "Spinach",
			price: 2,
			category: "Vegetables",
			stocked: true,
		},
		{
			id: 5,
			name: "Pumpkin",
			price: 4,
			category: "Vegetables",
			stocked: false,
		},
		{
			id: 6,
			name: "Peas",
			price: 1,
			category: "Vegetables",
			stocked: true,
		},
	];

	const [showStockedOnly, setShowStockedOnly] = useState(false);
	const [search, setSearch] = useState("");
	const visibleProducts = productList.filter((p) => {
		if (showStockedOnly && !p.stocked) {
			return false;
		}
		if (search && !p.name.toLowerCase().includes(search.toLowerCase())) {
			return false;
		}
		return true;
	});

	return (
		<>
			{/* <div className="container my-3">
				<SearchBar
					search={search}
					onSearchChange={setSearch}
					showStockedOnly={showStockedOnly}
					onStockedOnlyChange={setShowStockedOnly}
				/>
				<ProductTable products={visibleProducts} />
			</div>
			<div className="container my-3">
				<TimerComponent />
			</div>
			<div className="container my-3">
				<CompteurComponent />
			</div>
			<div className="container my-3">
				<UseDocTitleComponent />
			</div> */}
			<div className="container my-3">
				<ApiFetchComponent />
			</div>
		</>
	);
}

// function SearchBar({
// 	showStockedOnly,
// 	onStockedOnlyChange,
// 	search,
// 	onSearchChange,
// }) {
// 	return (
// 		<div className="mb-3">
// 			<Input
// 				value={search}
// 				onChange={onSearchChange}
// 				placeholder="Rechercher..."
// 			/>
// 			<Checkbox
// 				id="stocked"
// 				checked={showStockedOnly}
// 				onChange={onStockedOnlyChange}
// 				label="N'afficher que les produits en stock"
// 			/>
// 		</div>
// 	);
// }

// function ProductTable({ products }) {
// 	const rows = [];
// 	let lastCategory = null;
// 	for (let product of products) {
// 		if (product.category !== lastCategory) {
// 			rows.push(
// 				<ProductCategoryRow
// 					key={product.category}
// 					name={product.category}
// 				/>
// 			);
// 		}
// 		lastCategory = product.category;
// 		rows.push(<ProductRow key={product.name} product={product} />);
// 	}
// 	return (
// 		<table className="table table-striped">
// 			<thead>
// 				<tr>
// 					<th>Nom</th>
// 					<th>Prix</th>
// 				</tr>
// 			</thead>
// 			<tbody>{rows}</tbody>
// 		</table>
// 	);
//}

export default App;
