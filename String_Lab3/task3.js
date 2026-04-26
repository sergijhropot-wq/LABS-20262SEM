function countCharacters(s) {
    let frequencyMap = {};

    for (let char of s) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    
    return frequencyMap;
}

console.log("--- String Lab 3: Frequency Map ---");
console.log(countCharacters("banana")); 