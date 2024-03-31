import { Provider } from "react-redux";
import store from "./redux/store";
import Page from "./components/Page";
import "./App.css";
import "./styles/styles.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page />
      </div>
    </Provider>
  );
}

export default App;
