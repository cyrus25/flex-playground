import useStore from "../../store";
import { Tab } from "@headlessui/react";
import codeGenerator from "../../helpers/codeGenerator";
import React from "react";
import GetCodeModal from "../GetCodeModal";
import { Listbox } from "@headlessui/react";
import getSelectedNode from "../../helpers/getSelectedNode";
import getUpdatedRootNode from "../../helpers/getUpdatedRootNode";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ({ setCodeGen }) {
  const { addNode, selectedNodeId, setRootNode, rootNode } = useStore();

  const selectedNode = selectedNodeId
    ? getSelectedNode(rootNode, selectedNodeId as string)
    : null;

  const selectedNodeStyles = selectedNodeId ? selectedNode.props.style : {};

  const [openModal, setOpenModal] = React.useState(false);
  const [code, setCode] = React.useState("");

  const handleAddNode = () => {
    addNode(selectedNodeId);
  };

  const handleGenerateCode = () => {
    const code = codeGenerator(rootNode);
    console.log(code);
    setCode(
      `import React from "react"
       import { Box, NativeBaseProvider } from "native-base";
       export default function (){
        return (
          <NativeBaseProvider>
            ${code}
          </NativeBaseProvider>
        )
      }
       `
    );
    setOpenModal(true);
  };

  if (!selectedNodeId) return null;

  return (
    <div className=" flex-1 h-full justify-center flex flex-row items-center">
      <GetCodeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        code={code}
      />
      <div className="w-3/4 flex flex-col justify-between  border-solid bg-gray-900 h-[500px]">
        <div>
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Flex
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Alignment
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Layout
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="text-white">
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
                    <Listbox.Button className="mt-1 border-solid border-2 py-2 w-full text-left px-2  border-gray-500">
                      {selectedNodeStyles?.flexDirection ??
                        JSON.stringify(selectedNodeStyles, null, 4)}
                    </Listbox.Button>
                    <Listbox.Options>
                      {["row", "row-reverse", "column", "column-reverse"].map(
                        (value, index) => (
                          <Listbox.Option
                            className={({ active }) =>
                              `relative hover:bg-gray-500 cursor-default select-none py-2 pl-10 pr-4`
                            }
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
              </Tab.Panel>
              <Tab.Panel className="text-white">
                <div>
                  <p>Justify Content</p>
                  <Listbox
                    value="justifyContent"
                    onChange={(value) => {
                      const updatedNode = getUpdatedRootNode(
                        rootNode,
                        selectedNodeId,
                        "justifyContent",
                        value
                      );
                      setRootNode(updatedNode);
                    }}
                  >
                    <Listbox.Button className="mt-1 border-solid border-2 py-2 w-full text-left px-2  border-gray-500">
                      {selectedNodeStyles?.justifyContent}
                    </Listbox.Button>
                    <Listbox.Options>
                      {[
                        "flex-start",
                        "center",
                        "flex-end",
                        "space-between",
                        "space-around",
                        "space-evenly",
                      ].map((value, index) => (
                        <Listbox.Option
                          className="w-full px-2 rounded-md text-white py-1 border-2  text-left  border-gray-500 text-base"
                          key={index}
                          value={value}
                        >
                          {value}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div className="mt-4">
                  <p>Align Items</p>
                  <Listbox
                    value="justifyContent"
                    onChange={(value) => {
                      const updatedNode = getUpdatedRootNode(
                        rootNode,
                        selectedNodeId,
                        "alignItems",
                        value
                      );
                      setRootNode(updatedNode);
                    }}
                  >
                    <Listbox.Button className="mt-1 border-solid border-2 py-2 w-full text-left px-2  border-gray-500">
                      {selectedNodeStyles?.alignItems}
                    </Listbox.Button>
                    <Listbox.Options>
                      {[
                        "flex-start",
                        "flex-end",
                        "stretch",
                        "center",
                        "auto",
                        "space-between",
                        "space-around",
                        "baseline",
                      ].map((value, index) => (
                        <Listbox.Option
                          className="w-full px-2 rounded-md text-white py-1 border-2  text-left  border-gray-500 text-base"
                          key={index}
                          value={value}
                        >
                          {value}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex space-x-5">
          <button
            className="bg-gray-400 py-2 px-5 text-white"
            onClick={handleAddNode}
          >
            Add child node
          </button>
          <button
            className="bg-gray-400 py-2 px-5 text-white"
            onClick={handleGenerateCode}
          >
            Generate code
          </button>
        </div>
      </div>
    </div>
  );
}

`
import React from "react";
`;
