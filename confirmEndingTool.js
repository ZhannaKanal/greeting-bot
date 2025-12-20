const confirmEnding = (str1, str2) => {
    const sliced = str1.slice(-str2.length);
    console.log(sliced)
    if (sliced === str2) {
        return true;
    } else {
        return false;
    }
}