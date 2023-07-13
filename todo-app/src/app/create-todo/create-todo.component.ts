import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  newTodo: Todo = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  constructor(private todoService: TodoService) {}

  createTodo() {
    this.todoService.addTodo({
      ...this.newTodo,
      id: this.todoService.todos.length + 1,
    });
    this.newTodo = {
      id: 0,
      title: '',
      description: '',
      completed: false,
    };
  }
}
