function countVowelsAndConsonants(s) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of s) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    console.log("Vowels:", vowelCount);
    console.log("Consonants:", consonantCount);
}

console.log("--- String Lab 2: Counts ---");
countVowelsAndConsonants("Hello World"); 