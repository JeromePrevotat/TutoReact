import { useIncrement } from "../../hooks/useIncrement";

export function CompteurComponent() {
    const [value, setIncrementUp, setIncrementDown] = useIncrement(0, 1, 1);

    return (
        <>
            <button onClick={setIncrementUp}>Increment Up: {value}</button>
            <button onClick={setIncrementDown}>Increment Down: {value}</button>
        </>
    );
}