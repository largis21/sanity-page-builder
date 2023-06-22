import { defineField, defineType } from "sanity";

export default defineType({
    title: "page",
    name: "page",
    type: "document",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string"
        })
    ]
})

