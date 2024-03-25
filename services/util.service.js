export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  loadFromStorage,
  saveToStorage,
  animateCSS,
  debounce,
  getRelativeTime,
}

function makeId(length = 6) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

// In our utilService
function animateCSS(el, animation) {
  const prefix = 'animate__'
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`

    el.classList.add(`${prefix}animated`, animationName)

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation()
      el.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }
    el.addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function getRelativeTime(timestamp) {
  const now = new Date()
  const targetDate = new Date(timestamp)
  const diff = now - targetDate
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)

  if (seconds < 60) {
    return 'Just now'
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  } else if (hours < 24 && targetDate.getDate() === now.getDate()) {
    return `${targetDate.getHours()}:${(targetDate.getMinutes() < 10 ? '0' : '') + targetDate.getMinutes()
      }`
  } else if (days === 1 && targetDate.getDate() === now.getDate() - 1) {
    return 'Yesterday'
  } else if (days < 7) {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return daysOfWeek[targetDate.getDay()]
  } else if (weeks < 5) {
    return `${targetDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })}`
  } else {
    return targetDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
}
