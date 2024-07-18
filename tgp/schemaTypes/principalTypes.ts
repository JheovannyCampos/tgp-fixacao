import {defineField, defineType} from 'sanity'

export const principalType = defineType({
  name: 'Principal',
  title: 'Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'SubTitulo',
      type: 'string',
    }),
  ],
})
