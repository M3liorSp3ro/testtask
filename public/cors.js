function getEstimates() {
    fetch(`https://6502dc12a0f2c1f3faeafdf7.mockapi.io/test/estimates/1`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            window.parent.postMessage({
                district: data.district,
                realtyComplex: data['realty complex'],
                flate: data.flate
            }, '*');
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
        });
}

getEstimates();
