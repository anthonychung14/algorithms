def drawTree(x, y, starting_length, depth):
   #base case: depth = 0, return
   if(depth == 0):
      return
      
   #recursive
   #recalculate depth
      # first time, starting_length /1
      # nth time, starting_length/2**n
   
   # - - ->
   #draw line to the right
   
   #helper function to draw a line, and calculate new point
      
   x2 = x + starting_length
   y2 = y
   drawLine(x1, y1, x2, y2)
   drawLine(x2, y2 + starting_length)
   drawLine(x2, y2 - starting_length)

   drawTree(x2, y2 + starting_length, starting_length/Math.sqrt(2) depth-1)
   drawTree(x2, y2 - starting_length, depth-1)
              
   # < - - -
   x2 = x - starting_length
   y2 = y
   drawLine(x1, y1, x2, y2)
   drawLine(x2, y2 + starting_length)
   drawLine(x2, y2 - starting_length)

   drawTree(x2, y2 + starting_length, depth-1)
   drawTree(x2, y2 - starting_length, depth-1)
