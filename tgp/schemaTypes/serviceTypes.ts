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
      name: 'info1',
      title: 'Informação 1',
      type: 'string',
    }),
    defineField({
      name: 'description1',
      title: 'Descrição 1',
      type: 'string',
    }),
    defineField({
      name: 'info2',
      title: 'Informação 2',
      type: 'string',
    }),
    defineField({
      name: 'description2',
      title: 'Descrição 2',
      type: 'string',
    }),
    defineField({
      name: 'info3',
      title: 'Informação 3',
      type: 'string',
    }),
    defineField({
      name: 'description3',
      title: 'Descrição 3',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})
