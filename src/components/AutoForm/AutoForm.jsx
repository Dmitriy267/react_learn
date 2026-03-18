import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button className="btn" type="submit" disabled={pending}>
            {pending ? '...Loading' : 'Submit'}
        </button>
    );
};
const fakeLogin = ({ email, password }) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            if (email && password) {
                resolve({ email, password });
            } else {
                reject({ message: 'Invalid email or password' });
            }
        }, 1000)
    );
``;
export function AutoForm() {
    //  const [pending, setPending] = useState(false);
    const [state, submitAction] = useActionState(auth, {
        data: null,
        error: null,
    });
    //  const [error, setError] = useState(null);
    //  const [result, setResult] = useState('');
    async function auth(prev, formData) {
        const email = formData.get('email');
        const password = formData.get('password');
        //   setPending(true);
        //   setError(null);
        //   setResult('');

        try {
            const response = await fakeLogin({ email, password });
            // setResult('Email ' + email + ' logged in');
            return { data: response, error: null };
        } catch (e) {
            return { ...prev, error: e.message };
        }
    }

    return (
        <>
            <form action={submitAction}>
                <div className="input-field">
                    <input
                        id="email"
                        type="email"
                        className="validate"
                        name="email"
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input
                        name="password"
                        id="password"
                        type="password"
                        className="validate"
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <SubmitButton />
                {state.data && <p>{state.data.email}</p>}
                {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
            </form>
        </>
    );
}
