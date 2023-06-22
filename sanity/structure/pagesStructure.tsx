import { StructureBuilder } from "sanity/desk";

const

export const pagesStructure = (S: StructureBuilder) =>
  S.listItem()
    .title("Pages")
    .child(
      S.list()
        .title("Pages")
        .items([S.divider()])
    )
