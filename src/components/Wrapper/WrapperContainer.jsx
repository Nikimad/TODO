import { useSelector } from "react-redux";
import { selectTheme } from "../../models/theme/selectors";
import Wrapper from "./Wrapper";

const WrapperContainer = ({ children }) => {
  const currentTheme = useSelector(selectTheme);

  return <Wrapper theme={currentTheme} children={children} />;
};

export default WrapperContainer;
