import { promises as fs } from "fs"
import YAML from 'yaml'
import Image from "next/image";
import Divider from "../components/divider";

async function getRecipes() {
  const file = await fs.readFile(process.cwd() + '/app/recipes/recipes.yml', 'utf-8')
  const data = await YAML.parse(file).recipes
  const keys = Object.keys(data)
  return( keys.map( (key,index) => data[key]) )
}

export default async function Recipes() {
  const recipes = await getRecipes()
  return (
    <div className="flex flex-col px-20 py-7 not-md:p-3 text-xl not-md:text-lg gap-5">
      <p className="text-3xl not-md:text-2xl">Полный список кастомных рецептов на сервере</p>
      <Divider />
      {recipes.map((recipe,index) => 
        <div key={recipe.name} className="relative flex bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">
          <p className="flex flex-1/2 items-center p-10 justify-center font-bold">{recipe.name}</p>
          <div className="flex relative md:max-h-60 md:min-h-45 min-h-30 flex-1/2 w-fit object-cover">
            <Image src={"/recipes/"+recipe.image+".png"} alt={""} fill className="object-contain object-right relative" />
          </div>
        </div>
      )}
    </div>
  )
}
