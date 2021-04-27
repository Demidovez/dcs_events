import { Resizable } from "react-resizable";
import { onMouseUpAction } from "../../actions/creators/eventsActionCreators";
import { useDispatch } from "react-redux";
import "./ResizableTitle.scss";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  const dispatch = useDispatch();

  if (!width) {
    return <th {...restProps} />;
  }

  const handleMouseUp = (e, { size }) => {
    // console.log("handleMouseUp: " + e);

    dispatch(onMouseUpAction());
  };

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          // onClick={handleMouseUp}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      onResizeStop={handleMouseUp}
      // draggableOpts={{ enableUserSelectHack: false }}
      className="resizable-title-component"
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default ResizableTitle;
