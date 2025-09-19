import { useEffect, useState } from "react";

export function TimerComponent() {
	const [duration, setDuration] = useState(5);
	const [secondsLeft, setSecondsLeft] = useState(duration);

    const handleChange = (v) => {
        setDuration(v);
        setSecondsLeft(v);
    }
	useEffect(() => {
		const timer = setInterval(() => {
            setSecondsLeft(v => {
                if (v <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return v - 1;
            });
		}, 1000);
		return () => clearInterval(timer);
	}, [duration]);

	return (
		<>
			<p>Timer : {secondsLeft}</p>
			<input
				type="text"
				placeholder="countdown from"
				className="form-control"
				onChange={(e) => handleChange(Number(e.target.value))}
			/>
			<label>Timer in seconde(s)</label>
		</>
	);
}
