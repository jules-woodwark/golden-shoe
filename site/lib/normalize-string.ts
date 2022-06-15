export const normalizeString = (value: string) => {
  //  remove whitespace, spaces and convert to lowercase
  const newStoreValue = value.trim().replace(/\s/g, '').toLocaleLowerCase()
  return newStoreValue
}
