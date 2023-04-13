import { Animal } from "../models/animal.js"

function index(req, res) {
  Animal.find({})
  .then(animals => {
    res.render('animals/index', {
      animals: animals
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newAnimal(req, res) {
  res.render('animals/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Animal.create(req.body)
  .then(animal => {
    res.redirect('/animals')
  })
  .catch(error => {
    console.log(error);
  })
}

function show(req, res) {
  console.log(req.params.animalId);
  Animal.findById(req.params.animalId)
  .then(animal => {
    console.log(animal);
    res.render('animals/show', {
      animal: animal,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/animals')
  })
}

export {
  index,
  newAnimal as new,
  create,
  show,
}