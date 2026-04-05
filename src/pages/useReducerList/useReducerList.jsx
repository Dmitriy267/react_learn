import { TaskList } from '../../components/TaskList/TaskList';
import { Form } from '../../components/Form/Form';
import { InputAdd } from '../../components/InputAdd/InputAdd';
import { IncrementAndDecrement } from '../../components/IncrementAndDecrement/IncrementAndDecrement';
import { Cart } from '../../components/Cart/Cart';
import { DateCounter } from '../../components/DateCounter/DateCounter';
import { Books } from '../../components/Books/Books';
import { Users } from '../../components/Users/Users';
import { Posts } from '../../components/Posts/Posts';
import { Alboms } from '../../components/Alboms/Alboms';
import { Todolist } from '../../components/Todolist/Todolist';
import './UseReducerList.css';
export const UseReducerList = () => {
    return (
        <>
            <h1>Примеры с useReducer</h1>
            <section className="reduser_section">
                <h2>Список дел</h2>
                <TaskList />
            </section>
            <section className="reduser_section">
                <Form />
            </section>
            <section className="reduser_section">
                <InputAdd initialState="Mark" />
            </section>
            <section className="reduser_section">
                <IncrementAndDecrement />
            </section>
            <section className="reduser_section">
                <Cart />
            </section>
            <section className="reduser_section">
                <DateCounter />
            </section>
            <section className="reduser_section">
                <h2>Книги</h2>
                <Books />
            </section>
            <section className="reduser_section">
                <h2>Пользователи</h2>
                <Users />
            </section>
            <section className="reduser_section">
                <h2>Посты</h2>
                <Posts />
            </section>
            <section className="reduser_section">
                <h2>Альбомы пользователей по API</h2>
                <Alboms />
            </section>
            <section className="reduser_section">
                <h2>TodoList</h2>
                <Todolist />
            </section>
        </>
    );
};
