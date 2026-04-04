import { useReducer, useState } from 'react';

const initialPosts = [
    {
        id: 3,
        title: "What's a Reducer Function ?",
        subtitle:
            'A function that defines the actions possible on a reducer state',
        content:
            "A reducer function declares what's possible on a reducer state. It defines all possible actions that can be performed on the reducer state and what to change when a particular action is dispatched.",
        likes: 5,
    },
    {
        id: 2,
        title: 'What is a Reducer ?',
        subtitle: 'State that acts as a single source of truth',
        content:
            'A reducer is composed of a state and a set of actions that can be dispatched to alter the state. It can be refactored and stored outside of a component. And can be used as a source of truth for multiple use cases.',
        likes: 4,
    },
    {
        id: 1,
        title: 'The React useReducer Hook',
        subtitle: 'State management with actions, instead of setters',
        content: `The useReducer hook is a more versatile alternative to useState. It introduces an "actions" based paradigm to state management - in contrast to setters that exists in useState. Actions are defined and dispatched to effectuate changes in a reducer state.`,
        likes: 2,
    },
];

const LIKE = 'like';
const UNLIKE = 'unlike';
const CREATE = 'create';
const DELETE = 'delete';
function postReducer(posts, action) {
    switch (action.type) {
        case CREATE: {
            return [action.payload, ...posts];
        }
        case DELETE: {
            return posts.filter((p) => p.id !== action.payload.id);
        }
        case LIKE: {
            return posts.map((p) => {
                if (p.id === action.payload.id) {
                    return {
                        ...p,
                        likes: p.likes + 1,
                    };
                } else {
                    return p;
                }
            });
        }
        case UNLIKE: {
            return posts.map((p) => {
                if (p.id === action.payload.id) {
                    return {
                        ...p,
                        likes: p.likes <= 0 ? p.likes : p.likes - 1,
                    };
                } else {
                    return p;
                }
            });
        }
        default: {
            throw new Error('Unknown action' + action.type);
        }
    }
}
export function Posts() {
    const [posts, dispatch] = useReducer(postReducer, initialPosts);
    return (
        <>
            <CreatePostForm posts={posts} dispatch={dispatch} />
            {posts?.map((post) => {
                return (
                    <div className="card" key={post.id}>
                        <div className="p-6">
                            <div className="px-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h5 className="mb-1 text-xl font-medium leading-tight">
                                            {post?.title}
                                        </h5>
                                        <h6 className="subtitle">
                                            {post?.subtitle}
                                        </h6>
                                    </div>
                                    <div className="relative flex items-center justify-center">
                                        <span className="absolute text-xs font-normal text-gray-50">
                                            {post?.likes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-4 bg-gray-50 p-2 text-base leading-normal">
                                {post?.content}
                            </p>
                            <div className="flex items-center justify-between px-2">
                                <div className="">
                                    <button
                                        className="btn-delete"
                                        onClick={() =>
                                            dispatch({
                                                type: 'delete',
                                                payload: { id: post?.id },
                                            })
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        className="btn-like"
                                        onClick={() =>
                                            dispatch({
                                                type: 'unlike',
                                                payload: { id: post?.id },
                                            })
                                        }
                                    >
                                        -
                                    </button>
                                    <button
                                        type="button"
                                        className="btn-like"
                                        onClick={() =>
                                            dispatch({
                                                type: 'like',
                                                payload: { id: post?.id },
                                            })
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

function CreatePostForm({ posts, dispatch }) {
    const initialFormData = {
        id: posts?.length + 1,
        title: '',
        subtitle: '',
        content: '',
        likes: 0,
    };
    const [postFormData, setPostFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setPostFormData({
            ...postFormData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: CREATE, payload: postFormData });
        setPostFormData(initialFormData);
    };
    return (
        <>
            <h2 className="title">Create Post</h2>
            <form
                className="rounded-lg bg-white p-6 shadow-md"
                onSubmit={handleSubmit}
            >
                <div className="form-control">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        className="form-input"
                        name="title"
                        type="text"
                        value={postFormData?.title}
                        onChange={handleChange}
                        placeholder="Add title"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="subtitle" className="form-label">
                        Subtitle
                    </label>
                    <input
                        className="form-input"
                        name="subtitle"
                        type="text"
                        value={postFormData.subtitle}
                        onChange={handleChange}
                        placeholder="Add subtitle"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="content" className="form-label">
                        Content
                    </label>
                    <textarea
                        className="form-textarea"
                        name="content"
                        rows={7}
                        cols={15}
                        value={postFormData?.content}
                        onChange={handleChange}
                        placeholder="Add content"
                    ></textarea>
                </div>
                <button className="btn-primary" type="submit">
                    Create
                </button>
            </form>
        </>
    );
}
