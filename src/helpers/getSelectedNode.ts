export default function getSelectedNode(node: any, id: string) {
  if (node?.props?.key === id) return node;

  if (!node?.props?.children) {
    return null;
  }

  if (!Array.isArray(node?.props?.children)) {
    return null;
  }

  let selectedNode = null;
  node?.props?.children.map((nodeItem) => {
    const value = getSelectedNode(nodeItem, id);
    console.log("Valuer", value);
    if (value) selectedNode = value;
  });
  return selectedNode;
}
