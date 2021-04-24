import { Table, Select, Button } from "antd";
import demo from "./demo";
import "./TablePage.scss";
import closeIcon from "../../assets/close.svg";
import reloadIcon from "../../assets/reload.svg";
import settingIcon from "../../assets/setting.svg";
import downloadIcon from "../../assets/download.svg";
import saveIcon from "../../assets/save.svg";
import ResizableTitle from "../ResizableTitle/ResizableTitle";
import { useState } from "react";
const { Option } = Select;

const TablePage = () => {
  const [columnsData, setColumnsData] = useState({ columns: demo.columns });

  const handleResize = (index) => (e, { size }) => {
    setColumnsData(({ columns }) => {
      const nextColumns = [...columns];

      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };

      return { columns: nextColumns };
    });
  };

  const columns = columnsData.columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  const components = {
    header: {
      cell: ResizableTitle,
    },
  };

  return (
    <div className="table-page-component">
      <h1>События системы APKS</h1>
      <div className="controls">
        <p>Найденно: 345</p>
        <div className="buttons">
          <div>
            <p>Показать по:</p>
            <Select defaultValue="с50" className="show-count" showArrow={false}>
              <Option value="с50">50</Option>
              <Option value="с100">100</Option>
              <Option value="с150">150</Option>
              <Option value="с200">200</Option>
              <Option value="с250">250</Option>
            </Select>
          </div>
          <div>
            <p>Варианты:</p>
            <Select defaultValue="">
              <Option value="byppas">Байпасы</Option>
              <Option value="hvac">Вентиляция</Option>
              <Option value="change">Операторы</Option>
            </Select>
          </div>
          <img src={closeIcon} alt="" className="close" />
          <img src={reloadIcon} alt="" />
          <img src={saveIcon} alt="" />
          <img src={downloadIcon} alt="" />
          <img src={settingIcon} alt="" />
        </div>
      </div>
      <Table
        dataSource={demo.data}
        columns={columns}
        size="small"
        bordered
        pagination={false}
        components={components}
      />
      <div className="more">
        <Button type="primary">Показать еще</Button>
        31 <span>из</span> 345
      </div>
    </div>
  );
};

export default TablePage;
