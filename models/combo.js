import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
}, {
  timestamps: true
})

const comboSchema = new Schema({
  name: String,
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card'
  }],
  description: String,
  comments:[commentSchema],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
}, {
  timestamps: true
})

const Combo = mongoose.model('Combo', comboSchema)

export {
  Combo
}