import {defineField, defineType} from 'sanity'

export const insertType = defineType({
  name: 'inserts',
  title: 'Inserts',
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
      name: 'insertTitle1',
      title: 'Texto insert 1',
      type: 'string',
    }),
    defineField({
      name: 'insertSubTitle1',
      title: 'Descrição insert 1',
      type: 'string',
    }),
    defineField({
      name: 'insertImage1',
      title: 'Imagem insert 1',
      type: 'image',
    }),
    defineField({
      name: 'insertTitle2',
      title: 'Texto insert 2',
      type: 'string',
    }),
    defineField({
      name: 'insertSubTitle2',
      title: 'Descrição insert 2',
      type: 'string',
    }),
    defineField({
      name: 'insertImage2',
      title: 'Imagem insert 2',
      type: 'image',
    }),
    defineField({
      name: 'insertTitle3',
      title: 'Texto insert 3',
      type: 'string',
    }),
    defineField({
      name: 'insertSubTitle3',
      title: 'Descrição insert 3',
      type: 'string',
    }),
    defineField({
      name: 'insertImagem3',
      title: 'Imagem insert 3',
      type: 'image',
    }),
  ],
})
