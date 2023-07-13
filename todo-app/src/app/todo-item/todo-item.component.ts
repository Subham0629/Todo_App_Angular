import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = { id: 0, title: '', description: '', completed: false };

  constructor(private todoService: TodoService) {}

  toggleCompletion() {
    this.todoService.toggleTodoCompletion(this.todo);
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo);
  }
}
