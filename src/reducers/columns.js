const columns = [
  {
    title: "#",
    dataIndex: "RowNum",
    key: "RowNum",
    sortDirections: ["descend", "ascend"],
    width: 40,
  },
  {
    title: "Дата",
    dataIndex: "Time",
    key: "Time",
    sortDirections: ["descend", "ascend"],
    width: 190,
  },
  {
    title: "Позиция",
    dataIndex: "Source",
    key: "Source",
    sortDirections: ["descend", "ascend"],
    width: 130,
  },
  {
    title: "Описание",
    dataIndex: "Description",
    key: "Description",
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Состояние",
    dataIndex: "ConditionName",
    key: "ConditionName",
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Действие",
    dataIndex: "Action",
    key: "Action",
    sortDirections: ["descend", "ascend"],
    width: 115,
  },
  {
    title: "Значение",
    dataIndex: "Value",
    key: "Value",
    sortDirections: ["descend", "ascend"],
    width: 100,
  },
  {
    title: "ЕИ",
    dataIndex: "Units",
    key: "Units",
    sortDirections: ["descend", "ascend"],
    width: 70,
  },
  {
    title: "Станция",
    dataIndex: "Station",
    key: "Station",
    sortDirections: ["descend", "ascend"],
    width: 100,
  },
];

export default columns;
