import { pagesStructure } from "./pagesStructure"
import { settingsStructure } from "./settingsStructure"
import { StructureBuilder } from "sanity/desk"

export const structureBuilder = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      pagesStructure(S),
      S.divider(),
      settingsStructure(S),
    ])
