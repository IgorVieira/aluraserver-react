import mongoose from 'mongoose'


module.exports = () =>{

    let autor = mongoose.Schema({
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


    return mongoose.model('Autor', autor)

    
}