import CopyToClipboardButton from "./copyText";

export default function IPcopy(props: { className?: string; }) {
  return (
    <div className={"flex-1/5 "+props.className}>
      IP:
      <CopyToClipboardButton textToCopy="neeucraft.ru" className="bg-neutral-950 rounded-xl py-2 px-4 hover:bg-neutral-900 duration-150 active:bg-neutral-700">neeucraft.ru</CopyToClipboardButton>
    </div>
  )
}