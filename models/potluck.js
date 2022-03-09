import mongoose from 'mongoose'

const dishSchema = new mongoose.Schema({
  dishName: String,
  guestName: String,
  category: {
    type: String,
    enum: ["Appetizer", "Main", "Dessert", "Drink", "Supplies","Other"]
  },
}, {
  timestamps: true
})


const potluckSchema = new mongoose.Schema({
  title: String,
  date: Date,
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  address: String,
  dishes: [dishSchema]
}, {
  timestamps: true,
})

const Potluck = mongoose.model('Potluck', potluckSchema)

export {
  Potluck
}
