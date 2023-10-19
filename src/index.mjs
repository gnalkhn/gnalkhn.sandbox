import "./styles.css";

const weight_f = document.getElementById('weight');
const weight_percentage_f = document.getElementById('weight_percentage');
const width_f = document.getElementById('width');
const height_f = document.getElementById('height');
const rim_diameter_f = document.getElementById('rim_diameter');
const height_percentage_f = document.getElementById('height_percentage');

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // тут будет логика калькулятора
  const weight = parseFloat(weight_f.value);
  const weight_percentage = parseFloat(weight_percentage_f.value);
  const b = parseFloat(width_f.value);
  const height = parseFloat(height_f.value);
  const rim_diameter = parseFloat(rim_diameter_f.value);
  const height_percentage = parseFloat(height_percentage_f.value);
  // расчёт
  const D = (rim_diameter * 25.4) + 2 * (b * height / 100);
  const h = (b * height / 100) * (height_percentage / 100);
  const m = (weight * (weight_percentage / 100)) / 2;
  const S = (3.14 * h * ((D * b)**0.5)) / 100;
  const p = m / S;
  const result = p.toFixed(3);

  const result_text_1 = document.getElementById('result_output_1');
  result_text_1.innerText = "Удельное давление на грунт: " + result + " кг/см2";
});