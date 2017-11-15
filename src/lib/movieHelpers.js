export const filterItems = (words, index, letter) => {
  return words.filter(word => word.charAt(index) === letter)
}
