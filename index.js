const startDate = '2023-06-01T13:00:00Z';
//offset sono i giorni saltati = non lavorativi
function getOffset({ startDate, duration, workingSaturday, workingSunday }) {
  const offset = new Date(startDate).getDate() + duration - 1;
  // console.log(new Date(startDate).getDay()); // 4 = thursday

  const o = workingSaturday
    ? workingSunday
      ? offset
      : offset + 1
    : workingSunday
    ? offset + 1
    : offset + 2;

  return o;
}

console.log(
  getOffset({
    startDate,
    duration: 4,
    workingSaturday: false,
    workingSunday: false,
  })
);

console.log(
  getOffset({
    startDate,
    duration: 4,
    workingSaturday: true,
    workingSunday: true,
  })
);

console.log(
  getOffset({
    startDate,
    duration: 4,
    workingSaturday: true,
    workingSunday: false,
  })
);

console.log(
  getOffset({
    startDate,
    duration: 4,
    workingSaturday: false,
    workingSunday: true,
  })
);
