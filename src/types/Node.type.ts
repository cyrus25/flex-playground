export interface Node {
  type: string;
  props: {
    id?: string;
    key: string;
    style?: object;
    children: Node[] | String;
  };
}
