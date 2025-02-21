const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hari245689:%40111Hariom@cluster0.rxkc6.mongodb.net/Paytm");


const userSchema=mongoose.Schema({
   username:String,
   password:String,
   firstName:String,
   lastName:String

})
 
 const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});
const User =mongoose.model('payments',userSchema);
const Account = mongoose.model('Account', accountSchema);


module.exports={
    User,
    Account
}