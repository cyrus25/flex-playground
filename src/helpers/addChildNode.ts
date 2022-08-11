import { v4 as uuidv4 } from "uuid";
import { Node } from "../types/Node.type";
import { createNode } from "./createNode";
export const addChildNode = (rootNode: Node, parentId: string) => {
  if (rootNode.props.key === parentId) {
    console.log("root");

    //  return createNode(rootNode);

    return {
      ...rootNode,
      props: {
        ...rootNode.props,
        children: [...rootNode.props.children, createNode(rootNode)],
      },
    };
  }

  if (!Array.isArray(rootNode.props.children)) return rootNode;

  const children = rootNode.props.children.map((item) =>
    addChildNode(item, parentId)
  );
  return {
    ...rootNode,
    props: {
      ...rootNode.props,
      children,
    },
  };
};
