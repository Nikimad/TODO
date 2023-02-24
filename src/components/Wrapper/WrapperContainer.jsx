import { useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/selectors/selectors";
import Wrapper from "./Wrapper";

const WrapperContainer = ({ children }) => {
  const currentTheme = useSelector(selectTheme);

  return <Wrapper theme={currentTheme} children={children} />;
};

export default WrapperContainer;
