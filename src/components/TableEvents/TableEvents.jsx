import { Button, Loader } from "rsuite";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import ContextMenu from "../ContextMenu/ContextMenu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoreEventsAction,
  updateColumnsOfTableAction,
  setSortDatasAction,
} from "../../actions/creators/eventsActionCreators";
import "./TableEvents.scss";
import notFoundIcon from "../../assets/not_found.svg";
import { formatNumber } from "../../helpers";

const TableEvents = () => {
  const {
    columns,
    data,
    moreData,
    count,
    queryTime,
    offset,
    limit,
    variant,
    isLoadingMore,
    sortColumn,
    sortType,
  } = useSelector((state) => state.events);
  const [columnsCorrect, setColumnsCorrect] = useState(columns);
  const [columnsResized, setColumnsResized] = useState(columns);
  const [showMenuData, setShowMenuData] = useState({ event: null, column: "" });
  const dispatch = useDispatch();

  useEffect(() => dispatch(updateColumnsOfTableAction(columnsCorrect)), [
    dispatch,
    columnsCorrect,
  ]);

  const fetchMoreEvents = () =>
    dispatch(
      fetchMoreEventsAction({
        queryTime,
        offset,
        limit,
        variant,
        sortColumn,
        sortType,
      })
    );

  const onLoadData = (elem) => {
    const tableWidth = elem.offsetWidth;
    const fixedWidth = columnsCorrect.reduce(
      (summa, column) => summa + (column.width || 0),
      0
    );
    const countWithoutWidth = columnsCorrect.filter((column) => !column.width)
      .length;

    const defineWidth = (tableWidth - fixedWidth) / countWithoutWidth;

    setColumnsCorrect((columnsCorrect) =>
      columnsCorrect.map((column) =>
        column.width ? column : { ...column, width: defineWidth }
      )
    );
  };

  const handleResize = (width, dataKey) => {
    setColumnsResized((columnsResized) =>
      columnsResized.map((column) =>
        column.dataIndex === dataKey ? { ...column, width: width } : column
      )
    );

    dispatch(updateColumnsOfTableAction(columnsResized));
  };

  const handleSortColumn = (sortColumn, sortType) => {
    dispatch(setSortDatasAction(sortColumn, sortType));
  };

  const renderEmptyData = () => {
    return (
      <div className="not-found-icon">
        <img src={notFoundIcon} alt="" />
        <p>
          Нет данных!
          <br />
          Измените запрос...
        </p>
      </div>
    );
  };

  const renderCell = (rowData, dataIndex) => {
    let cell = "";
    const data = rowData[dataIndex];

    switch (dataIndex) {
      case "Description":
        const desc = data ? data.split("&&") : [""];

        cell = desc
          .reverse()
          .map((line, index) => <div key={index}>{line}</div>);
        break;
      case "Time":
        cell = (
          <div className="date-field">
            {data.split(" ").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        );
        break;
      default:
        cell = data;
    }

    return cell;
  };

  const handleContextMenu = (event, column) => {
    event.preventDefault();

    setShowMenuData({ event, column });
  };

  return (
    <div className="table-events-component">
      <div>
        <div>
          <Table
            autoHeight
            affixHeader
            bordered
            cellBordered
            data={[...data, ...moreData]}
            bodyRef={onLoadData}
            rowHeight={34}
            sortColumn={sortColumn}
            sortType={sortType}
            onSortColumn={handleSortColumn}
            className={data.length ? "" : "not-found"}
            renderEmpty={renderEmptyData}
            wordWrap
          >
            {columnsCorrect.map((column) => (
              <Column
                resizable
                key={column.dataIndex}
                width={column.width}
                onResize={handleResize}
                sortable={["Time", "Source", "Description"].includes(
                  column.dataIndex
                )}
              >
                <HeaderCell
                  onContextMenu={(event) =>
                    handleContextMenu(event, column.dataIndex)
                  }
                >
                  {column.title}
                </HeaderCell>
                <Cell dataKey={column.dataIndex}>
                  {(rowData) => renderCell(rowData, column.dataIndex)}
                </Cell>
              </Column>
            ))}
          </Table>
        </div>
        {data.length + moreData.length < count && (
          <div className="more">
            <Button appearance="primary" onClick={fetchMoreEvents}>
              {isLoadingMore ? <Loader /> : "Показать еще"}
            </Button>
            {data.length + moreData.length} <span>из</span>{" "}
            {formatNumber(count)}
          </div>
        )}
      </div>

      <ContextMenu event={showMenuData.event} column={showMenuData.column} />
    </div>
  );
};

export default TableEvents;
