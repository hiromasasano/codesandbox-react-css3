import { StyledJsx } from "./components/StyledJsx";
import { StyleComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <StyledJsx />
      <StyleComponents />
      <Emotion />
    </div>
  );
}
