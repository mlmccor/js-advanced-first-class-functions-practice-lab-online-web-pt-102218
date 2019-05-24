const logname = function (person){
  console.log(person.name)
}
function logDriverNames(drivers) {
  for (const driver of drivers) {
    logname(driver)
  }
}

function logDriversByHometown(drivers, location) {
  for (const driver of drivers) {
    if (driver.hometown === location) {
      logname(driver)
    }
  }
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  const revenueSorter = function(driverA, driverB) { 
    return driverA.revenue - driverB.revenue
  }
  return driversCopy.sort(revenueSorter)
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  const nameSorter = function(driverA, driverB) { 
    return driverA.name.localeCompare(driverB.name, 'en', {sensitivity: 'base'})
  }
  return driversCopy.sort(nameSorter)
}

function totalRevenue(drivers) {
  let total = 0
  drivers.forEach(function (driver) {
    total += driver.revenue
  })
  return total
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/ (drivers.length)
}