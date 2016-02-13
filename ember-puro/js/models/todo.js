Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
  //owner: DS.belongsTo('user'),
  //tags: DS.hasMany('tags')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: 'hello world',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 },
 {
   id: 4,
   title: 'Hello!',
   isCompleted: false
 }
];
