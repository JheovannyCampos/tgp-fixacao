import {defineField, defineType} from 'sanity'

export const whatsappType = defineType({
  name: 'whatsapp',
  title: 'whatsapp',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'statusMessage',
      title: 'Mensagem de tempo espera',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Mensagem',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Número do whatsapp',
      type: 'string',
    }),
  ],
})
