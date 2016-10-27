import mongoose from 'mongoose'


module.exports = () =>{

    let author = mongoose.Schema({
        nome:{
            type:String,
            required:true,
            index:{
                unique:true
            }
        },
        email:{
            type:String,
            required:true,
            index:{
                unique:true
            }
        }
    })


    return mongoose.model('Author', author)

    
}