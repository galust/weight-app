const ReformatData = (data) => {
    const items = JSON.parse(localStorage.getItem('items'));
    const startIndex = items ? items.length : 0;
    const arr = [];
    for (const i in data) {
        const idx = i.split(':')[1];
        const property = i.split(':')[0];
        arr[idx] = arr[idx] ? {...arr[idx], [property]: data[i], id: startIndex + +idx + 1} : {
            [property]: data[i],
            id: startIndex + +idx + 1
        }
    }

    return arr;
}

const CalculateProbability = (items) => {
    const now = new Date().getTime();

    const rawData = items.filter((element) => {
        return element.dates[0] <= now && element.dates[1] >= now
    });
    let selectedIDS = [];

    for (let i = 0; i < 5 && rawData.length > 0; i++) {
        let length = 1;
        let elementsRanges = [];
        for (const element of rawData) {
            elementsRanges.push([length, length + +element.weight]);
            length += +element.weight;

        }
        const randomNumber = getRandomInRange(1, length - 1);
        const IDX = elementsRanges.findIndex((elem) => {
            return elem[0] <= randomNumber && randomNumber < elem[1]
        });

        if (IDX !== -1) {
            selectedIDS.push(rawData[IDX].id);
            rawData.splice(IDX, 1);
            elementsRanges.splice(IDX, 1);
        }

    }
    return items.filter((elements) => {
        return selectedIDS.includes(elements.id)
    })

}
const getRandomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
    ReformatData,
    CalculateProbability
}