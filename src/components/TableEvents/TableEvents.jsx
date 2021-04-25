import { Table } from "antd";
import ResizableTitle from "../ResizableTitle/ResizableTitle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const components = {
  header: {
    cell: ResizableTitle,
  },
};

const TableEvents = () => {
  const { columns, data } = useSelector((state) => state.events);
  const [columnsCorrect, setColumnsCorrect] = useState(columns);
  const [columnsResizeable, setColumnsResizeable] = useState([]);

  useEffect(() => {
    setColumnsResizeable(
      columnsCorrect.map((col, index) => ({
        ...col,
        onHeaderCell: (column) => ({
          width: column.width,
          onResize: handleResize(index),
        }),
      }))
    );
  }, [columnsCorrect]);

  const handleResize = (index) => (e, { size }) => {
    setColumnsCorrect((columns) => {
      const nextColumns = [...columns];

      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };

      return nextColumns;
    });
  };

  return (
    <div>
      <Table
        dataSource={data}
        columns={columnsResizeable}
        size="small"
        bordered
        pagination={false}
        components={components}
      />
    </div>
  );
};

export default TableEvents;
