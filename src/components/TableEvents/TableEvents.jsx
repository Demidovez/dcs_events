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
    isMouseUp,
  } = useSelector((state) => state.events);
  const [columnsCorrect, setColumnsCorrect] = useState(columns);
  const [columnsResizeable, setColumnsResizeable] = useState(columns);
  const [columnsResult, setColumnsResult] = useState(columns);
  const dispatch = useDispatch();

  useEffect(() => setColumnsCorrect(columns), [columns]);

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

  useEffect(() => {
    setColumnsResult(columnsResizeable);
  }, [isMouseUp]);

  const handleResize = (index) => (e, { size }) => {
    const nextColumns = [...columnsResult];

    // console.log(size);

    nextColumns[index] = {
      ...nextColumns[index],
      width: nextColumns[index].width + e.offsetX,
    };

    setColumnsCorrect(nextColumns);
  };

  const fetchMoreEvents = () =>
    dispatch(fetchMoreEventsAction(offset + limit, limit));

  return (
    <div className="table-events-component">
      <div>
        <Table
          dataSource={[...data, ...moreData]}
          columns={columnsResult.length ? columnsResult : columnsResizeable}
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
