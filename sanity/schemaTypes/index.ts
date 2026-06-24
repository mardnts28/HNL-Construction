import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, productType],
}
