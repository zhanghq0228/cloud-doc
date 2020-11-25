export const flattenArr = (arr:any) => {
  return arr.reduce((map:any, item:any) => {
    map[item.id] = item
    return map
  }, {})
}

export const objToArr = (obj: any) => {
  return Object.keys(obj).map(key => obj[key])
}
