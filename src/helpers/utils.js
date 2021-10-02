/**
 * Returns formatted form data.
 *
 * @param {Array} data The form data.
 * @return {Array} The collection of formatted form data.
 */
const reformatData = (data) => {
    const items = JSON.parse(localStorage.getItem('items'));
    const startIndex = items ? items.length : 0;
    const arr = [];
    for (const i in data) {
        const index = i.split(':')[1];
        const property = i.split(':')[0];
        arr[index] = arr[index] ? {...arr[index], [property]: data[i], id: startIndex + +index + 1} : {
            [property]: data[i],
            id: startIndex + +index + 1
        }
    }
    return arr;
}
/**
 * Returns selected items collection based on theirs weight.
 *
 * @param {Array} items The collection of items.
 * @param {number} itemCount The expected items count.
 * @return {Array} The collection of filtered and randomized items.
 */
const getItemsByWeight = (items, itemCount = 5) => {
    // get items based on their weights
    const rawData = getActiveItems(items);
    let selectedItems = [];

    for (let i = 0; i < itemCount && rawData.length > 0; i++) {
        let length = 1;
        let elementsRanges = [];
        for (const element of rawData) {
            elementsRanges.push([length, length + +element.weight]);
            length += +element.weight;
        }
        const randomNumber = getRandomInRange(1, length - 1);
        const index = elementsRanges.findIndex((elem) => {
            return elem[0] <= randomNumber && randomNumber < elem[1];
        });

        if (index !== -1) {
            selectedItems.push(rawData[index]);
            rawData.splice(index, 1);
            elementsRanges.splice(index, 1);
        }
    }
    return selectedItems;
}

/**
 * Returns data that is in current range.
 *
 * @param {Array} items The collection of items.
 * @return {Array} The collection of items filtered by dates range.
 */
const getActiveItems = (items) => {
    // checking active dates
    const now = new Date().getTime();
    return items.filter((element) => {
        return element.dates[0] <= now && element.dates[1] >= now;
    });
}

/**
 * Returns random number in current range.
 *
 * @param {number} min The possible min range.
 * @param {number} max The possible max range.
 * @return {number} The random number in current range.
 */
const getRandomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
    reformatData,
    getItemsByWeight
}