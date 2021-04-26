import { Select, Spin, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./TablePage.scss";
import closeIcon from "../../assets/close.svg";
import reloadIcon from "../../assets/reload.svg";
import settingIcon from "../../assets/setting.svg";
import saveIcon from "../../assets/save.svg";
import TableEvents from "../TableEvents/TableEvents";
import SaveExcelButton from "../SaveExcelButton/SaveExcelButton";
import {
  fetchEventsAction,
  setLimitAction,
  setVariantAction,
  resetOptionsAction,
} from "../../actions/creators/eventsActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const { Option } = Select;

const TablePage = () => {
  const { data, count, limit, offset, isLoading, variant } = useSelector(
    (state) => state.events
  );
  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect(() => dispatch(fetchEventsAction(offset, limit, variant)), [
    limit,
    variant,
  ]);

  const onReload = () => dispatch(fetchEventsAction(offset, limit, variant));

  const onSelectLimit = (limit) => dispatch(setLimitAction(parseInt(limit)));

  const onSelectVariant = (variant) => dispatch(setVariantAction(variant));

  const onResetOptions = () => dispatch(resetOptionsAction());

  return (
    <div className="table-page-component">
      <h1>События системы APKS</h1>
      {data.length ? (
        <div>
          <div className="controls">
            <div className="count-found">
              {isLoading ? (
                <span>
                  <Spin indicator={<LoadingOutlined spin />} /> Загрузка...
                </span>
              ) : (
                "Найденно: " + count
              )}
            </div>
            <div className="buttons">
              <div>
                <p>Показать по:</p>
                <Select
                  value={limit}
                  className="show-count"
                  showArrow={false}
                  onChange={onSelectLimit}
                >
                  <Option value="50">50</Option>
                  <Option value="100">100</Option>
                  <Option value="150">150</Option>
                  <Option value="200">200</Option>
                  <Option value="250">250</Option>
                  <Option value="300">300</Option>
                </Select>
              </div>
              <div>
                <p>Варианты:</p>
                <Select
                  value={variant || undefined}
                  allowClear
                  onChange={onSelectVariant}
                >
                  <Option value="byppas">Байпасы</Option>
                  <Option value="hvac">Вентиляция</Option>
                  <Option value="change">Операторы</Option>
                </Select>
              </div>
              <Button onClick={onResetOptions} disabled>
                <img src={closeIcon} alt="" className="close" />
              </Button>
              <Button onClick={onReload}>
                <img src={reloadIcon} alt="" />
              </Button>
              <Button>
                <img src={saveIcon} alt="" />
              </Button>
              <Button>
                <SaveExcelButton />
              </Button>
              <Button>
                <img src={settingIcon} alt="" />
              </Button>
            </div>
          </div>
          <TableEvents />
        </div>
      ) : (
        <div className="loader">
          <Spin indicator={<LoadingOutlined spin />} />
        </div>
      )}
    </div>
  );
};

export default TablePage;
