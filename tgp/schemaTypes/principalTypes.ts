import {defineField, defineType} from 'sanity'

export const principalType = defineType({
  name: 'principal',
  title: 'Principal',
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
      name: 'image1',
      title: 'Imagem carrossel 1',
      type: 'image',
    }),
    defineField({
      name: 'image2',
      title: 'Imagem carrossel 2',
      type: 'image',
    }),
    defineField({
      name: 'image3',
      title: 'Imagem carrossel 3',
      type: 'image',
    }),
    defineField({
      name: 'image4',
      title: 'Imagem carrossel 4',
      type: 'image',
    }),
    defineField({
      name: 'image5',
      title: 'Imagem carrossel 5',
      type: 'image',
    }),
  ],
})
