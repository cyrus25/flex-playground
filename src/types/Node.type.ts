import CSS from "csstype";

export interface Node {
  type: string;
  props: {
    id?: string;
    key: string;
    style: CSS.Properties;
    children: Node[] | String;
    isRootNode?: boolean;
  };
}
