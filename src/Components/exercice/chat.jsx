import useOnline from "../../hooks/useOnline";

export default function ChatIndicator() {
    const isOnline = useOnline();
    return <h1>{isOnline ? 'Online' : 'Offline'}</h1>
}