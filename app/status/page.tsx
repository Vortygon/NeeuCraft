import ServerInfo from "../components/serverStatus"

export default function StatusPage() {
  return(
    <div className="flex">
      <ServerInfo className=" gap-5 text-xl p-5 m-10 bg-neutral-800 rounded-2xl " all />
    </div>
  )
} 