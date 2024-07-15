export function blockScoreFrame(arr, arr2) {
  if (isStrike(arr) === true) {
    return arr[0] + arr[1] + arr2[0] + arr2[1]
  } else if (isSpare(arr) === true) {
    return arr[0] + arr[1] + arr2[0]
  } else {
    return arr[0] + arr[1]
  }
}

export function isSpare(frame) {
  if (frame.length === 2 && frame[0] !== 10 && frame[0] + frame[1] === 10) {
    return true
  } else {
    return false
  }
}

export function isStrike(frame) {
  if (frame[0] === 10) {
    return true
  } else {
    return false
  }
}
