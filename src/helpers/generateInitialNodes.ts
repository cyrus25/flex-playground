import { addChildNode } from "./addChildNode";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import useStore from "../store";

export const generateInitialNodes = () => {
  const elementRef = React.createRef();
  const key = uuidv4();
  const initialRootNode = {
    type: "div",
    props: {
      key,
      isRootNode: true,
      ref: elementRef,
      onClick: (event: any) => {
        event.stopPropagation();
        console.log("hello");
        console.log(elementRef);
        const domNode: any = elementRef.current;
        domNode.style.borderColor = "blue";
        domNode.style.borderWidth = "3px";
        useStore.setState({ selectedNodeId: key });
      },
      style: {
        width: "500px",
        height: "500px",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        overflow: "hidden",
        borderWidth: "1px",
        borderColor: "white",
      },
      children: [
        {
          type: "div",
          props: {
            key: uuidv4(),
            children: "root",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
        },
      ],
    },
  };

  const finalNodes = [1, 2, 3].map(() =>
    addChildNode(initialRootNode, initialRootNode.props.key)
  );
  return finalNodes[2];

  //   return {
  //     ...initialRootNode,
  //     props: {
  //       ...initialRootNode.props,
  //       children: [...initialRootNode.props.children, ...children],
  //     },
  //   };
};
