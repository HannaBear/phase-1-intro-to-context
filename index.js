
const createEmployeeRecord = (recArray) => {
    return {
        firstName: recArray[0],
        familyName: recArray[1],
        title: recArray[2],
        payPerHour: recArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}


const createEmployeeRecords = (recordsArray) => {
    console.log(recordsArray.map(rec => createEmployeeRecord(rec)))
    return recordsArray.map(rec => createEmployeeRecord(rec))

}

// Would what this ^ returned be called

const createTimeInEvent = function(employee, dateStamp) {

const prearrFromDate = dateStamp.toString()
const arrFromDate = prearrFromDate.split(" ")

const date = arrFromDate[0]
const hour = arrFromDate[1]

const inEvent = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
}

// How could I append this to the record array without setting the record array as a parameter and not using .this?

employee.timeInEvents.push(inEvent)

return employee

}

const createTimeOutEvent = function(employee, dateStamp) {

    const prearrFromDate = dateStamp.toString()
    const arrFromDate = prearrFromDate.split(" ")
    
    const date = arrFromDate[0]
    const hour = arrFromDate[1]
    
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    
    employee.timeOutEvents.push(outEvent)
    
    return employee
    
    }

    const hoursWorkedOnDate = function (targetDate){
        const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
        const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === targetDate)

        const dayHours = outEvent.hours - inEvent.hours /100

        return dayHours
        
    }