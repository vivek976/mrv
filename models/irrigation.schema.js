const mongoose=require("mongoose")

const IrrigationSchema=new mongoose.Schema(
    {
        date_of_operation: Date,
        hours_per_irrigation: Number,
        source_of_irrigation: {
            type: String,
            enum: ['Bore Well', 'Open Well', 'Canal', 'Reservoir', 'Lake', 'Farm Pond', 'Tank', 'Other']
          },
          pump_type: {
            type: String,
            enum: ['Electricity Based', 'Diesel Based', 'Solar Based']
          } 
    }
);
const PuddlingNurseryMainSchema = new mongoose.Schema({
    puddling: {
      first: IrrigationSchema, 
      second: IrrigationSchema, 
    },
    nursery_bed: {
      first: IrrigationSchema, 
      second: IrrigationSchema, 
    },
    main_field: {
      first: IrrigationSchema, 
      second: IrrigationSchema, 
      third: IrrigationSchema, 
      fourth: IrrigationSchema,
    },
  });
  const schema=new mongoose.Schema({
    transplanting_days_under_submerged_conditions:
    {
        type:Number,
        required:true
    },
    controlled_irrigation_facilities_available:
    {
        type:Boolean,
        required:true
    },
    controlled_drainage_facilities_available:
    {
        type:Boolean,
        required:true
    },
    table_data: PuddlingNurseryMainSchema
    
});
module.exports=mongoose.model("irrigation",schema)