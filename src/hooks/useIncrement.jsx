import { useState } from "react";

export function useIncrement(initial, incStep = 1, decStep = 1) {
    const [value, setValue] = useState(initial);
    console.log(initial);
    const setIncrementUp = () => {setValue(value + incStep)};
    const setIncrementDown = () => {setValue(value - decStep)};
    return [value, setIncrementUp, setIncrementDown];
}