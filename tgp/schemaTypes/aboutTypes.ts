import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Sobre',
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
      name: 'cardTitle1',
      title: 'Titulo do card 1',
      type: 'string',
    }),
    defineField({
      name: 'cardDescription1',
      title: 'Descrição do card 1',
      type: 'string',
    }),
    defineField({
      name: 'cardTitle2',
      title: 'Titulo do card 2',
      type: 'string',
    }),
    defineField({
      name: 'cardDescription2',
      title: 'Descrição do card 2',
      type: 'string',
    }),
    defineField({
      name: 'cardTitle3',
      title: 'Titulo do card 3',
      type: 'string',
    }),
    defineField({
      name: 'cardDescription3',
      title: 'Descrição do card 3',
      type: 'string',
    }),
  ],
})
