import { useEffect, useState } from "react";
import ContextMenuSource from "./ContextMenuSource";
import ContextMenuDate from "./ContextMenuDate";
import ContextMenuDescription from "./ContextMenuDescription";
import ContextMenuCondition from "./ContextMenuCondition";
import ContextMenuAction from "./ContextMenuAction";
import ContextMenuUnits from "./ContextMenuUnits";
import ContextMenuValue from "./ContextMenuValue";
import ContextMenuStation from "./ContextMenuStation";
import "./ContextMenu.scss";
import { useDispatch } from "react-redux";
import { setSortDataColumnsAction } from "../../actions/creators/eventsActionCreators";

const ContextMenu = ({ event, column }) => {
  const dispath = useDispatch();

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    event && setAnchorPoint({ x: event.clientX, y: event.clientY });
  }, [event]);

  const saveColumnValue = (inputValue) =>
    dispath(setSortDataColumnsAction(column, inputValue));

  return (
    <div className="context-menu-component">
      <ContextMenuDate anchorPoint={anchorPoint} column={column} />

      <ContextMenuSource
        anchorPoint={anchorPoint}
        column={column}
        onSave={saveColumnValue}
      />

      <ContextMenuDescription
        anchorPoint={anchorPoint}
        column={column}
        onSave={saveColumnValue}
      />

      <ContextMenuCondition
        anchorPoint={anchorPoint}
        column={column}
        onSave={saveColumnValue}
      />

      <ContextMenuAction
        anchorPoint={anchorPoint}
        column={column}
        onSave={saveColumnValue}
      />

      <ContextMenuValue
        anchorPoint={anchorPoint}
        column={column}
        onSave={saveColumnValue}
      />

      <ContextMenuUnits
        anchorPoint={anchorPoint}
        column={column}
        onSave={saveColumnValue}
      />

      <ContextMenuStation
        anchorPoint={anchorPoint}
        column={column}
        onSave={saveColumnValue}
      />
    </div>
  );
};

export default ContextMenu;
