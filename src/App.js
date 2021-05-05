import { FlexboxGrid } from "rsuite";
import { Switch, Route } from "react-router-dom";
import TablePage from "./components/TablePage/TablePage";
import "rsuite/dist/styles/rsuite-default.css";
import "./assets/fonts.css";
import "./App.scss";

const App = () => {
  return (
    <div className="app-component">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={2}></FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={20}>
          <Switch>
            <Route path="/" component={TablePage} />
          </Switch>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={2}></FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default App;
