import { createAction } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import App from "./App";

const AppContainer = () => {
  const dispatch = useDispatch();
  const mountAction = createAction("mount");
  const beforeUnload = createAction("beforeunload");
  const handleBeforeUnload = useCallback(
    () => dispatch(beforeUnload()),
    [dispatch, beforeUnload]
  );

  useEffect(() => {
    dispatch(mountAction());
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch, mountAction, handleBeforeUnload]);

  return <App />;
};

export default AppContainer;
