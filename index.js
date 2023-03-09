const startDate = '2023-06-01T13:00:00Z';
//offset sono i giorni saltati = non lavorativi
function getOffset({ startDate, duration, workingSaturday, workingSunday }) {}

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
