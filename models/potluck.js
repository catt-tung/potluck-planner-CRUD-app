import mongoose from 'mongoose'

const dishSchema = new mongoose.Schema({
  dishName: String,
  guestName: String,
  category: {
    type: String,
    enum: ["Appetizer", "Main", "Dessert", "Drink", "Supplies","Other"],
    default: "Main"
  },
}, {
  timestamps: true
})


const potluckSchema = new mongoose.Schema({
  title: { type: String, default: "Potluck" },
  date: { type: Date, default: Date.now },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  address: { type: String, default: "My Place" },
  dishes: [dishSchema]
}, {
  timestamps: true,
})

const Potluck = mongoose.model('Potluck', potluckSchema)

export {
  Potluck
}
