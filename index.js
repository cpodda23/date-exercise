const startDate = '2023-06-01T13:00:00Z';
//offset sono i giorni saltati = non lavorativi
function getOffset({ startDate, duration, workingSaturday, workingSunday }) {
  const offset = new Date(startDate).getDate() + duration - 1;
  console.log(offset);
  workingSaturday && workingSunday;
  const sat = workingSaturday ? offset : offset + 1;
  const sun = workingSunday ? offset : offset + 1;
  return sat;
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
