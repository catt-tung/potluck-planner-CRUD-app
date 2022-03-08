import mongoose from 'mongoose'

const potluckSchema = new mongoose.Schema({
  date: Date,
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  address: String,
  guestList: [String],
  dishes: [String],
}, {
  timestamps: true,
})

const Potluck = mongoose.model('Potluck', potluckSchema)

export {
  Potluck
}
