import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/emergency-ambulance-khammam",
    "/icu-ambulance-khammam",
    "/oxygen-ambulance-khammam",
    "/ventilator-ambulance-khammam",
    "/dead-body-freezer-box-khammam",
    "/interstate-ambulance-khammam",
    "/ambulance-service-mamillagudaem",
    "/ambulance-service-station-road-mayuri-center",
    "/ambulance-service-wyra",
    "/ambulance-service-nelakondapalli",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
