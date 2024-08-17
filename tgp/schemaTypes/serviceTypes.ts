import {defineField, defineType} from 'sanity'

export const serviceTypes = defineType({
  name: 'services',
  title: 'Serviços',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'SubTitulo',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'SubTitulo',
      type: 'string',
    }),
  ],
})
