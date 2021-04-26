import { Table, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ResizableTitle from "../ResizableTitle/ResizableTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreEventsAction } from "../../actions/creators/eventsActionCreators";
import "./TableEvents.scss";

const components = {
  header: {
    cell: ResizableTitle,
  },
};

const TableEvents = () => {
  const {
    columns,
    data,
    moreData,
    count,
    offset,
    limit,
    isLoadingMore,
  } = useSelector((state) => state.events);
  const [columnsCorrect, setColumnsCorrect] = useState(columns);
  const dispatch = useDispatch();

  useEffect(() => setColumnsCorrect(columns), [columns]);

  const handleResize = (index) => (e, { size }) => {
    const nextColumns = [...columns];

    console.log(2);

    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    };

    setColumnsCorrect(nextColumns);
  };

  console.log(1);
  const columnsResizeable = columnsCorrect.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  const fetchMoreEvents = () =>
    dispatch(fetchMoreEventsAction(offset + limit, limit));

  return (
    <div className="table-events-component">
      <div>
        <Table
          dataSource={[...data, ...moreData]}
          columns={columnsResizeable}
          size="small"
          bordered
          pagination={false}
          components={components}
        />
        {data.length + moreData.length < count && (
          <div className="more">
            <Button type="primary" onClick={fetchMoreEvents}>
              {isLoadingMore ? (
                <Spin indicator={<LoadingOutlined spin />} />
              ) : (
                "Показать еще"
              )}
            </Button>
            {data.length + moreData.length} <span>из</span> {count}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableEvents;
