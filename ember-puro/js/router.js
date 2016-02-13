Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    this.route('active');
    this.route('completed');
  });//Maneja un recurso que puede tener hijos (nested)
  this.route('my_route', {path: '/my_route'});//Maneja la redireccion simple
});
