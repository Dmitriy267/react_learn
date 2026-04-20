import './App.css';
import { Route, Routes, Link } from 'react-router';
import { UseReducerList } from './pages/useReducerList/useReducerList';
import { UseRefList } from './pages/UseRefList/UseRefList';
import { UseContextList } from './pages/UseContextList/UseContextList';
import { UseCallbackList } from './pages/UseCallbackList/UseCallbackList';
import { UseActionStateList } from './pages/UseActionStateList/UseActionStateList';
import { UseOptimisticList } from './pages/UseOptimisticList/UseOptimisticList';
import { UseMethod } from './pages/UseMethod/UseMethod';
import { UseMemoList } from './pages/UseMemoList/UseMemoList';
function List() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/useReducer">UseReducer</Link>
                    </li>
                    <li>
                        {' '}
                        <Link to="/useRef">UseRef</Link>
                    </li>
                    <li>
                        <Link to="/useContext">UseContext</Link>
                    </li>
                    <li>
                        <Link to="/useCallback">UseCallback</Link>
                    </li>
                    <li>
                        <Link to="/useActionState ">UseActionState </Link>
                    </li>
                    <li>
                        <Link to="/useOptimistic ">UseOptimistic </Link>
                    </li>
                    <li>
                        <Link to="/use ">UseMethod </Link>
                    </li>
                    <li>
                        <Link to="/useMemo ">UseMemo </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
function App() {
    return (
        <>
            <div className="App">
                <h1>Хуки React</h1>
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/useReducer" element={<UseReducerList />} />
                    <Route path="/useRef" element={<UseRefList />} />
                    <Route path="/useContext" element={<UseContextList />} />
                    <Route path="/useCallback" element={<UseCallbackList />} />
                    <Route
                        path="/useActionState"
                        element={<UseActionStateList />}
                    />
                    <Route
                        path="/useOptimistic"
                        element={<UseOptimisticList />}
                    />
                    <Route path="/use" element={<UseMethod />} />
                    <Route path="/useMemo" element={<UseMemoList />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
