var letterCombinations = function(digits) {
    let numLetter = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    function combos(n, src, result) {
        if (n === 0) {
            if (result.length > 0) {
                comboArr.push(result)
            }
            return
        }

        for (var i = 0; i < numLetter[src[0]].length; i++) {
            combos(n - 1, src.slice(1), result + numLetter[src[0]][i])
        }
        return
    }

    let comboArr = []
    combos(digits.length, digits, [])

    return comboArr
};

console.log(letterCombinations(''))