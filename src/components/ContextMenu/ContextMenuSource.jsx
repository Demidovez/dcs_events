import { useEffect, useState } from "react";
import {
  ControlledMenu,
  MenuItem,
  FocusableItem,
  MenuHeader,
} from "@szhsin/react-menu";
import { Input, InputGroup, Icon } from "rsuite";
import "@szhsin/react-menu/dist/index.css";
import { useSelector } from "react-redux";

const ContextMenuSource = ({ anchorPoint, column, onSave }) => {
  const { sortDataColumns } = useSelector((state) => state.events);

  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (column === "Source") {
      setIsOpen(true);
      setInputValue(sortDataColumns[column]);
    }

    // eslint-disable-next-line
  }, [anchorPoint, column]);

  const handleClose = () => setIsOpen(false);

  const saveColumnValue = () => {
    onSave(inputValue);
    setIsOpen(false);
  };

  return (
    <ControlledMenu
      anchorPoint={anchorPoint}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <FocusableItem>
        {({ ref }) => (
          <InputGroup size="md" inside>
            <Input
              inputRef={ref}
              placeholder="Позиция..."
              value={inputValue}
              onChange={setInputValue}
              spellCheck="false"
            />
            <InputGroup.Addon onClick={saveColumnValue}>
              <Icon icon="search" />
            </InputGroup.Addon>
          </InputGroup>
        )}
      </FocusableItem>
      <MenuHeader>Сортировка</MenuHeader>
      <MenuItem>От А до Z</MenuItem>
      <MenuItem>От Z до A</MenuItem>
    </ControlledMenu>
  );
};

export default ContextMenuSource;
