const FILTER_PROMPT = value => {
  if (value === 0 || value === '0') {
    return '偏低'
  } else if (value === 1 || value === '1') {
    return '正常'
  } else if (value === 2 || value === '2') {
    return '偏高'
  } else {
    return '--'
  }
}

const FILTER_PROMPT_COLOR = value => {
  if (value === 0 || value === '0') {
    return 'low'
  } else if (value === 1 || value === '1') {
    return 'normal'
  } else if (value === 2 || value === '2') {
    return 'high'
  } else {
    return 'abnormal'
  }
}

export {
  FILTER_PROMPT,
  FILTER_PROMPT_COLOR
}
