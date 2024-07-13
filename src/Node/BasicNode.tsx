import { NodeData } from "../utils/types"
import styles from "./Node.module.css"
import { useRef, useEffect } from "react"

type BasicNodeProps = {
  node: NodeData;
  updateFocusedIndex(index:number): void;
  isFocused: boolean;
  index: number;
  addNode(node: NodeData, index: number): void;
  removeNodeByIndex(index: number): void;
  changeNodeValue(index: number, value: string): void;
}

export const BasicNode = ({
  node,
  updateFocusedIndex,
  isFocused,
  index,
  addNode,
  removeNodeByIndex,
  changeNodeValue
}: BasicNodeProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isFocused) {
      nodeRef.current?.focus()
    } else {
      nodeRef.current?.blur()
    }
  }, [isFocused])

  useEffect(() => {
    if (nodeRef.current && !isFocused) {
      nodeRef.current.textContent = node.value;
    }
  }, [node])

  const handleInput: FormEventHandler<HTMLDivElement> = ({currentTarget}) => {
    const { textContent } = currentTarget;
    changeNodeValue(index, textContent || "");
  }

const handleClick = () => {
  updateFocusedIndex(index)
}

  return
    <div
    onInput={handleInput}
    ref={nodeRef}
    contentEditable
    suppressContentEditableWarning
    />
  )
}
