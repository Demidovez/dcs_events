import ReactExport from "react-data-export";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SaveExcelButton.scss";
import downloadIcon from "../../assets/download.svg";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const SaveExcelButton = () => {
  const { columns, data } = useSelector((state) => state.events);
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    const columnsResizeable = columns.map((column) => ({
      title: column.title,
      key: column.key,
      width: {
        wpx: column.width,
      },
      style: {
        fill: { patternType: "solid", fgColor: { rgb: "5bb0ff" } },
        font: { color: { rgb: "FFFFFF" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
        },
      },
    }));

    setDataSet([
      {
        columns: columnsResizeable,
        data: data.map((row) =>
          columnsResizeable.map(({ key }) => ({
            value: row[key],
            style: {
              border: {
                top: { style: "thin", color: { rgb: "000000" } },
                left: { style: "thin", color: { rgb: "000000" } },
                right: { style: "thin", color: { rgb: "000000" } },
                bottom: { style: "thin", color: { rgb: "000000" } },
              },
            },
          }))
        ),
      },
    ]);

    // eslint-disable-next-line
  }, [columns, data]);

  return (
    <div className="save-excel-button-component">
      <ExcelFile element={<img src={downloadIcon} alt="" />} filename="События">
        <ExcelSheet dataSet={dataSet} name="События" />
      </ExcelFile>
    </div>
  );
};

export default SaveExcelButton;
