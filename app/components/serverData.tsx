import fetchServerActivity from "./getServerData";

interface ServerInfoProps {
  className?: string,
}

let data = await fetchServerActivity(1)

function Status() {
  return (
    <div>
      <div className="flex-1">
        Статус сервера:
      </div>
      <div className="bg-neutral-700 rounded-xl p-2 px-4 not-md:p-1 flex-1">
        {
          data.online ? 
            <span className="text-green-500">•&nbsp;онлайн</span> :
            <span className="text-red-500">•&nbsp;оффлайн</span>
        }
      </div>
    </div>
  )
}

function Online() {
  return <div>
    <div className="flex-1">
      Игроков онлайн:
    </div>
    {data.online ?
      <div className="bg-neutral-700 rounded-xl p-2 px-4 not-md:p-1 flex-1">
        {data.players.online? data.players.online : data.players.now} / {data.players.max}
      </div> : <></>}
  </div>;
}

export default async function ServerInfo({className}: ServerInfoProps) {
  // console.log(data)

  return (
    <div className={"flex flex-wrap flex-3/5 *:gap-3 flex-row w-full *:items-center *:flex *:w-full *:flex-1 *:md:justify-end "+className}>
      <Status/>
      <Online/>
    </div>
  )
}
