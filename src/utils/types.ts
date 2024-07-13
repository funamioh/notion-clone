// types of content nodes which can be used on a page
export type NodeType = "text" | "image" | "list" | "page" | "heading1" | "heading2" | "heading3"

export type NodeData = {
  id: string;
  type: NodeType;
  value: string;
}

// single page which contains multiple nodes and additional metadata.
export type Page = {
  id: string;
  slug: string;
  title: string;
  nodes: NodeData[];
  cover: string;
}
