export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e" || currentElement === "E") {

    }
    else {
    result.push(currentElement)
    }
  }
  return result.join("")
}
export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    currentElement = currentElement.toUpperCase()
    result.push(currentElement) 
  }
  return result.join("")
}
export function aufgabe03 (args) {
  const input = args
  const result = []

  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e" || currentElement === "E") {
      countE++
    }
  }
  return countE
}
export function aufgabe04 (args) {
  let input = args
  const result = []

  let countW = 1

  //es entfernt alle zusätzliche Leertasten oder Abstände
  input = input.replace(/\s\s+/g, ' ')

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
    countW++
    }
  }
  return countW
}
export function aufgabe05 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if ( 91 > currentElement.charCodeAt(0) && currentElement.charCodeAt(0) > 64) {
      return true
    } else {
      
    }
  }
  return false
} 
export function aufgabe06 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    let ascii = currentElement.charCodeAt(0)
    if (0 <= ascii && ascii < 32) {
    return true
    }
    else if (32 < ascii && ascii < 48) {
      return true
    }
    else if (57 < ascii && ascii < 65) {
      return true
    }
    else if (90 < ascii && ascii < 97) {
      return true
    }
    else if (122 < ascii && ascii <= 127) {
      return true
    }
  }
  return false
}
export function aufgabe07 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      if (input[i+1] === "n") {
        if (input[i+2] === "d") {
          return true
        }
      }
    }  
  }
  return false
}
export function aufgabe08 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e") {
      result.push("3")
    }
    else {
    result.push(currentElement)
    }
  }
  return result.join("")
}
  
export function aufgabe09 (args) {
  const input = args
  const result = []

  let len = 0

  for (let i = 0; i < input.length; i++) {
   len++
  }
  if (len === 6) {
  return true
  }
  else {
    return false
  }
}
export function aufgabe10 (args) {
  const input = args

  if (input.length !== 7 ||input[0] !== "#") {
    return false
  }
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (48 <= ascii && ascii <= 57 || 65 <= ascii && ascii <= 70 || 97 <= ascii && ascii <= 102) {
      //Ziffer oder A-F oder a-f
    } else {
      return false
    }
  }
  return true
}
export function aufgabe11 (args) {
  const input = args
  const result = []
  
  if (input.length > 1) {
    //functionguard, he who guards se function
    return null
  }

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    return currentElement.charCodeAt(0)
  }
  return null
}
export function aufgabe12 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
  return -1
}
export function aufgabe13 (args) {
  const input = args
  const result = []
  for (let i = input.length; i >= 0; i--) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
  return -1
}
export function aufgabe14 (args) {
  const input = args;
  let countE = 0;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    if (currentElement === "e") {
      countE++;
    }
    if (countE === 3) {
      return i
    }
  }
  
  if (countE > 2) {
    if (countE === input.length) {
      return 2;
    }
  } else {
  return -1;
  }
}
export function aufgabe15 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      //bricht einen loop ab, wenn es ein leerzeichen liest
      break
    } else {
      result.push(currentElement)
    }
  }
  
  return result.join("")
}
export function aufgabe16 (args) {
  const input = args
  const result = []
  let count$ = 0
  
  //ersetzt alle $ durch ,

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  if (count$ === 0 && currentElement === "$" && i+2 > input.length) {
  result.push("")
  count$++
  }
  else if (currentElement === "$" && count$ === 0) {
  result.push(",")
  count$++
  }
  else {
    result.push(currentElement)
  }
 
}

return result.join("")
}
export function aufgabe17 (args) {
  const input = args
  const result = []
  let countDot = 0
  let list1 = []
  let list2 = []
  let list3 = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      countDot++
    }
    else if(countDot === 0) {
      list1.push(currentElement)
    }
    else if(countDot === 1) {
      list2.push(currentElement)
    }
    else if(countDot === 2) {
      list3.push(currentElement)
    }
      
  }
  return list1.join("") + list2.join("") + list3.join("")
}
export function aufgabe18 (args) {
  const input = args
  let result = ""
  let age = []
  let name = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement.charCodeAt(0) >= 48 && currentElement.charCodeAt(0) <= 57) {
      age.push(currentElement)
    }
    else if (currentElement.charCodeAt(0) >= 97 && currentElement.charCodeAt(0) <= 122 || currentElement.charCodeAt(0) >= 65 && currentElement.charCodeAt(0) <= 90) {
      name.push(currentElement)
    }
    else {

    }
  }
  result = `Sie heissen ${name.join("")} und sind ${age.join("")} Jahre alt.`
  /*result = "Sie heissen " + name.join("") + " und sind " + age.join("") + " Jahre alt."*/
  return result
}
export function aufgabe19 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}
export function aufgabe20 (args) {
  const input = args
  const result = []
  let countDot = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn nach einem kein Leerzeichen folgt, wird false zurückgegeben
    if (currentElement === "." && input[i+1] !== " ") {
      return false
    }
  }
  return true
}
export function aufgabe21 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //die länge der eingabe wird mit der jetztigen position und eins(weil pos. bei 0 anfängt) subtrahiert
    result.push(input[input.length - i - 1])
  }
  return result.join("")
}
export function aufgabe22 (args) {
  const input = args
  const result = []
  let condition = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn "k" gefunden wird, wird die Bedingung auf wahr gesetzt
    if (currentElement === "k") {
      condition = true
    }
    //so lange die Bedingung nicht wahr ist, wird _ eingefügen
    if (condition === true) {
      result.push(currentElement)
    } else {
      result.push("_")
    }
  }
  return result.join("")
}

















export function aufgabe24 (args) {
  const input = args
  const result = []

  if (input.length === 1) {
    return input
  }

  const firstElement = input[0]
  const lastElement = input[input.length-1]

  result.push(lastElement)

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)

  return result.join("")
}
export function aufgabe26 (args) {
  let input = args
  const result = []
  let splitInput = input.split("")
  
  let sortedInput = splitInput.sort()
  input = sortedInput.join("")
  return input

  //bubble sort mit ASCII ist auch möglich das erste geht etwas schneller
  /*for (let i = 0; i < splitInput.length - 1; i++) {
    const currentElement = splitInput[i]
    const nextElement = splitInput[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    const tmp = splitInput[i + 1]
    splitInput[i + 1] = splitInput[i]
    splitInput[i] = tmp
    i = -1
    }
  }
input = splitInput.join("")
return input*/
}