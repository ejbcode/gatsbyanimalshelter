exports.createPages = async ({ actions, graphql, reporter }) => {
  const data = await graphql(`
    {
      allDatoCmsDog {
        nodes {
          slug
        }
      }
    }
  `)

  // console.log(data.data.allDatoCmsDog.nodes)
  if (data.errors) {
    reporter.panic("NO RESULTS", data.errors)
  }

  const dogData = data.data.allDatoCmsDog.nodes

  dogData.forEach(dog => {
    actions.createPage({
      path: dog.slug,
      component: require.resolve(`./src/components/DogTemplate.js`),
      context: { slug: dog.slug },
    })
  })
}
