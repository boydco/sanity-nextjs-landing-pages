export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0e2b81ea74d1695eaba831',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-moivz3bi',
                  apiId: '73c46f94-9a5b-4e76-bacc-ac0095128522'
                },
                {
                  buildHookId: '5e0e2b814b473741f3eef6fe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vfojxh7q',
                  apiId: '171f6c7a-6d08-4939-8d7f-2ddab46e057c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/boydco/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vfojxh7q.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
