import unidecode from "unidecode"

export const convertToSlug = (text: string): string => {
  const unidecodeText = unidecode(text.trim())

  const slug: string = unidecodeText
    .toLowerCase()
    .replace(/\s+/g, "-")          // thay khoảng trắng bằng -
    .replace(/[^a-z0-9\-]/g, "")   // bỏ ký tự đặc biệt
    .replace(/\-+/g, "-")          // gộp nhiều dấu - liên tiếp thành 1
    .replace(/^-+|-+$/g, "")       // bỏ - ở đầu/cuối

  return slug
}