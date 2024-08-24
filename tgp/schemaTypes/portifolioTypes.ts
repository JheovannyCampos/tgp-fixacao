import {defineField, defineType} from 'sanity'

export const portifolioType = defineType({
  name: 'portifolio',
  title: 'Portifólio',
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
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          name: 'title',
          title: 'Titulo',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'string',
        },
        {
          name: 'images',
          title: 'Fotos',
          type: 'array',
          of: [
            {
              name: 'image',
              title: 'Imagem',
              type: 'image',
            },
          ],
        },
      ],
    }),
  ],
})
