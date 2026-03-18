import { useState } from 'react';

export const TaskView = ({ tasks, onDeleteTask, onChangeTask }) => {
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task
                            task={task}
                            onDelete={onDeleteTask}
                            onChange={onChangeTask}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    const handeDelete = () => {
        onDelete(task.id);
    };
    if (isEditing) {
        taskContent = (
            <>
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Исправить</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Исправить</button>
            </>
        );
    }
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            done: e.target.checked,
                        });
                    }}
                />
                {taskContent}
                <button onClick={handeDelete}>Удалить</button>
            </label>
        </>
    );
}
