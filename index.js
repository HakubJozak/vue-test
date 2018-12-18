Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({ 
    el: '#app',

    data: {
        message: 'Hello Vue!',
        read: false,
        buttonTitle: 'Hey!',
        newItem: null,
        validation: null,

        todos: [
            { text: 'Learn JavaScript', id: 0 },
            { text: 'Learn Vue', id: 1 },
            { text: 'Build something awesome', id: 2 }
        ]       
    },

    methods: {
        addItem: function() {
          if (this.newItem) {
              this.todos.push({ text: this.newItem })
          } else {
              this.validation = "Nothing to add"
          }
              
        },

        markRead: function() {
            this.read = !this.read
            this.buttonTitle = "Mark button as "

            if (this.read) {
               this.buttonTitle += 'unread';
            } else {
               this.buttonTitle += 'read';
            }
        }
    }
});



