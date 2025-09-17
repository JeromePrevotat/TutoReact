import SearchBar from "./Components/searchbar";
import Products from "./Components/products";
import { useState } from "react";

function App() {
	const productList = [
		{ id: 1, name: "Apple", price: 1, category: "Fruits", inStock: true },
		{
			id: 2,
			name: "Dragonfruit",
			price: 1,
			category: "Fruits",
			inStock: false,
		},
		{
			id: 3,
			name: "Passionfruit",
			price: 2,
			category: "Fruits",
			inStock: false,
		},
		{
			id: 4,
			name: "Spinach",
			price: 2,
			category: "Vegetables",
			inStock: true,
		},
		{
			id: 5,
			name: "Pumpkin",
			price: 4,
			category: "Vegetables",
			inStock: false,
		},
		{
			id: 6,
			name: "Peas",
			price: 1,
			category: "Vegetables",
			inStock: false,
		},
	];

	const [displayedList, setDisplayedList] = useState(productList);

	return (
		<div className="container mt-3 justify-content-center">
			<SearchBar
				productList={productList}
				onFilterChange={setDisplayedList}
			/>
			<Products productList={displayedList} />
		</div>
	);
}

export default App;
