export function Alert({type = 'info', children}){
    const [show, toggle] = useToggle(true);
    if (!show) return null;

    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
            <button onClick={toggle}>Close</button>
        </div>
    );
}