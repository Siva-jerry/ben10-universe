import { originalAliens } from "./originalAliens";
import { alienForceAliens } from "./alienForceAliens";
import { ultimateAliens } from "./ultimateAliens";
import { omniverseAliens } from "./omniverseAliens";

export const allTransformations = [

  ...originalAliens.map(alien => ({
    ...alien,
    era: "Classic"
  })),

  ...alienForceAliens.map(alien => ({
    ...alien,
    era: "Alien Force"
  })),

  ...ultimateAliens.map(alien => ({
    ...alien,
    era: "Ultimate"
  })),

  ...omniverseAliens.map(alien => ({
    ...alien,
    era: "Omniverse"
  }))

];