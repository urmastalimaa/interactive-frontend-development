// Inspired by https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html

export const makeCancelable = (promise) => {
  let canceled = false;

  const canceledError = new Error("promise canceled");
  canceledError.isCanceled = true;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val) => (canceled ? reject(canceledError) : resolve(val)),
      (error) => (canceled ? reject(canceledError) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      canceled = true;
    },
  };
};
