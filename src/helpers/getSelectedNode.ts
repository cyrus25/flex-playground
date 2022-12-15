import { Node } from "../types/Node.type";

export default function getSelectedNode(node: Node, id: string): Node | null {
  if (node?.props?.key === id) return node;

  if (!node?.props?.children) {
    return null;
  }

  if (!Array.isArray(node?.props?.children)) {
    return null;
  }
  const selectedNode = node.props.children.find((nodeItem: Node) => {
    return getSelectedNode(nodeItem, id);
  });
  return selectedNode as Node | null;
}
