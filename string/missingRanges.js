/*
KW first attempt
*/

// const output1 = ['2', '4->49', '51->74', '76->99'];
function missingRanges(arr, target) {
    let l;
    let r = arr[0];
    const result = [];
    let lIndex = -1;
    let rIndex = 0;

    for (let i = 0; i < arr.length + 1; i++) {
        if (l === undefined) {
            if (r === 0) {
                l = arr[++lIndex];
                r = arr[++rIndex];
                continue;
            }

            if (r === 1) result.push('0');
            if (r > 1) result.push(`0->${r-1}`);
        } else {
            if (!r) {
                r = target;
            }

            if (r) {
                const diff = r - l;
                if (diff === 1) {
                    l = arr[++lIndex];
                    r = arr[++rIndex];
                    continue;
                }
                else if (diff === 2) result.push(l+1 + '');
                else if (diff > 2) result.push(`${l+1}->${r-1}`);
            }

            if (r === target) {
                break;
            }
        }
        l = arr[++lIndex];
        r = arr[++rIndex];
    }

    console.log('STARTING')
    console.log(result)
}


missingRanges([0, 1, 3, 50, 75], 100)