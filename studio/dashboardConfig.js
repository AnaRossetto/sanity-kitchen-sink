export default {
  widgets: [
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
                  buildHookId: '60c0a4a2fbbcfbe0b0465cdd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kyt5bjg7',
                  apiId: '30b674b0-35cc-49c7-945c-4e3036af5641'
                },
                {
                  buildHookId: '60c0a4a274fe84d6bf7edd07',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d43pau2p',
                  apiId: '2d2bdeee-6bbd-4bb4-a513-9596822163b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AnaRossetto/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d43pau2p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
