// Есть массив цветов в hex-формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, 
// раз в секунду меняет цвет фона body на случайное значение из массива используя 
// инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}

const backgroundSwitcher = {
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }
        
        this.isActive = true;

        this.timerId = setInterval(() => {
            const randomNumber = randomIntegerFromInterval(0, 5);
            const activeColor = colors[randomNumber];
            changeBackgroundColor(activeColor);
        }, 1000);
    },

    stop() {
        this.isActive = false;
        clearInterval(this.timerId);
    }
}

function changeBackgroundColor(color) {
    refs.body.style.backgroundColor = color;
}


refs.startBtn.addEventListener('click', backgroundSwitcher.start.bind(backgroundSwitcher));

refs.stopBtn.addEventListener('click', backgroundSwitcher.stop.bind(backgroundSwitcher));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};