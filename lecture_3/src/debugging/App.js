import React, {useState} from 'react';
import CommentList from '../path_to_hooks/CommentList';
import CommentForm from '../path_to_hooks/HooksCommentForm';

export default function App() {
    const [comments, setComments] = useState([
        {author: 'React Reactson', text: 'This is one comment', id: 1},
        {author: 'Java Scriptson', text: 'This is another comment', id: 2},
    ]);

    const handleCommentSubmit = ({author, text}) => {
        const lastComment = comments[comments.length - 1];
        debugger; // eslint-disable-line no-debugger
        setComments([
            ...comments,
            {
                author,
                text,
                id: lastComment.id + 1,
            }
        ])
    }

    return (
        <div className="app">
            <h1>Comments</h1>
            <CommentList comments={comments}/>
            <CommentForm
                onSubmit={handleCommentSubmit}
                text="Submit comment"
            />
        </div>
    );
}
