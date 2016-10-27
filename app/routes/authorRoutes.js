module.exports = (app) =>{

    let controller = app.controllers.authorsController
   
    app.route('/api/autores')
        .get(controller.listAuthors)
       
    app.route('/api/autores/:nome/:email')
        .post(controller.saveAuthors)      
    app.route('/api/autores/:id')
        .get(controller.getAuthorForId) 
        .delete(controller.deleteAuthorForId) 
}