import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("countries", "routes/countries.tsx", [
    index("routes/countries-index.tsx"),
    route(":countryId", "routes/country.tsx", [
      index("routes/country-index.tsx"),
      route("dishes/:dishId", "routes/dish.tsx")
    ])
  ])
] satisfies RouteConfig;
