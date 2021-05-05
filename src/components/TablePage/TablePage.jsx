import { Button, SelectPicker, Loader } from "rsuite";
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
import { formatNumber } from "../../helpers";
import { useEffect } from "react";

const TablePage = () => {
  const {
    count,
    limit,
    isLoading,
    variant,
    sortColumn,
    sortType,
    limitList,
    variantList,
  } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect(() => onReload(), [limit, sortColumn, sortType, variant]);

  const onReload = () =>
    dispatch(
      fetchEventsAction({
        limit,
        variant,
        sortColumn,
        sortType,
      })
    );

  const onSelectLimit = (limit) => dispatch(setLimitAction(parseInt(limit)));

  const onSelectVariant = (variant) => dispatch(setVariantAction(variant));

  const onResetOptions = () => dispatch(resetOptionsAction());

  return (
    <div className="table-page-component">
      <div>
        <div className="controls">
          <div className="count-found">
            {isLoading ? (
              <span>
                <Loader /> Загрузка...
              </span>
            ) : count ? (
              <div>
                <span>Найденно: </span> {formatNumber(count)}
              </div>
            ) : null}
          </div>
          <div className="buttons">
            <div className="show-count">
              <p>Показать по:</p>
              <SelectPicker
                data={limitList}
                value={"" + limit}
                onChange={onSelectLimit}
                searchable={false}
                cleanable={false}
              />
            </div>
            <div>
              <p>Варианты:</p>
              <SelectPicker
                data={variantList}
                value={variant}
                onChange={onSelectVariant}
                placeholder="Все"
                searchable={false}
              />
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
            <Button disabled={!count}>
              <SaveExcelButton />
            </Button>
            <Button>
              <img src={settingIcon} alt="" />
            </Button>
          </div>
        </div>
        <TableEvents />
      </div>
    </div>
  );
};

export default TablePage;
