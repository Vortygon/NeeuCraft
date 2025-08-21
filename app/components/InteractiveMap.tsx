export default function InteractiveMap(props: { className?: string }) {
  return (
    <iframe src="https://neeucraft.dynmap.xyz" className={`!p-0 w-full h-150 ${props.className}`} />
  )
}
