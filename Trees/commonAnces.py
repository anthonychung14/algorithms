def commonAncestors(t1,t2):
    while t1.parent != None and t2.parent != None:
        if t1.parent == t2: 
            return t2
        elif t2.parent == t1: 
            return t1
        elif t1.parent == t2.parent:
            return t1.parent
        t1 = t1.parent
        t2 = t2.parent
        if t1.parent == None: 
            return t1
        else:
            return t2