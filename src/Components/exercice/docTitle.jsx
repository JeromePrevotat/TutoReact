import { useState } from "react";
import { useDocTitle } from "../../hooks/useDocTitle";

export function UseDocTitleComponent({ initialValue = "" }) {
	const [title, setTitle] = useState(initialValue);
	useDocTitle(title);

	return (
		<>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</>
	);
}
