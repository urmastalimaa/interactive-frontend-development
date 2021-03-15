export const initializer = () => ({
  lastCommentId: 0,
  comments: [],
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "addComment": {
      const newCommentId = state.lastCommentId + 1;
      const newComment = { ...action.comment, id: newCommentId };
      return {
        lastCommentId: newCommentId,
        comments: state.comments.concat([newComment]),
      };
    }
    default:
      throw new Error("Commenting reducer misuse");
  }
};
