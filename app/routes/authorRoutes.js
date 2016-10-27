module.exports = (app) =>{

    let controller = app.controllers.authorsController
   
    app.route('/api/autores')
        .get(controller.listAuthors)
        .post(controller.saveAuthors)      
    app.route('/api/autores/:id')
        .get(controller.getAuthorForId) 
        .delete(controller.deleteAuthorForId) 
}