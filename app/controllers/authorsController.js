import sanitize from 'mongo-sanitize'

module.exports = (app) =>{

    var Author  = app.models.author

    var controller = {}


    controller.listAuthors = (req,res)=>{
        Author.find()
        .then(author=>res.json(author))
        .catch(err=> res.status(500).json(err))
    }

    controller.getAuthorForId = (req, res)=>{
        let _id = req.params.id

        Authhor.findById(_id).exec()
        .then(author=>{
            if(!author) throw new Error("Author is not found")
            res.json(autor)
        })
        .catch(erro => res.status(404).json(erro))
    }

    controller.saveAuthors = (req,res) =>{
        
        let _id = req.body.id

        var data = {
            "nome":req.body.nome,
            "email":req.body.email,
            "senha":req.body.senha
        }

        if(_id){
            Author.findByIdAndUpdate(_id, data).exec()
            .then((autor=>res.json(autor)))
            .catch((err => {
                res.status(500).json(err)
                console.log(er)
            }))

        }else{
            Author.create(data)
            .then((author=>res.status(201).json(author)))
            .catch((err => {
                res.status(500).json(err)
                console.log(err)
            }))
        }


    }

    controller.deleteAuthorForId = (req,res) =>{
        let _id = sanitize(req.params.id)
        Author.remove({"_id":_id}).exec()
        .then(()=> res.end())
        .catch(err => console.error(er))
    }


    return controller

}