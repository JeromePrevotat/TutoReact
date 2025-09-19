/**
 * Checkbox component for boolean inputs.
 * @param {boolean} checked - Whether the checkbox is checked.
 * @param {(v: boolean) => void} onChange - Callback function to handle changes.
 * @param {string} label - The label for the checkbox.
 * @param {string} id - The id for the checkbox input.
 * @returns {JSX.Element}
 */

export function Checkbox({ checked, onChange, label, id }) {
    return (
        <div className="form-check">
            <input
                id={id}
                type="checkbox"
                className="form-check-input"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id} className="form-check-label">
                {label}
            </label>
        </div>
    );
}