# Given an array with unique characters arr and a string str, find the smallest substring of str containing all characters of arr.

# Example:
# arr: [x,y,z], str: xyyzyzyx
# result: zyx

def short(arr, str):
  #build a hash map of the unique values
  hash = {x:x for x in arr}

  for index, head in enumerate(string):
    print (index, head)

  #head will iterate forward
  #if head is in hash map, start building the tail

  #next pointer will iterate forward as the tail

    #on each iteration, check hashmap

array = ["x", "t", "t", "z", "y"]
string = "xyyzyzyx"

short(array, string)
