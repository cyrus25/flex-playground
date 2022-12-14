import { Node } from "../types/Node.type";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import useStore from "../store";

export const createNode = (parentNode: Node) => {
  const { isRootNode } = parentNode.props;
  const { width, height, flexDirection } = parentNode.props.style;
  const elementRef = React.createRef();
  const key = uuidv4();
  return {
    type: "div",
    props: {
      key,
      ref: elementRef,
      onClick: (event: any) => {
        event.stopPropagation();
        const selectedNodeRef = useStore.getState().selectedNodeRef;
        if (selectedNodeRef) {
          const currentSelectedDomNode = selectedNodeRef.current;
          console.log({ currentSelectedDomNode });
          currentSelectedDomNode.style.borderColor = "white";
          currentSelectedDomNode.style.borderWidth = "2px";
        }
        const domNode: any = elementRef.current;
        domNode.style.borderColor = "#475569";
        domNode.style.borderWidth = "3px";
        useStore.setState({ selectedNodeId: key });
        useStore.setState({ selectedNodeRef: elementRef });
      },
      style: {
        flex: !isRootNode ? 1 : null,
        width: !!isRootNode
          ? "100px"
          : flexDirection === "row"
          ? parseInt(width, 10) / 2
          : width,
        height: !!isRootNode
          ? "100px"
          : flexDirection === "column"
          ? parseInt(height, 10) / 2
          : height,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        borderWidth: "1px",
        borderColor: "white",
        position: "relative",
      },
      children: [
        {
          type: "div",
          props: {
            key: uuidv4(),
            children: "",
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
