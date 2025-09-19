/**
 * Input component for text input fields.
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string} value - The current value of the input field.
 * @param {(s: string)} onChange - Callback function to handle changes to the input field.
 */
export function Input({placeholder, value, onChange}){
    return (
        <div>
            <input
                type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}