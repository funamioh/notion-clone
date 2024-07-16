import { nanoid } from "nanoid"
import { Page } from "./types"

export const createPage = () => {
  const slug = nanoid()
  const id = nanoid()

  const page: Page = {
    title: "untitled",
    id,
    slug,
    nodes: [],
    cover: "coding_duck.jpeg"
  }
  return page
}
