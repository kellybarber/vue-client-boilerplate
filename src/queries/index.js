// export const getReposQuery = `{
//   organization(login: "shopify") {
//     name
//     url
//     repositories(first: 10) {
//       edges {
//         node {
//           id
//           nameWithOwner
//           url
//           primaryLanguage {
//             name
//           }
//           releases(last: 1) {
//           	edges {
//               node {
//                 tag {
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`

export const getReposQuery = `
query ($organization: String!) {
  organization(login: $organization) {
    name
    url
    repositories(first: 10) {
      edges {
        node {
          id
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