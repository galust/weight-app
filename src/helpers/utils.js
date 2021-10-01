const ReformatData = (data) => {
    const items = JSON.parse(localStorage.getItem('items'));
    const startIndex = items ? items.length : 0;
    const arr = [];
    for (const i in data) {
        const idx = i.split(':')[1];
        const property = i.split(':')[0];
        arr[idx] = arr[idx] ? {...arr[idx],[property]:data[i],id:startIndex + +idx+1} : {[property]:data[i],id:startIndex + +idx+1}
    }

    return arr;
}

const CalculateProbability = () => {
    const now = new Date().getTime();
    const items = JSON.parse(localStorage.getItem('items'));
    const rawData = items.filter((element)=>{
        return element.dates[0] <= now && element.dates[1] >= now
    });
    let selectedIDS = [];

    for(let i = 0; i < 5 && rawData.length > 0; i++){
        let length = 0;
        for (const element of rawData) {
                element.range = [length,length + +element.weight]
                length += +element.weight;

        }
        const randomNumber = getRandomInRange(0,length-1);

        const IDX = rawData.findIndex((elem) => {
            return elem.range[0] <= randomNumber && randomNumber < elem.range[1]
        });

        if(IDX !== -1){
            selectedIDS.push(rawData[IDX].id);
            rawData.splice(IDX,1);
        }

    }
    return items.filter((elements)=>{
        return selectedIDS.includes(elements.id)
    })

}
/*const ReRange = (idx,data) => {

    data.splice(idx,1);
    let length = 0;
    for (const element of data) {
        element.range = [length,+element.weight]
        length += element.weight;
    }
    console.log('rerange')
    return data;
}

const GetItemsByWeight = (rangeArray,realData) => {
    const obj = Object.fromEntries(realData);
    const tempArray = rangeArray;
    let rawData = realData;
    const IDS = new Set();
    const selectedArray = new Set();



    let i = 0
    do {
        i += 1;
        const randomNumber = getRandomInRange(0,tempArray.length);
        const ID = tempArray[randomNumber];
        IDS.add(ID);

        console.log(ID)
        const {range} = rawData[ID];
        console.log(randomNumber,ID,rawData)
        if(tempArray.length){
            //selectedArray.add(realData[ID]);
            rawData = ReRange(ID,rawData);
            tempArray.splice(range[0],range[1])
        }
    } while (i < 5 && tempArray.length > 0);


    const result = realData.filter(elem => {
        return IDS.has(elem.id);

    });
    console.log('result',result)
}*/

const getRandomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export {
    ReformatData,
    CalculateProbability
}