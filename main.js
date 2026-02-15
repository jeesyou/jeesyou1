
document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers-container');
    const generateButton = document.getElementById('generate-button');

    const getNumberColor = (number) => {
        if (number <= 10) return '#fbc400'; // 노란색
        if (number <= 20) return '#69c8f2'; // 파란색
        if (number <= 30) return '#ff7272'; // 빨간색
        if (number <= 40) return '#aaa';    // 회색
        return '#b0d840';      // 녹색
    };

    generateButton.addEventListener('click', () => {
        numbersContainer.innerHTML = '';
        const lottoNumbers = new Set();

        while (lottoNumbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            lottoNumbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            numberElement.style.backgroundColor = getNumberColor(number);
            numberElement.style.animationDelay = `${index * 0.1}s`;
            numbersContainer.appendChild(numberElement);
        });
    });
});
