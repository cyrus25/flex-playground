import React from "react";
import { Listbox, Tab } from "@headlessui/react";
import useStore from "../../store";
import getUpdatedRootNode from "../../helpers/getUpdatedRootNode";
import getSelectedNode from "../../helpers/getSelectedNode";
import flexProperties from "../../config/flex-properties";

export default function Flex() {
  const { selectedNodeId, setRootNode, rootNode } = useStore();

  const selectedNode = selectedNodeId
    ? getSelectedNode(rootNode, selectedNodeId as string)
    : null;

  const selectedNodeStyles = selectedNodeId ? selectedNode.props.style : {};

  return (
    <div className="text-white flex-col space-y-5">
      <div>
        <p>Direction</p>
        <Tab.Group
          defaultIndex={parseInt(
            flexProperties.direction.find(
              (item) => item === selectedNodeStyles?.direction
            ) ?? "0",
            10
          )}
          onChange={(value) => {
            alert(value);
            console.log("dzlkgnzlgn", value);
            // const updatedNode = getUpdatedRootNode(
            //   rootNode,
            //   selectedNodeId,
            //   "direction",
            //   value
            // );
            // setRootNode(updatedNode);
          }}
        >
          <Tab.List className="flex mt-2">
            {flexProperties.direction.map((item, index) => (
              <p
                key={index}
                className="flex-1 border-2 py-1 text-center border-gray-400 border-solid"
              >
                {item}
              </p>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
      <div>
        <p>Flex Direction</p>
        <Listbox
          value="flex"
          onChange={(value) => {
            const updatedNode = getUpdatedRootNode(
              rootNode,
              selectedNodeId,
              "flexDirection",
              value
            );
            setRootNode(updatedNode);
          }}
        >
          <Listbox.Button className="listbox-button">
            {selectedNodeStyles?.flexDirection ??
              JSON.stringify(selectedNodeStyles, null, 4)}
          </Listbox.Button>
          <Listbox.Options className="listbox-options">
            {["row", "row-reverse", "column", "column-reverse"].map(
              (value, index) => (
                <Listbox.Option
                  className="listbox-option"
                  key={index}
                  value={value}
                >
                  {value}
                </Listbox.Option>
              )
            )}
          </Listbox.Options>
        </Listbox>
      </div>
      <div>
        <p>Flex Wrap</p>
        <Tab.Group>
          <Tab.List className="flex mt-2">
            {flexProperties.flexWrap.map((item, index) => (
              <p
                key={index}
                className="flex-1 border-2 py-1 text-center border-gray-400 border-solid"
              >
                {item}
              </p>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
}
