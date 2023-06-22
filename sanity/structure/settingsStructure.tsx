import { StructureBuilder } from "sanity/desk"

export const settingsStructure = (S: StructureBuilder) =>
  S.listItem()
    .title("Settings")
    .child(
      S.list()
        .title("Settings")
        .items([S.divider()])
    )
