const workHours = 8;
let businessDays = 0;
const daysToIgnore = 2;

const today = new Date();
const thisMonth = today.getMonth() + 1;
const thisYear = today.getFullYear();

for (
  let dayOfTheMonth = 1;
  dayOfTheMonth <= totalMonthDays(today);
  dayOfTheMonth++
) {
  const thisDate = new Date(`${thisYear}-${thisMonth}-${dayOfTheMonth}`);
  // [domingo: 0, sábado: 6]
  businessDays = [0, 6].includes(thisDate.getDay())
    ? businessDays
    : businessDays + 1;
}

businessDays = businessDays - daysToIgnore;

console.log(
  `O mês ${thisMonth} de ${thisYear} tem ${businessDays} dias úteis, totalizando ${
    businessDays * workHours
  } horas trabalhadas`,
);

const isLeapYear = (year) => (year % 4 === 0 ? true : false);

function totalMonthDays(today) {
  const monthes = {
    with31Days: [0, 2, 4, 6, 7, 9, 11],
    with30Days: [3, 5, 8, 10],
  };
  const thisMonth = today.getMonth();
  return monthes.with31Days.includes(thisMonth)
    ? 31
    : monthes.with30Days.includes(thisMonth)
    ? 30
    : isLeapYear(today.getFullYear())
    ? 29
    : 28;
}
