module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get('db')
    const { title, image_url, description, ingredients } = req.body

    dbInstance.create_recipe([title, image_url, description, ingredients]).then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },

  delete: (req, res) => {
    const dbInstance = req.app.get('db')
    const { id } = req.params

    dbInstance.delete_recipe(id).then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },

  update: (req, res) => {
    const dbInstance = req.app.get('db')
    const { paramsm, query } = req

    dbInstance.edit_recipe([params.id, query.desc]).then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },

  find: (req, res) => {
    const dbInstance = req.app.get('db')
    const { id } = req.params

    dbInstance.find_recipe(id).then(() => res.sendStatus(200).send(recipe))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },

  display: (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.display_recipes().then(() => res.sendStatus(200).send(recipes))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  }
}