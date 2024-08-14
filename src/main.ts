import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./style.css";
import { config, Map as MapSDK } from "@maptiler/sdk";

function init() {
  const container = document.getElementById("map");

  if (!container) throw new Error('There is no div with the id: "map" ');

  config.apiKey = "YOUR API KEY";
  const map = new MapSDK({ container });

  console.log("The map instance", map);
}

init();
