const mongoose=require("mongoose")
const glassSchema = mongoose.Schema(
    {
      color: { type: String, required: true },
      size: { type: Number, required: true },
      material: { type: String, required: true },
      brand: { type: String, required: true }
    },
    { versionKey: false }
  );
  
  //model for
  const GlassModel = mongoose.model("glass", glassSchema); //(first argument is name of the collection, second is schema)
  //TODO:collection name should be every singular
module.exports = GlassModel;  