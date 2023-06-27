import datetime


def is_leap_year(year):
    return True if year % 4 == 0 else False


def number_of_days(datetime):
    this_month = datetime.month
    monthes = {"with31Days": [1, 3, 5, 7, 8, 10, 12], "with30Days": [4, 6, 9, 11]}

    if this_month in monthes["with31Days"]:
        return 31
    elif this_month in monthes["with30Days"]:
        return 30
    elif is_leap_year(datetime.year):
        return 29
    else:
        return 28


now = datetime.datetime.now()

work_hours = int(input("Insira quantidade de horas trabalhadas por dia: "))
ignore_hours = int(input("Horas de abono (feriados, folgas, short day): "))
exclude_days = ignore_hours // work_hours
exclude_remain = ignore_hours % work_hours
business_days = 0

for day in range(number_of_days(now)):
    date = datetime.date(now.year, now.month, day + 1)
    week_day = date.weekday()
    # 5 = sábado, 6 = domingo
    business_days += 0 if week_day in [5, 6] else 1

print(
    f"No mês {now.month}/{now.year} tiveram {business_days} dias úteis.\n",
    f"Tempo total a ser trabalhado: {business_days * work_hours - ignore_hours}\n",
    f"Tempo total excluindo abonos: {business_days * work_hours}\n",
    f"Qtd. de dias úteis trabalhados incluindo horas de abono:",
    f"{business_days - exclude_days} dias úteis",
    f"com {exclude_remain} horas restantes de abono",
)
