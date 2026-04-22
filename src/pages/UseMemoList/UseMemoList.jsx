import './UseMemoList.css';
import { SumItems } from '../../components/SumItems/SumItems';
import { Prime1 } from '../../components/Prime1/Prime1';
export function UseMemoList() {
    return (
        <>
            <section className="memo__list">
                <h2>Sum items costs:</h2>
                <SumItems />
            </section>
            <section className="memo__list">
                <Prime1 />
            </section>
        </>
    );
}
