Haris Bin Zahid

def sentenceReverse(arr):
   words = [];
   #slice from beginning to the first space
   results = []
   j = 0
   for i, x in enumerate(arr):
      if x == ' ':
         words.append(arr[j:i])
         j = i

   for x in words[::-1]:
      for letter in x:
         results.append(letter)

   return results

   #remove items from the area and put it in


"""
[[p,e,r,f,e,c,t], [' ', m,..], []]
"""

def sentenceReverse2(arr):

   for i,x in enumerate(arr[:len(arr)/2]):
      hold = x
      x = arr[-i-1]
      arr[-i-1] = hold

   j = 0
   for i, x in enumerate(arr):
      if x == ' ':
         for letter in arr[j:i/2]:
            hold = arr[j]
            arr[j] = arr[-i]
            arr[-i] = hold
            j = i

   return arr;

def mirror_reverse(array, start, end):
   while start < end:
      array[start], array[end] = array[end], array[start]
      start += 1
      end -= 1



   #slice from the next space to the following space until the end

   #switch index assignments




