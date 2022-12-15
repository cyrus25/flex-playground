import React from "react";
import { Listbox } from "@headlessui/react";
import useStore from "../../store";
import getUpdatedRootNode from "../../helpers/getUpdatedRootNode";
import getSelectedNode from "../../helpers/getSelectedNode";
import flexProperties from "../../config/flex-properties";
import CSS from "csstype";

export default function Alignment() {
  const { selectedNodeId, setRootNode, rootNode } = useStore();

  const selectedNode = getSelectedNode(rootNode, selectedNodeId as string);

  const selectedNodeStyles = selectedNode ? selectedNode.props.style : null;

  const alignmentProperties: {
    name: string;
    property: "justifyContent" | "alignItems" | "alignSelf" | "alignContent";
    values: any;
  } = [
    {
      name: "Justify Content",
      property: "justifyContent",
      values: flexProperties.justifyContent,
    },
    {
      name: "Align Items",
      property: "alignItems",
      values: flexProperties.alignItems,
    },
    {
      name: "Align Self",
      property: "alignSelf",
      values: flexProperties.alignSelf,
    },
    {
      name: "Align Content",
      property: "alignContent",
      values: flexProperties.alignContent,
    },
  ];

  if (!selectedNodeId || !selectedNodeStyles) return null;

  return (
    <div className="text-white flex-col space-y-4">
      {alignmentProperties.map((item) => (
        <div>
          <p>{item.name}</p>
          <Listbox
            value="justifyContent"
            onChange={(value) => {
              const updatedNode = getUpdatedRootNode(
                rootNode,
                selectedNodeId,
                item.property,
                value
              );
              setRootNode(updatedNode);
            }}
          >
            <Listbox.Button className="listbox-button">
              {selectedNodeStyles[item.property]}
            </Listbox.Button>
            <Listbox.Options className="listbox-options">
              {item.values.map((value, index) => (
                <Listbox.Option
                  className="listbox-option"
                  key={index}
                  value={value}
                >
                  {value}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      ))}
    </div>
  );
}
