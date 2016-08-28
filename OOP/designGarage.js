class ParkingSpace {
  constructor(id) {
    this.id = id
    this.isEmpty = true
    this.startTime;
  }

  startSession() {
    this.isEmpty = false
    this.startTime = Date.now()
  }  
}

class GarageStructure {
  constructor(floors, spaces, percentHandi, rate) {
    //immutable characteristics of the garage constructor.
    //this can arguably change, but let's say it won't for now
    this.total = this.floors * this.spaces
    this.handiTotal = Math.floor( this.total * (percentHandi/100) )      
    this.spacesTotal = ( this.floors * this.spaces ) - this.handiTotal      
    this.handiRemain, this.spaceRemain
    this.rate = rate
                
    this.spaceStorage = []
    for (var i = 0; i < spacesTotal; i++) {
      this.spaceStorage.push(new ParkingSpace(i))
    }
    
    this.handiStorage = []        
    for (var i = 0; i < handiTotal; i++) {
      this.handiStorage.push(new ParkingSpace(i))
    }
    
    //flag is better since switching them on/off would be relatively infrequent
    //assuming a regular parking garage would reach capacity in peak hours 
    //and then turn off as soon as one exit occurs
    this.hasHandiSpace = true          
    this.hasSpace = true
  }

  giveTicket(isHandi) {                
    //iterates over an array to return first open space
    const findSpace = (isHandi) => {    
      let arr, ticket;
      
      if ( isHandi ) { arr = this.handiStorage } 
      else { arr = this.spaceStorage }
      
      for (var i = 0; i < arr.length; i++) {
        if ( arr[i].isEmpty ) { 
          arr[i] = new ParkingSpace(i) 
        }  
        else return
      }
    }

    if ( this.hasSpace && !isHandi || this.hasHandiSpace && isHandi ) {       
      ticket = findSpace( isHandi )
      return ticket.id 
    }  
    //err catch. storage is full    
    return null
  }

  eatTicket(ticket) {
    const calcHours = (start, end) => { return Math.floor(start - end / 60 )}
    return this.rate * calcHours(ticket.startTime, Date.now())    
  }
}