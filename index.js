/* Your Code Here */
const createEmployeeRecord = (employee) => {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (records) => records.map(record => createEmployeeRecord(record))

const createTimeInEvent = function(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        date: dateStamp.slice(0,10),
        hour: parseInt(dateStamp.slice(-4))
      })
      return this
}

const createTimeOutEvent = function(dateStamp){
    this.timeOutEvents.push({
      type: "TimeOut",
      date: dateStamp.slice(0,10),
      hour: parseInt(dateStamp.slice(-4))
    })
    return this
}

const hoursWorkedOnDate = function(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour
    return (timeOut - timeIn ) / 100
}

const wagesEarnedOnDate = function(date){
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}

const findEmployeeByFirstName = function(emps, empToFind){
    return emps.find(emp => emp.firstName === empToFind)
}

function calculatePayroll(employeeRecords){
    return employeeRecords.map(emp => allWagesFor.call(emp)).reduce((acc, wages) => acc + wages)
}

  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function allWagesFor() {
    // console.log(this)
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
