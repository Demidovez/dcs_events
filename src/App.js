import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./assets/fonts.css";
import "./App.scss";

const App = () => {
  return (
    <div className="app-component">
      <Row>
        <Col span={5}></Col>
        <Col span={14}></Col>
        <Col span={5}></Col>
      </Row>
    </div>
  );
};

export default App;
