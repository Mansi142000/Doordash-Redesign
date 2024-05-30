import Intro from "./components/Intro/intro.jsx";
import Description from "./components/Description/desc.jsx";
import Interviews from "./components/User interviews/interview.jsx";
import Pain from "./components/Pain points/painpoints.jsx";
import Redesign from "./components/Redesign/redesign.jsx";
import Conclusion from "./components/Conclusion/conclusion.jsx";

export default function App() {
  return (
    <>
      <Intro />
      <Description />
      <Interviews/>
      <Pain/>
      <Redesign/>
      <Conclusion/>
    </>
  );
}
