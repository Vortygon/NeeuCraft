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
    <div className="flex flex-col px-20 py-7 not-md:p-0 text-xl gap-5">
      Полный список кастомных рецептов на сервере
      <Divider />
      {recipes.map((recipe,index) => 
        <div key={recipe.name} className="bg-neutral-800 rounded-2xl shadow-xl h-60 overflow-hidden">
          <p className="flex flex-1 h-full items-center p-10">{recipe.name}</p>
          <div className="flex-1 relative h-full w-full object-contain">
            <Image src={"/recipes/"+recipe.image+".png"} alt={""} fill className="object-contain"/>
          </div>
        </div>
      )}
    </div>
  )
}
