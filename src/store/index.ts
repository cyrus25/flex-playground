import create from "zustand";
import { Node } from "../types/Node.type";
import { generateInitialNodes } from "../helpers/generateInitialNodes";
import { addChildNode } from "../helpers/addChildNode";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GlobalState {
  rootNode: Node;
  addNode: (_id: string) => void;
  selectedNodeId: string | null;
  selectedNodeRef: any;
  setRootNode: (_node: Node) => void;
}

const useStore = create<GlobalState>((set) => ({
  rootNode: generateInitialNodes(),
  setRootNode: (node: any) =>
    set(() => ({
      rootNode: node,
    })),
  selectedNodeRef: null,
  addNode: (id: string) =>
    set((state) => ({
      rootNode: addChildNode(state.rootNode, id),
    })),
  selectedNodeId: null,
}));

mountStoreDevtool("Store", useStore);

export default useStore;
