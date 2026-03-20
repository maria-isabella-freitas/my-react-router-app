import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),
    route("/countries/:countryId", "routes/countries.tsx"),
    
] satisfies RouteConfig;
