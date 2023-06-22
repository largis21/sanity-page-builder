import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema/index'
import { structureBuilder } from './sanity/structure/structureBuilder'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
        structure: (S) => structureBuilder(S)
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
