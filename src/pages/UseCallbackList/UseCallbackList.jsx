import { ParentComponent } from '../../components/ParentComponent/ParentComponent';
import { InfinitUserScroll } from '../../components/InfinitUserScroll/InfinitUserScroll';
import TodoListComponent from '../../components/TodoListComponent/TodoListComponent';
export const UseCallbackList = () => {
    return (
        <>
            <ParentComponent />
            {/* <InfinitUserScroll /> */}
            <h1>TodoListComponent</h1>
            <TodoListComponent />
        </>
    );
};
