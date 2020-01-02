export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fieldsets: [
      {
        title: 'SEO & metadata',
        name: 'metadata',
      },
    ],
    fields: [
      {
        name: 'eventname',
        type: 'string',
        title: 'Event Name',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Page sections',
        of: [
          { type: 'hero' },
          { type: 'imageSection' },
          { type: 'mailchimp' },
          { type: 'textSection' },
        ],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'This description populates meta-tags on the webpage',
        fieldset: 'metadata',
      },
      {
        name: 'openGraphImage',
        type: 'image',
        title: 'Open Graph Image',
        description: 'Image for sharing previews on Facebook, Twitter etc.',
        fieldset: 'metadata',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'openGraphImage',
      },
    },
  };
  