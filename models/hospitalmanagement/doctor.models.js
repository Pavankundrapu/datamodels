import mongoose  from 'mongoose';

const workingSchema = new mongoose.Schema({
  hospital : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Hospital'
  },
  hours : {
    type : String,
  }
})

const doctorSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  salary : {
    type : Number,
    required : true
  },
  Qualification : {
    type : String,
    required : true
  },
  experienceInYears : {
    type : Number,
    default : 0
  },
  worksInHospitals: {
    type : [workingSchema]
  }
  
},{timestamps : true})

export const Doctor = mongoose.model("Doctor",doctorSchema);