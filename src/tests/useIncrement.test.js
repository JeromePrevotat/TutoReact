import { act, renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useIncrement } from "../hooks/useIncrement";

describe('useIncrement', () => {
    it('should use the default value', () => {
        const {result} = renderHook(() => useIncrement(5));
        expect(result.current[0]).toBe(5);
    });

    it('should increment the value', () => {
        const {result} = renderHook(() => useIncrement(5));
        act(() => { result.current[1]() });
        expect(result.current[0]).toBe(6);
    });
});