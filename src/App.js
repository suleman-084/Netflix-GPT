import { Provider } from "react-redux";
import Body from "./acomponents/Body"
import appStore from "./aUtils/appStore";
function App() {
  return (
    <div>
     <Provider store={appStore} > <Body/></Provider>
    </div>
  );
}

export default App;
