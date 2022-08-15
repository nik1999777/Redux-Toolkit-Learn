import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

const App = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, users } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>An error has occurred</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  );
};

export default App;
