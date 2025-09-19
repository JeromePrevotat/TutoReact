import { useEffect, useState } from "react";

export function useApiFetch(apiUrl, options = {}) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    
    useEffect(() => {
        console.log("URL TO FETCH:", apiUrl);
        setLoading(true);
        setData(null);
        setErrors(null);
        fetch(apiUrl, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers,
            }
        }).then(response => response.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch((e) => {
            setLoading(false)
            setErrors(e.message)
        });
    
    }, [apiUrl]);

    return {loading, data, errors};
}
