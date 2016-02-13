Todos.TodosRoute = Ember.Route.extend({
  beforeModel: function() {},
  model: function() {
    return this.store.find('todo');
  },
  afterModel: function() {},
  setupController: function(controller, model) {
    this._super(controller, model)
  }
});
