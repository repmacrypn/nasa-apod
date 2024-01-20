export const formatDate = (date: Date) => {
  const yyyy = date.getFullYear()
  const mm = date.getMonth() + 1
  const dd = date.getDate()

  return `${yyyy}-${mm}-${dd}`
}
