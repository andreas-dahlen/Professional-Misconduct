
export const imgPath = "/Professional-Misconduct/"

export function findImg(img) {
  return img
    ? img.startsWith('https') ? img : imgPath + img
    : `${imgPath}placeholder.png`
}