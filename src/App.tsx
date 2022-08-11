import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="bg-black flex flex-col flex-1 min-h-screen">
      <div className="flex-1 flex flex-row">
        <div className="w-4/6">
          <LeftPanel />
        </div>
        <div className="flex-1">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
