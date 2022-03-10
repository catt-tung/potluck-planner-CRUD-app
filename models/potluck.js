import mongoose from 'mongoose'

const dishSchema = new mongoose.Schema({
  dishName: {type: String},
  guestName: {type: String},
  category: {
    type: String,
    enum: ["Appetizer", "Main", "Dessert", "Drink", "Supplies","Other"],
    default: "Main"
  },
}, {
  timestamps: true
})


const potluckSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "Just for Fun" },
  date: { type: Date, required: true, default: Date.now },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  address: { type: String, required: true, default: "My Place" },
  dishes: [dishSchema]
}, {
  timestamps: true,
})

const Potluck = mongoose.model('Potluck', potluckSchema)

export {
  Potluck
}
