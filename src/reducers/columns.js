const columns = [
  {
    title: "#",
    dataIndex: "RowNum",
    key: "RowNum",
    sorter: (a, b) => (a.date < b.date ? -1 : a.date === b.date ? 0 : 1),
    sortDirections: ["descend", "ascend"],
    width: 50,
  },
  {
    title: "Дата",
    dataIndex: "Time",
    key: "Time",
    sorter: (a, b) => (a.date < b.date ? -1 : a.date === b.date ? 0 : 1),
    sortDirections: ["descend", "ascend"],
    width: 190,
  },
  {
    title: "Позиция",
    dataIndex: "Source",
    key: "Source",
    sorter: (a, b) =>
      a.source < b.source ? -1 : a.source === b.source ? 0 : 1,
    sortDirections: ["descend", "ascend"],
    width: 130,
  },
  {
    title: "Описание",
    dataIndex: "Description",
    key: "Description",
    sorter: (a, b) =>
      a.description < b.description
        ? -1
        : a.description === b.description
        ? 0
        : 1,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Состояние",
    dataIndex: "ConditionName",
    key: "ConditionName",
    sorter: (a, b) =>
      a.condition < b.condition ? -1 : a.condition === b.condition ? 0 : 1,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Действие",
    dataIndex: "Action",
    key: "Action",
    sorter: (a, b) =>
      a.action < b.action ? -1 : a.action === b.action ? 0 : 1,
    sortDirections: ["descend", "ascend"],
    width: 115,
  },
  {
    title: "Значение",
    dataIndex: "Value",
    key: "Value",
    sorter: (a, b) => (a.value < b.value ? -1 : a.value === b.value ? 0 : 1),
    sortDirections: ["descend", "ascend"],
    width: 100,
  },
  {
    title: "Пред. знач.",
    dataIndex: "PrevValue",
    key: "PrevValue",
    sorter: (a, b) =>
      a.pred_value < b.pred_value ? -1 : a.pred_value === b.pred_value ? 0 : 1,
    sortDirections: ["descend", "ascend"],
    width: 120,
  },
  {
    title: "ЕИ",
    dataIndex: "Units",
    key: "Units",
    sorter: (a, b) => (a.units < b.units ? -1 : a.units === b.units ? 0 : 1),
    sortDirections: ["descend", "ascend"],
    width: 70,
  },
  {
    title: "Станция",
    dataIndex: "Station",
    key: "Station",
    sorter: (a, b) =>
      a.station < b.station ? -1 : a.station === b.station ? 0 : 1,
    sortDirections: ["descend", "ascend"],
    width: 100,
  },
];

export default columns;
