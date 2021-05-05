import { useEffect } from "react";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import "./ContextMenu.scss";

const columnsListMenu = [
  "Time",
  "Source",
  "Description",
  "ConditionName",
  "Action",
  "Value",
  "Units",
  "Station",
];

const ContextMenu = ({ event, column }) => {
  const { show } = useContextMenu();

  useEffect(
    () =>
      columnsListMenu.includes(column) &&
      show(event, {
        id: column,
      }),

    [show, event, column]
  );

  return (
    <div className="context-menu-component">
      <Menu id="Time">
        <Item onClick={(d) => console.log(d)}>За сегодня</Item>
        <Item onClick={(d) => console.log(d)}>За вчера</Item>
        <Item onClick={(d) => console.log(d)}>За 3 дня</Item>
        <Item onClick={(d) => console.log(d)}>За 7 дней</Item>
        <Item onClick={(d) => console.log(d)}>За 1 месяц</Item>
        <Item onClick={(d) => console.log(d)}>За 2 месяц</Item>
        <Item onClick={(d) => console.log(d)}>За 3 месяца</Item>
        <Item disabled>Выбрать</Item>
        <Item onClick={(d) => console.log(d)}>С </Item>
        <Item onClick={(d) => console.log(d)}>По </Item>
        <Item disabled>Сортировка</Item>
        <Item onClick={(d) => console.log(d)}>По возрастанию</Item>
        <Item onClick={(d) => console.log(d)}>По убыванию</Item>
      </Menu>

      <Menu id="Source">
        <Item onClick={(d) => console.log(d)}>Регулярное</Item>
        <Item disabled>Сортировка</Item>
        <Item onClick={(d) => console.log(d)}>От А до Z</Item>
        <Item onClick={(d) => console.log(d)}>От Z до A</Item>
      </Menu>

      <Menu id="Description">
        <Item onClick={(d) => console.log(d)}>Регулярное</Item>
        <Item disabled>Сортировка</Item>
        <Item onClick={(d) => console.log(d)}>От А до Z</Item>
        <Item onClick={(d) => console.log(d)}>От Z до A</Item>
      </Menu>

      <Menu id="ConditionName">
        <Item onClick={(d) => console.log(d)}>Регулярное</Item>
      </Menu>

      <Menu id="Action">
        <Item onClick={(d) => console.log(d)}>Регулярное</Item>
      </Menu>

      <Menu id="Value">
        <Item onClick={(d) => console.log(d)}>Регулярное</Item>
      </Menu>

      <Menu id="Units">
        <Item onClick={(d) => console.log(d)}>Регулярное</Item>
      </Menu>

      <Menu id="Station">
        <Item onClick={(d) => console.log(d)}>Регулярное</Item>
      </Menu>
    </div>
  );
};

export default ContextMenu;
