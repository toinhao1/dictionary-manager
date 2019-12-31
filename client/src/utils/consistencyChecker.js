// loop through the array of objects checking whether there are any duplicate domains if there
// are then return the index of that object within the array 
// so we can target the row to show an error
export const consistencyChecker = (dictionary) => {

  const domains = dictionary.map(row => {
    return row.domain.toLowerCase().replace(/\s/g, '');
  })
  const regions = dictionary.map(row => {
    return row.region.toLowerCase().replace(/\s/g, '')
  })
  const domainsAndRegions = [...domains, ...regions]
  let indexOfDups = []
  for (let i = 0; i < domains.length; i++) {
    for (let j = 1 + i; j < domains.length; j++) {
      if (domains[i] === domains[j]) {
        indexOfDups.push(i)
        indexOfDups.push(j)
      }
    }
  }
  // If there are no duplicates then check for chains or cycles
  if (indexOfDups.length < 1) {
    for (let i = 0; i < domainsAndRegions.length; i++) {
      for (let j = 1 + i; j < domainsAndRegions.length; j++) {
        if (domainsAndRegions[i] === domainsAndRegions[j]) {
          indexOfDups.push(i)
        }
      }
    }
  }
  return indexOfDups;
}

