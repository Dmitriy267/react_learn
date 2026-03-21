import { ParentComponent } from '../../components/ParentComponent/ParentComponent';
import { InfinitUserScroll } from '../../components/InfinitUserScroll/InfinitUserScroll';
import TodoListComponent from '../../components/TodoListComponent/TodoListComponent';
import './UseCallbackList.css';
export const UseCallbackList = () => {
    return (
        <>
            <section className="call__section">
                <ParentComponent />
            </section>
            <section className="call__section">
                <InfinitUserScroll />
            </section>
            <section className="call__section">
                <h1>TodoListComponent</h1>
                <TodoListComponent />
            </section>
        </>
    );
};
