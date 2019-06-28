export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d15c24e4a6ac5b97683433c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7v3pwzfo',
                  apiId: '9dd7e32b-46e7-4b21-a105-6decec9e9e45'
                },
                {
                  buildHookId: '5d15c24eb359da0447a189ff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ket3wtim',
                  apiId: 'd97a0a65-9a08-47ee-bfb9-6f2743f82a67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jpuri/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ket3wtim.netlify.com', category: 'apps'}
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
