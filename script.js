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
  let input = args.toUpperCase()

  if (input.length !== 7 ||input[0] !== "#") {
    return false
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    let ascii = currentElement.charCodeAt(0)

    if (48 <= ascii && ascii <= 57 || 65 <= ascii && ascii <= 70) {
      //Ziffer oder A-F
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
    //functionguard, he who guards the function
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

  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
 }
  return 
}