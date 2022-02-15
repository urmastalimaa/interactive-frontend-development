/*
  Has `author` and `children` props. `children` is a special prop that has
  contained components.
*/
const Comment = ({ author, children }) => {
  return (
    <div className="comment">
      <h2 className="author">{author}</h2>
      {children}
    </div>
  );
}

export default Comment;
