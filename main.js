
document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers-container');
    const generateButton = document.getElementById('generate-button');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');
    const getKosdaqBtn = document.getElementById('getKosdaqBtn');
    const kosdaqInfo = document.getElementById('kosdaqInfo');

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

    getWeatherBtn.addEventListener('click', () => {
        weatherInfo.innerHTML = '<p>날씨 정보를 불러오는 중...</p>';

        fetch('https://wttr.in/Seoul?format=j1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('날씨 정보를 가져오는 데 실패했습니다.');
                }
                return response.json();
            })
            .then(data => {
                const current = data.current_condition[0];
                const weatherDesc = current.weatherDesc[0].value;
                const temp = current.temp_C;
                const feelsLike = current.FeelsLikeC;
                
                // The API provides a Korean description, let's find it.
                const koreanDesc = current.lang_ko[0].value;

                weatherInfo.innerHTML = `
                    <h3>서울시 날씨</h3>
                    <p><strong>현재 상태:</strong> ${koreanDesc} (${weatherDesc})</p>
                    <p><strong>온도:</strong> ${temp}°C</p>
                    <p><strong>체감 온도:</strong> ${feelsLike}°C</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
            });
    });

    getKosdaqBtn.addEventListener('click', () => {
        // NOTE: Using placeholder data as real-time financial APIs require authentication.
        const kosdaqData = {
            index: '850.15',
            change: '-5.12',
            changePercent: '-0.60%',
            date: '2026-02-15 (장마감 기준)'
        };

        kosdaqInfo.innerHTML = `
            <h3>코스닥(KOSDAQ) 지수</h3>
            <p><strong>현재 지수:</strong> ${kosdaqData.index}</p>
            <p><strong>등락:</strong> <span style="color: blue;">${kosdaqData.change} (${kosdaqData.changePercent})</span></p>
            <p><small>기준: ${kosdaqData.date}</small></p>
            <p><small>* 위 정보는 예시 데이터이며, 실제 시세가 아닙니다.</small></p>
        `;
    });
});
