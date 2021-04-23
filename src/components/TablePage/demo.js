const columns = [
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => (a.date < b.date ? -1 : a.date === b.date ? 0 : 1),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Позиция",
    dataIndex: "source",
    key: "source",
    sorter: (a, b) =>
      a.source < b.source ? -1 : a.source === b.source ? 0 : 1,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Состояние",
    dataIndex: "condition",
    key: "condition",
    sorter: (a, b) =>
      a.condition < b.condition ? -1 : a.condition === b.condition ? 0 : 1,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Действие",
    dataIndex: "action",
    key: "action",
    sorter: (a, b) =>
      a.action < b.action ? -1 : a.action === b.action ? 0 : 1,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Описание",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) =>
      a.description < b.description
        ? -1
        : a.description === b.description
        ? 0
        : 1,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Значение",
    dataIndex: "value",
    key: "value",
    sorter: (a, b) => (a.value < b.value ? -1 : a.value === b.value ? 0 : 1),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Пред. знач.",
    dataIndex: "pred_value",
    key: "pred_value",
    sorter: (a, b) =>
      a.pred_value < b.pred_value ? -1 : a.pred_value === b.pred_value ? 0 : 1,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "ЕИ",
    dataIndex: "units",
    key: "units",
    sorter: (a, b) => (a.units < b.units ? -1 : a.units === b.units ? 0 : 1),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Станция",
    dataIndex: "station",
    key: "station",
    sorter: (a, b) =>
      a.station < b.station ? -1 : a.station === b.station ? 0 : 1,
    sortDirections: ["descend", "ascend"],
  },
];

const data = [
  {
    key: 1,
    date: "2021-01-09 12:13:34",
    source: "2BM004M01",
    condition: "SET BYPPAS",
    action: "OK",
    description: "Byppas set for interlock",
    value: "100",
    pred_value: "90",
    units: "%",
    station: "STN11",
  },
  {
    key: 2,
    date: "2021-02-09 12:13:34",
    source: "2BM004M02",
    condition: "SET BYPPAS",
    action: "OK",
    description: "Byppas set for interlock",
    value: "100",
    pred_value: "90",
    units: "%",
    station: "STN11",
  },
  {
    key: 3,
    date: "2021-02-09 12:13:34",
    source: "2BM004M03",
    condition: "SET BYPPAS",
    action: "OK",
    description: "Byppas set for interlock",
    value: "100",
    pred_value: "90",
    units: "%",
    station: "STN11",
  },
  {
    key: 4,
    date: "2021-04-09 12:13:34",
    source: "2BM004M04",
    condition: "SET BYPPAS",
    action: "OK",
    description: "Byppas set for interlock",
    value: "100",
    pred_value: "90",
    units: "%",
    station: "STN11",
  },
];

module.exports = {
  columns,
  data,
};
