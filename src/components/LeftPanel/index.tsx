import React from "react";
import useStore from "../../store";

export default function () {
  const { rootNode } = useStore();

  const createReactElements = (node) => {
    console.log("mynode", node);

    if (!node.props.children) {
      console.log("in left jode");
      return null;
    }

    if (!Array.isArray(node.props.children)) {
      console.log("in left node");
      return React.createElement(node.type, {
        ...node.props,
      });
    }

    console.log({ child: node.props.children, root: node });

    const children = node.props.children.map((nodeItem) => {
      return createReactElements(nodeItem);
    });
    return React.createElement(node.type, {
      ...node.props,
      children,
    });
  };

  const tree = createReactElements(rootNode);

  return (
    <div className="justify-center flex-1 h-full flex flex-row items-center">
      {/* <div className="w-[500px] flex border-solid border-2 border-coolGray-200  h-[500px]"> */}
      {tree}
      {/* </div> */}
    </div>
  );
}
