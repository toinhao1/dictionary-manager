
// loop through the array of objects checking whether there are any duplicate domains if there
// are then return the index of that object within the array 
// so we can target the row to show an error
export const consistencyChecker = (dictionary) => {

  const domains = dictionary.map(row => {
    return row.domain.toLowerCase().replace(/\s/g, '');
  })
  let indexOfDups = []
  for (let i = 0; i < domains.length; i++) {
    for (let j = 1 + i; j < domains.length; j++) {
      if (domains[i] === domains[j]) {
        indexOfDups.push(i)
      }
    }
  }
  // if (indexOfDups.length > 1) {
  //   const displayMessage = indexOfDups.map(dup => dup + 1)
  //   alert(`You have duplicate erros on rows where the domain is ${displayMessage}`)
  // }
  return indexOfDups;
}

