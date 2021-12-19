const getRandomInteger = (start, end) => {
    return start + Math.floor(Math.random()*(end-start+1));
}

export const getRandom = (values) => {
    const randomIndex = getRandomInteger(0, values.length-1);
    return values[randomIndex];
}

export const getRandomDate = (startDate, endDate) => {
    // [start, end]
    let randomTime = getRandomInteger(startDate.getTime(), endDate.getTime());
    return new Date(randomTime);
}

