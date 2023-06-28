# calc-business-hours

Calcula quantas horas mensais deve-se trabalhar, podendo indicar também horas de abonos (horas a serem retiradas do total mensal). Feito para facilitar minha vida de calcular.

## Como executar

Basta escolher um dos scripts e executar dependendo do formato. O script python recebe inputs na execução, já o JS precisa ser alterado os valores de horas trabalhadas e de abono antes da execução conforme necessário.

### Script Python

> python3 calc-business-hours.py

### Script JS

> node calc-business-hours.js

### Web

Coloquei a lógica JS em um site estático na pasta `web` que pode ser acessado nessa pen: [Codepen](https://codepen.io/lupo-albi/pen/LYXWNQg). Ou então você pode baixar os arquivos e abrir localmente. CSS do site foi baseado no dessa pen: [Glassmorphic Sign in Form](https://codepen.io/dasshounak/pen/QWKKYdj)

## TODO

Ideias que eu penso em experimentar e talvez utilize esse projeto

- Toggle Dark Mode
- Escolher outro esquema de cores
- Verificar compatibilidade de browsers

## Problemas conhecidos

### Web

- Safari iOS: Não retornou o resultado esperado
- Safari iOS: input de mês muda de tamanho quando se interage com ele
