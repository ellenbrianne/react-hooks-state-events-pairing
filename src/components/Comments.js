import CommentList from "./CommentList";

function Comments ({ comments }) {
    
    const commentDisplay = comments.map(comment => {
        return <CommentList key={comment.id} user={comment.user} text={comment.comment} />
    });

    return (
        <div>
            <h1>{comments.length} Comments</h1>
            <ul>
                {commentDisplay}
            </ul>
        </div>
    )
};

export default Comments;