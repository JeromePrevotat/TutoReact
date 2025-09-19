import { useEffect, useRef } from "react";

export function useDocTitle(title = "Untitled") {

    const titleRef = useRef(title);

	useEffect(() => {
        let newTitle;
        if (title && typeof title !== "string") newTitle = titleRef.current;
        else if (title.trim() === "") newTitle = titleRef.current;
        else newTitle = title.trim();
		document.title = newTitle;
	}, [title]);

}
