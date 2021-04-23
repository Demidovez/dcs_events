import { Row, Col } from "antd";
import { Switch, Route } from "react-router-dom";
import TablePage from "./components/TablePage/TablePage";
import "antd/dist/antd.css";
import "./assets/fonts.css";
import "./App.scss";

const App = () => {
  return (
    <div className="app-component">
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Switch>
            <Route path="/" component={TablePage} />
          </Switch>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
};

export default App;
