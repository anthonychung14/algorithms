def tenMinuteWalk(arr):
  import collections  
  letters = collections.Counter(arr)

  if len(arr) != 10:
      return False
  for x in letters:
    if letters[x] == "w" and letters[x] != letters['e']:
        return False;
    if letters[x] == "n" and letters[x] != letters['s']:
        return False;

  return True

walk = ['w', 'e', 'w', 'e', 'w', 'e','w', 'e','w', 'e']

print(tenMinuteWalk(walk))