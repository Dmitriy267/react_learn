import './UseMemoList.css';
import { SumItems } from '../../components/SumItems/SumItems';
export function UseMemoList() {
    return (
        <>
            <section className="memo__list">
                <h1>Sum items costs:</h1>
                <SumItems />
            </section>
        </>
    );
}
