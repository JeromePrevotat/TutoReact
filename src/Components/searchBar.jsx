import { useState } from "react";

function SearchBar({ productList, onFilterChange }) {
	let filteredList = productList;

	const [name, setName] = useState("");
    const [inStock, setInstock] = useState(false);

	const filterProductsByName = (event) => {
		const pattern = event.target.value.toLowerCase().trim();
        setName(pattern);
        filteredList = productList.filter((product) => product.name.toLowerCase().includes(pattern));
        // Checks if FilteredByStock is active
        if (inStock) {
            filteredList = filteredList.filter((product) => product.inStock === true);
        }
        onFilterChange(filteredList);
	};

	const filterProductsByStock = (event) => {
        const isChecked = event.target.checked ? true : false;
        setInstock(isChecked);
        if (isChecked) {
            filteredList = productList.filter((product) => product.inStock === true);
        }
        // Checks if FilteredByName is active
        if (name && name !== "") {
            filteredList = filteredList.filter((product) => product.name.toLowerCase().includes(name));
        }
        onFilterChange(filteredList);
    }

	return (
		<>
			<div className="input-container justify-content-center align-items-center">
				<input
					type="text"
					placeholder="Rechercher"
					className="input-text"
					onChange={filterProductsByName}
				/>
			</div>
			<div className="input-container justify-content-center align-items-center">
				<input
					type="checkbox"
					className="checkbox"
					onChange={filterProductsByStock}
				/>
				N'afficher que les produits en stock
			</div>
		</>
	);
}
export default SearchBar;
