function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return katzDeliLine.length + 1
}

function nowServing(katzDeliLine) {
  if katzDeliLine.length > 0 {
    return katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if katzDeliLine.length == 0 {
    return "The line is currently empty."
  }

  let line = "The line is currently: "

  for (let i = 0; i < katzDeliLine.length; i++) {
    line += katzDeliLine[i]
    if i + 1 < katzDeliLine.length {
      line += ", "
    }
  }
  return line
}