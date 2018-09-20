export const getReposQuery = `{
  organization(login: "shopify") {
    name
    url
    repositories(first: 10) {
      edges {
        node {
          nameWithOwner
          url
          primaryLanguage {
            name
          }
          releases(last: 1) {
          	edges {
              node {
                tag {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}`