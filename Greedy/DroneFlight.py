def dronePlanner(list):  
   #compare starting value with the max from starting value onwards
   startHeight = list[0]    
   maxHeight = 0
   
   for i,x in enumerate(list['z']):
      if (list['z'] > maxHeight):
         maxHeight = list['z']
   
   if maxHeight - startHeight < 0
      return 0
   
   return maxHeight-startHeight