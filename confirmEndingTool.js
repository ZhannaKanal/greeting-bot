const confirmEnding = (str1, str2) => {
    const isBool = true;
    const sliced = str1.slice(-str2.length);
    console.log(sliced)
    if (sliced === str2) {
        return isBool;
    } else {
        return ~isBool;
    }
}