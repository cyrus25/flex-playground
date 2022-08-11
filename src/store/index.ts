import create from "zustand";
import { Node } from "../types/Node.type";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { generateInitialNodes } from "../helpers/generateInitialNodes";
import { addChildNode } from "../helpers/addChildNode";

interface GlobalState {
  rootNode: Node;
  addNode: (node: Node) => void;
  selectedNodeId: string | null;
}

const useStore = create<GlobalState>((set) => ({
  rootNode: generateInitialNodes(),
  addNode: (id: string) =>
    set((state) => ({
      rootNode: addChildNode(state.rootNode, id),
    })),
  selectedNodeId: null,
}));

export default useStore;