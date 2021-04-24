import { Resizable } from "react-resizable";
import "./ResizableTitle.scss";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      //   draggableOpts={{ enableUserSelectHack: false }}
      className="resizable-title-component"
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default ResizableTitle;
