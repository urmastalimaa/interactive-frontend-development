import AppHeader from "./AppHeader";
import CommentListFromServer from "./CommentListWithServer";
import CommentFormWithServer from "./CommentFormWithServer";
import Filter from "./Filter";
import {
  reducer,
  initializer,
  filterSet,
  filteredComments,
  filter,
} from "../Comments";
import { ServerContext } from "../ServerContext";
import useServerBasedOnParams from "../hooks/UseServerBasedOnParams";
import loggingMiddleware from "../LoggingMiddleware";
import useReducerWithMiddleware from "../hooks/UseReducerWithMiddleware";
import '../../../css/index.scss';

const App = () => {
  const [state, dispatch] = useReducerWithMiddleware(
    [loggingMiddleware],
    reducer,
    undefined,
    initializer
  );

  /*
   * Here we choose the server based on query parameters, to illustrate how the
   * value in Context.Provider can change. Similarly, you can provide a
   * different provider in tests, based on user preferences etc.
   */
  const server = useServerBasedOnParams();

  const onFilterChange = (filter) => dispatch(filterSet(filter));
  const commentsRequestState = filteredComments(state);
  const filterValue = filter(state);

  return (
    <ServerContext.Provider value={server}>
      <div className="app">
        <AppHeader />
        <CommentFormWithServer dispatch={dispatch} />
        <Filter value={filterValue} onChange={onFilterChange} />
        <CommentListFromServer
          dispatch={dispatch}
          requestState={commentsRequestState}
        />
      </div>
    </ServerContext.Provider>
  );
};

export default App;
