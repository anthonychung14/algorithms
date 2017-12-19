function longestPalindromicSubstring(string) {
    const n = string.length;
    let palindromeBeginsAt = 0;
    let maxLength = 1;

    // row + 1 is stringLength
    // coordinates to check for match
        // (row is start, column is end)
        // if string[row] and string[column] are equal, set true
    let palindromeTable = Array(n)
        .fill()
        // fill with false values
        .map(
            () => Array(n).fill(false)
        )
        // fill one-string palindrome
        .map(
        // return the same row, but it has the index set to true
            (row, index) => {
                const currRow = row;
                currRow[index] = true;
                return currRow;
            }
        );

    // 'dd'-ouble characters
    for (var i = 0; i < n - 1; i++) {
        if (string[i] === string[i + 1]) {
            palindromeTable[i][i+1] = true;
            palindromeBeginsAt = i;
            maxLength = 2;
            console.log(palindromeTable)
        }
    }

    // for all length 3 or greater substrings
    for (var currLength = 3; currLength <= n; currLength++) {
        for (var i = 0; i < n - currLength + 1; i++) {
            // end string index
            const j = i + currLength - 1;

            if (
                string[i] === string[j] && // first and last match
                palindromeTable[i + 1][j - 1] // rest of substring is a palindrome
            ) {
                palindromeTable[i][j] = true;
                palindromeBeginsAt = i;
                maxLength = currLength;
            }
        }
    }

    return string.substr(palindromeBeginsAt, maxLength + 1);
}

console.log(longestPalindromicSubstring('bbanana'));
