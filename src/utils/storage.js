const getWrapperKey = (key) => {
  return `REACT_H5_TEMPLATE_${key}`
}

export const getItem = (key) => {
  const saveKey = getWrapperKey(key)
  const data = window.localStorage.getItem(saveKey)
  if (data) {
    return JSON.parse(data)
  }
  return undefined
}

export const setItem = (key, data) => {
  const saveKey = getWrapperKey(key)
  const result = JSON.stringify(data)
  window.localStorage.setItem(saveKey, result)
}
