import { RotasList } from "./Routes/route";
import  GlobalState from "./Global/GlobalState";

const App = () => {
  return (
    <div>
      <GlobalState>
        <RotasList />
      </GlobalState>
    </div>
  );
};

export default App;
