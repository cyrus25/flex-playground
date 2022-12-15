import useStore from "../../store";
import { Tab } from "@headlessui/react";
import codeGenerator from "../../helpers/codeGenerator";
import React from "react";
import GetCodeModal from "../GetCodeModal";
import getSelectedNode from "../../helpers/getSelectedNode";
import Alignment from "./Alignment";
import Flex from "./Flex";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ({ setCodeGen }) {
  const { addNode, selectedNodeId, rootNode } = useStore();

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
    <div className="flex-1  h-full justify-center flex flex-row items-center">
      <GetCodeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        code={code}
      />
      <div className="w-3/4 flex flex-col justify-between  border-solid bg-gray-900 h-[500px]">
        <div>
          <Tab.Group>
            <Tab.List className="tab-list">
              <Tab
                className={({ selected }) =>
                  classNames("tab", selected ? "tab-selected" : "border-0")
                }
              >
                Flex
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames("tab", selected ? "tab-selected" : "border-0")
                }
              >
                Alignment
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames("tab", selected ? "tab-selected" : "border-0")
                }
              >
                Layout
              </Tab>
            </Tab.List>
            <Tab.Panels className="p-5">
              <Tab.Panel className="relative">
                <Flex />
              </Tab.Panel>
              <Tab.Panel className="relative">
                <Alignment />
              </Tab.Panel>
              <Tab.Panel className="relative">Content 3</Tab.Panel>
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
