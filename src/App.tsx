import React from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import "./App.css";

function App() {
  const [codeGen, setCodeGen] = React.useState("");

  console.log({ codeGen });

  return (
    <div className="bg-black flex flex-col flex-1 min-h-screen">
      <div className="flex-1 flex flex-row">
        <div className="w-4/6">
          <LeftPanel />
        </div>
        {/* <div className="flex-1">
          <div
            data-snack-code={`ddcbxvbxvbf`}
            data-snack-dependencies="react-js,expo-font,native-base,styled-system,expo-constants,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient,yup,@react-navigation/drawer,@react-navigation/native,react-native-vector-icons,react-native-gesture-handler,react-native-linear-gradient,@react-native-community/masked-view,react-native-screens,react-native-reanimated,@types/react,@types/react-native"
            data-snack-name="My%20Snack"
            data-snack-description="My%20Amazing%20Snack"
            data-snack-preview="true"
            data-snack-platform="web"
            style={{
              overflow: "hidden",
              backgroundColor: "#fafafa",
              height: "500px",
              marginTop: "100px",
              width: "100%",
            }}
          ></div>
        </div> */}
        <div className="flex-1">
          <RightPanel setCodeGen={setCodeGen} />
        </div>
      </div>
    </div>
  );
}

export default App;
