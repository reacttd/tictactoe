import "./DesktopComponent.css";
import { colors } from "../data/colors";

export const DesktopComponent = () => {
  return (
    <div className="dWrapper">
      {colors.map((el, i) => (
        <div
          style={{ backgroundColor: el, gridArea: `c${i + 1}` }}
          key={i}
        ></div>
      ))}
    </div>
  );
};