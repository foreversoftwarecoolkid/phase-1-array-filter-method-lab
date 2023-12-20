function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => 
      driver.slice(0, letters.length).toLowerCase() === letters.toLowerCase()  
    );
  }
  
  
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name.toLowerCase() === name.toLowerCase()
    ); 
  }