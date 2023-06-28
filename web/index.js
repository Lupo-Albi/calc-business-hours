const today = new Date();
const thisMonth = today.getMonth() + 1;
const thisYear = today.getFullYear();

const monthControl = document.querySelector('input[type="month"]');
monthControl.value = `${thisYear}-${String(thisMonth).padStart(2, 0)}`;

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const chosenMonth = document.querySelector('input[type="month"]');
  const workHours = document.querySelector('input[id="daily-hours"]');
  const ignoreHours = document.querySelector('input[id="ignore-hours"]');
  const result = document.getElementById('total-hours');
  const [year, month] = chosenMonth.value.split('-');
  const businessDays = calcBusinessDays({ year, month });
  const totalHours =
    businessDays * Number(workHours.value) - Number(ignoreHours.value);

  result.innerHTML = `${totalHours}`;
});

// [1:segunda, 2:terça, 3:quarta, 4:quinta, 5:sexta]
const isBusinessDay = (date) => [1, 2, 3, 4, 5].includes(date.getUTCDay());
const isLeapYear = (year) => (Number(year) % 4 === 0 ? true : false);

function calcBusinessDays({ month, year }) {
  let businessDays = 0;
  for (
    let dayOfTheMonth = 1;
    dayOfTheMonth <= totalMonthDays({ month, year });
    dayOfTheMonth++
  ) {
    const thisDate = new Date(`${year}-${month}-${dayOfTheMonth}`);
    businessDays += isBusinessDay(thisDate) ? 1 : 0;
  }

  return businessDays;
}

function totalMonthDays({ month, year }) {
  const monthes = {
    with31Days: ['01', '03', '05', '07', '08', '10', '12'],
    with30Days: ['04', '06', '09', '11'],
  };
  return monthes.with31Days.includes(month)
    ? 31
    : monthes.with30Days.includes(month)
    ? 30
    : isLeapYear(year)
    ? 29
    : 28;
}
