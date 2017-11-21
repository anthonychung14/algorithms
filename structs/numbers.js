const generateRandomNums = (nums) => {
  let res = []
  for (var i = 0; i < nums; i++) {
    res.push(Math.round(Math.random*100))
  }
  if (res.length > 1) {
    return res
  }
  return res[0]
}

const flipCoin = () => {
  return Boolean(Math.round*Math.random(1))
}

const res = []
