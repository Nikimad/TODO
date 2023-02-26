import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { mountAction, beforeUnload } from "../../actions/actions";
import App from "./App";

const AppContainer = () => {
  const dispatch = useDispatch();
  const handleBeforeUnload = useCallback(
    () => dispatch(beforeUnload()),
    [dispatch]
  );

  useEffect(() => {
    dispatch(mountAction());
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch, handleBeforeUnload]);

  return <App />;
};

export default AppContainer;
