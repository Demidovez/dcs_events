import { Table, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ResizableTitle from "../ResizableTitle/ResizableTitle";
import { useEffect, useState, useMemo } from "react";
import { useTable, useBlockLayout, useResizeColumns } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreEventsAction } from "../../actions/creators/eventsActionCreators";
import "./TableEvents.scss";
import makeData from "./makeData";

const components = {
  header: {
    cell: ResizableTitle,
  },
};

const TableEvents = () => {
  // const {
  //   columns,
  //   data,
  //   moreData,
  //   count,
  //   offset,
  //   limit,
  //   isLoadingMore,
  //   isMouseUp,
  // } = useSelector((state) => state.events);
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 60,
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
    []
  );
  const data = useMemo(() => makeData(10), []);

  const dispatch = useDispatch();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { columnResizing },
    resetResizing,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout,
    useResizeColumns
  );
  const [myHeaderGroups, setMyHeaderGroups] = useState(headerGroups);
  const [myRows, setMyRows] = useState(rows);

  useEffect(() => {
    if (columnResizing.isResizingColumn === null) {
      // setColumnWidths(columnResizing.columnWidths);
      setMyHeaderGroups((headerGroups) =>
        headerGroups.map((group) => ({
          ...group,
          headers: group.headers.map((header) => {
            console.log(header.getHeaderProps());

            return {
              ...header,
              width: columnResizing.columnWidths[header.id] || header.width,
              totalFlexWidth:
                columnResizing.columnWidths[header.id] || header.totalFlexWidth,
              totalWidth:
                columnResizing.columnWidths[header.id] || header.totalWidth,
            };
          }),
        }))
      );
    }
  }, [columnResizing]);

  // const fetchMoreEvents = () =>
  //   dispatch(fetchMoreEventsAction(offset + limit, limit));

  return (
    <div className="table-events-component">
      <div>
        <div>
          <div {...getTableProps()} className="table">
            <div>
              {myHeaderGroups.map((headerGroup) => (
                <div {...headerGroup.getHeaderGroupProps()} className="tr">
                  {headerGroup.headers.map((column) => (
                    <div {...column.getHeaderProps()} className="th">
                      {column.render("Header")}
                      <div
                        {...column.getResizerProps()}
                        className={`resizer ${
                          column.isResizing ? "isResizing" : ""
                        }`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <div {...row.getRowProps()} className="tr">
                    {row.cells.map((cell) => {
                      return (
                        <div {...cell.getCellProps()} className="td">
                          {cell.render("Cell")}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* {data.length + moreData.length < count && (
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
        )} */}
      </div>
    </div>
  );
};

export default TableEvents;
