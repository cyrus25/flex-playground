export default function getUpdatedRootNode(
  node,
  id: string,
  property: string,
  value: string
) {
  if (!node.props.children) {
    return {};
  }

  if (!Array.isArray(node?.props.children)) {
    return { ...node };
  }
  if (node.props.key === id) {
    return {
      ...node,
      props: {
        ...node.props,
        style: {
          ...node.props.style,
          [property]: value,
        },
      },
    };
  }
  const childrenNodes = node.props.children.map((nodeItem) =>
    getUpdatedRootNode(nodeItem, id, property, value)
  );
  return {
    ...node,
    props: {
      ...node.props,
      children: childrenNodes,
    },
  };
}
