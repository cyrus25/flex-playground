import { Node } from "../types/Node.type";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import useStore from "../store";

export const createNode = (parentNode: Node) => {
  const { isRootNode } = parentNode.props;
  const { width, height, flexDirection } = parentNode.props.style;
  console.log("child wiht", { width, isRootNode });
  const elementRef = React.createRef();
  const key = uuidv4();
  return {
    type: "div",
    props: {
      key,
      ref: elementRef,
      onClick: (event) => {
        event.stopPropagation();
        console.log("hello");
        console.log(elementRef);
        const domNode: any = elementRef.current;
        domNode.style.borderColor = "red";
        domNode.style.borderWidth = "3px";
        elementRef?.current?.focus();
        useStore.setState({ selectedNodeId: key });
      },
      style: {
        width: !!isRootNode
          ? "100px"
          : flexDirection === "row"
          ? width / 2
          : width,
        height: !!isRootNode
          ? "100px"
          : flexDirection === "column"
          ? height / 2
          : height,
        display: "flex",
        flexDirection: "row",
        borderWidth: "1px",
        borderColor: "white",
        position: "relative",
      },
      children: [
        {
          type: "div",
          props: {
            key: uuidv4(),
            children: "hello",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              color: "white",
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
        },
      ],
    },
  };
};
