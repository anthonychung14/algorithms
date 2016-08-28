#iterate over number of items 0 - n
def arrSum(n, arr):
    sum = 0;
    for x in arr[:n]:
        sum += x
    return sum


#matrix traversal

arrMatrix = [[1,2],[3,4]]

primeDiag = 0
for index, [x,y] in enumerate(arrMatrix):
  primeDiag += [x,y][index];

secondDiag = 0
for index, [x,y] in enumerate(arrMatrix):
  print([x,y][len(arrMatrix) - index])
  secondDiag += [x,y][)]

print(secondDiag)


