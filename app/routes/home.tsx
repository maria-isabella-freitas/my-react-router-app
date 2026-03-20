import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recipe Explorer - Discover World Cuisines" },
    { name: "description", content: "Explore delicious recipes from around the world" },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
      <div className="flex justify-center mt-8">
        <Link
          to="/countries"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
        >
          Explore Recipes by Country
        </Link>
      </div>
    </div>
  );
}
