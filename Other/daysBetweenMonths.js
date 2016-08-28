function solution(Y, A, B, W) {
    var daysMonth = {
     January: 31,
     February: 28,
     March: 31,
     April: 30,
     May: 31,
     June: 30,
     July: 31,
     August: 31,
     September: 30,
     October: 31,
     November: 30,
     December: 31
    }
    if (Y % 4 === 0) { daysMonth['February'] = 29 }
    var daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']    
    var monthsYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']    
    
    var currMon = 0    
    var startMonth = monthsYear.indexOf(A)
    var endMonth = monthsYear.indexOf(B)
    
    var currentDate = 1
    var currentYear = Y
    var currentDay = daysWeek.indexOf(W)            

    function incDay() {
      if (currentDay === daysWeek.length-1) { currentDay = 0}
      else {currentDay++}
    }
  
  //Count days until end of month    
    function incToEndMonth(month) {
      while(currentDate <= daysMonth[month]) {
          currentDate++
          //reset day if you are at the end of the week
          incDay()
      }
      currentDate = 1         
    }
          
  //Count days until you reach startMonth
    while(currMon !== startMonth) {
      incToEndMonth(monthsYear[currMon])      
      currMon++
    }
    
  //Get to the first monday of the month
    while (daysWeek[currentDay] !== 'Monday') {
      currentDate++
      incDay()
    }
  
    var weeks = 0;
    var dayCount = 0;
  
  //Begin calculating from current month's Monday to desired endMonth
    while(currMon < (endMonth+1)) {      
      while(currentDate <= daysMonth[monthsYear[currMon]]) {
        currentDate++        
        dayCount++
        if(dayCount % 7 === 0) {weeks++}      
      }
      currentDate = 1
      currMon++
    }    
    return weeks;
}

console.log(solution(2014, 'April', 'May', 'Wednesday'))

