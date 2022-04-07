const SERVER_ADDRESS = "http://localhost:8081";

/*
 * `fetch` is a general-purpose browser-native function to execute calls to
 * remote servers.
 *
 * If our use case is only concerned with JSON responses, a helper function
 * that deals with parsing and parsing errors is a welcome addition.
 *
 * "async" functions are functions in which you can "await" on Promises and
 * where execution continues only after the Promise resolves. "async"
 * functions provide a readable way of consuming on Promises. The return value
 * of an "async" function is the return value of the function, wrapped into a
 * Promise. Note that `await x` is an expression, which can be provided as a
 * parameter to other functions.
 *
 *
 * See more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */
const parse = async (fetchPromise) => {
  const response = await fetchPromise;
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error((await response.json()).error);
  }
};

export const postComment = ({ author, text }) => {
  return parse(
    fetch(SERVER_ADDRESS + "/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ author, text }),
    })
  );
};

export const deleteComment = ({ id }) => {
  return parse(
    fetch(SERVER_ADDRESS + `/comments/${id}`, {
      method: "DELETE",
    })
  );
};

export const getComments = () => parse(fetch(SERVER_ADDRESS + "/comments"));

/*
 * @return {Object} Server API - {postComment, deleteComment, getComments}
 */
export const createServer = () => {
  return {
    postComment: (params) => postComment(params),
    deleteComment: (params) => deleteComment(params),
    getComments: () => getComments(),
  };
};
