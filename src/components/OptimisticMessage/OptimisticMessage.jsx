import { useRef, useState, useOptimistic } from 'react';
async function sendMessage(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, 1000);
    });
}

export function OptimisticMessage() {
    const formRef = useRef();
    const [messages, setMessages] = useState([]);
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (prevMessages, newMessages) => {
            return [...prevMessages, { text: newMessages, pending: true }];
        }
    );
    async function formAction(formData) {
        addOptimisticMessage();
        formRef.current.reset();
        const message = await sendMessage(formData.get('message'));
        setMessages((messages) => [
            ...messages,
            { text: message, pending: false },
        ]);
    }
    return (
        <>
            <form ref={formRef} action={formAction}>
                <div className="input-field">
                    <input name="message" />
                </div>
                <button type="submit" className="btn">
                    Send
                </button>
                <ul className="collection">
                    {optimisticMessages.map((message, i) => (
                        <li className="collection-item" key={i}>
                            {message.text}{' '}
                            {message.pending && <small>(Adding)</small>}
                        </li>
                    ))}
                </ul>
            </form>
        </>
    );
}
