import * as React from "react";
import { Dialog } from "radix-ui";

const BrowserNotSupported = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog.Root onOpenChange={onOpenChange} open={open}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow z-100" />
      <Dialog.Content className="z-100 fixed bg-white left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          浏览器不支持
        </Dialog.Title>
        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
          请直接在现代浏览器中打开 <b>openai.fm</b> 以享受完整的音频体验。
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default BrowserNotSupported;
