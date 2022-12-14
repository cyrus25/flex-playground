import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function ({ openModal, code, setOpenModal }) {
  console.log("crulbfkalebgakle");
  return (
    <Dialog
      className="relative z-50"
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-xl  rounded overflo-hidden bg-red-500 w-full h-full">
          <Highlight {...defaultProps} code={code} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className + "overflow-x-scroll h-full"}
                style={{ ...style, overflow: "scroll" }}
              >
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
