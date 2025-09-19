import { useState } from "react";
import { useApiFetch } from "../../hooks/useApiFetch";

export function ApiFetchComponent() {
    const defaultApiUrl =
		"https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000";
    const [url, setUrl] = useState(defaultApiUrl);
	const apiResponse = useApiFetch(url);
	console.log(apiResponse);
	return (
		<>
            <input type="text" placeholder="Enter API URL" value={url} onChange={(e) => setUrl(e.target.value)} />
			{apiResponse.loading && <p>Loading...</p>}
			{apiResponse.errors && (
				<p style={{ color: "red" }}>{apiResponse.errors}</p>
			)}
            {apiResponse.data && (
                <ul>
                {apiResponse.data.map(item => (
                    <li key={item.id}>
                        <p><strong>Title:</strong> {item.title}</p>
                        <p>Content:<br/>{item.body}</p>
                    </li>
                ))}
                </ul>
            )}
		</>
	);
}
