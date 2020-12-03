const timeMap = time =>  Object.freeze({
    hour: Number(time.match(/^(\d+)/)[1]),
    minutes: time.match(/:(\d+)/)[1],
    seconds: time.match(/:(\d+):(\d+)/)[2],
    meridian: time.match(/([AaPp][Mm])$/)[1]
  })

const converterHour = ({hour, meridian}) => {
  // morning
  if(meridian.toUpperCase() === 'AM' && hour === 12) return '00'
  // afternoon
  if(meridian.toUpperCase() === 'PM' && hour !== 12) return hour + 12
  
  return hour < 12 ? `0${hour}`: hour
}


const timeConversion = (s) =>  {
  const timer = timeMap(s)

  return `${converterHour(timer)}:${timer.minutes}:${timer.seconds}`
}

console.log(timeConversion('07:05:45PM'))
