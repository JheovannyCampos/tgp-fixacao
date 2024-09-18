import {defineField, defineType} from 'sanity'

export const principalType = defineType({
  name: 'principal',
  title: 'Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
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
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})
