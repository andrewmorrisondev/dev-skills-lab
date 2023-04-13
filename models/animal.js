import mongoose from 'mongoose'

const Schema = mongoose.Schema

const animalSchema = new Schema({
  name: String,
  says: String,
})

const Animal = mongoose.model('Animal', animalSchema)

export {
  Animal
}
