import { useReducer } from 'react';
import { AddTask } from './AddTask';
import { TaskView } from './TaskView';

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];
let nextId = 3;
export const TaskList = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    const handleAddTask = (text) => {
        dispatch({
            type: 'add',
            id: nextId++,
            text: text,
        });
    };
    const handleChangeTask = (task) => {
        dispatch({
            type: 'changed',
            task: task,
        });
    };
    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'delete',
            id: taskId,
        });
    };
    return (
        <>
            <h2>Создадим список дел</h2>
            <AddTask onAddTask={handleAddTask} />
            <TaskView
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
};

function taskReducer(tasks, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...tasks,
                { id: action.id, text: action.text, done: false },
            ];
        }
        case 'changed': {
            return tasks.map((item) => {
                if (item.id === action.task.id) {
                    return action.task;
                } else {
                    return item;
                }
            });
        }
        case 'delete': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
