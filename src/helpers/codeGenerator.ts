import nbComponentMap from "../config/nbComponentMap";
import { Node } from "../types/Node.type";

export default function codeGenerator(rootNode: Node) {
  if (!rootNode.props.children) {
    return;
  }

  if (!Array.isArray(rootNode?.props.children)) {
    return;
  }

  const childrenJsx = rootNode.props.children
    .map((node) => {
      return codeGenerator(node);
    })
    .filter((jsx) => jsx);
  console.log("children jsx", childrenJsx);
  const styles = rootNode.props.style;
  const elementType = rootNode.type;
  let stylesString = "";
  Object.keys(styles).map(
    (key) => (stylesString += ` ${key}="${styles[key]}"`)
  );
  const currentJsx =
    "\n" +
    `<` +
    nbComponentMap[elementType] +
    stylesString +
    `>` +
    childrenJsx.map((jsx: string) => jsx).join("") +
    `</` +
    nbComponentMap[elementType] +
    ">";
  return currentJsx;
}
