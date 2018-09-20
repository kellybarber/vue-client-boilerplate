export const normalizeReposData = ({ data }) => {
  let normalizedData = {
    organization: data.organization,
    repositories: []
  }

  data.organization.repositories.edges.forEach(({ node }) => {
    const { 
      id, 
      url, 
      nameWithOwner: name, 
      primaryLanguage, 
      releases: { edges } 
    } = node

    const language = primaryLanguage !== null ? primaryLanguage.name : ''
    const release = edges[0] !== undefined ? edges[0].node.tag.name : ''

    const repositoryData = { 
      id, 
      name, 
      url, 
      language, 
      release 
    }

    normalizedData.repositories.push(repositoryData)
  })

  return normalizedData
}