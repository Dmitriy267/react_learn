import { StatefulForm } from '../../components/StatefulForm/StatefulForm';
import { AddToCartForm } from '../../components/AddToCartForm/AddToCartForm';
import { AutoForm } from '../../components/AutoForm/AutoForm';
export const UseActionStateList = () => {
    return (
        <>
            <StatefulForm />
            <h2>AddCartForm</h2>
            <AddToCartForm
                itemID="1"
                itemTitle="JavaScript: The Definitive Guide"
            />
            <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
            <h2>Avtoform</h2>
            <AutoForm />
        </>
    );
};
