const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    propertyTitle: String,
    description: String,
    propertyType: String,
    propertyTypeID: Number,
    type: { type: Number, enum: [0, 1] },
    price: Number,
    square: Number,
    rooms: Number,
    bathrooms:Number,
    listImages: [String],
    address: String,
    state: String,
    city: String,
    neighborhood: String,
    zip: Number,
    country: String,
    owner:String,
    ownerID:{type : Schema.Types.ObjectId , ref:'User'},
    
  },
  {
    timestamps: true,
  }
);

const propertyModel = mongoose.model("property", propertySchema);

module.exports = propertyModel;
