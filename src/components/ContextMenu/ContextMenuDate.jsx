import { useEffect, useState } from "react";
import { ControlledMenu, MenuItem, MenuHeader } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { useDispatch } from "react-redux";
import { setTimeModeAction } from "../../actions/creators/eventsActionCreators";

const ContextMenuDate = ({ anchorPoint, column }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (column === "Time") {
      setIsOpen(true);
    }

    // eslint-disable-next-line
  }, [anchorPoint, column]);

  const handleClose = () => setIsOpen(false);

  const handleItemClick = (event) => {
    dispatch(setTimeModeAction(event.value));
  };

  return (
    <ControlledMenu
      anchorPoint={anchorPoint}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <MenuItem value="today" onClick={handleItemClick}>
        За сегодня
      </MenuItem>
      <MenuItem value="tomorrow" onClick={handleItemClick}>
        За вчера
      </MenuItem>
      <MenuItem value="days_3" onClick={handleItemClick}>
        За 3 дня
      </MenuItem>
      <MenuItem value="week_1" onClick={handleItemClick}>
        За 1 неделю
      </MenuItem>
      <MenuItem value="month_1" onClick={handleItemClick}>
        За 1 месяц
      </MenuItem>
      <MenuItem value="month_2" onClick={handleItemClick}>
        За 2 месяц
      </MenuItem>
      <MenuItem value="month_3" onClick={handleItemClick}>
        За 3 месяца
      </MenuItem>
      <MenuItem value="month_6" onClick={handleItemClick}>
        За 6 месяцев
      </MenuItem>
      <MenuHeader>Сортировка</MenuHeader>
      <MenuItem>По возрастанию</MenuItem>
      <MenuItem>По убыванию</MenuItem>
    </ControlledMenu>
  );
};

export default ContextMenuDate;
