import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  diagonsedWith : { 
    type : string,
    required : true
  },
  address :{
    type : String,
    required : true,
  },
  age : {
    type : Number,
    required : true
  },
  bloodgroup : {
    type : String,
    enum : ['o+','o-','ab+','ab-','a+','a-','b+','b-']
  },
  gender : {
    type : String,
    enum : ['m','f','o'],
    required : true
  },
  admittedIn: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Hospital'
  }
},{timestamps : true})

export const Patient = mongoose.model("Patient",patientSchema);