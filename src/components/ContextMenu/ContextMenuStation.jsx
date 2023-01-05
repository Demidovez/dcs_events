import { useEffect, useState } from "react";
import { ControlledMenu, FocusableItem } from "@szhsin/react-menu";
import { Input, InputGroup, Icon } from "rsuite";
import "@szhsin/react-menu/dist/index.css";
import { useSelector } from "react-redux";

const ContextMenuStation = ({ anchorPoint, column, onSave }) => {
  const { sortDataColumns } = useSelector((state) => state.events);

  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (column === "Station") {
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
              placeholder="Станция..."
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
    </ControlledMenu>
  );
};

export default ContextMenuStation;
