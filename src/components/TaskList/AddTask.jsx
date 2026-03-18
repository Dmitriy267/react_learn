import { useState } from 'react';

export const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const handleChenge = (e) => {
        setText(e.target.value);
    };
    return (
        <>
            <input
                type="text"
                placeholder="Введите текст"
                value={text}
                onChange={handleChenge}
            />
            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}
            >
                Добавить
            </button>
        </>
    );
};
