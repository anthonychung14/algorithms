matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

def spiralPrint(mat):
  top = 0
  left = 0
  right = len(mat[0])-1
  bot = len(mat)-1

  result = []

  while(True):
    #TRAVERSE ACROSS TOP ROW
    for j in range(left, right+1, 1):
      result.append(mat[top][j])

    #INC TOP INDEX SO WE DON'T REPEAT
    top += 1

    #EXIT CONDITION
    if top > bot or left > right:
      break

    #TRAVERSE RIGHTMOST COLUMN
    for i in range(top, bot+1, 1):
      result.append(mat[i][right])
    right -= 1
    if top > bot or left > right:
      break

    #TRAVERSE BOTTOM ROW
    for k in range(right, left-1, -1):
      result.append(mat[bot][k])
    bot -=1

    if top > bot or left > right:
      break

    #TRAVERSE LEFT COLUMN
    for p in range(bot, top-1, -1):
      result.append(mat[p][left])
    if top > bot or left > right:
      break
    left += 1

  return result

print(spiralPrint(matrix))

