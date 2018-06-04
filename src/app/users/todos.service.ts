import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ITodo} from './todo';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }
  updateTodo() {
  }

  deleteTodo(todo: ITodo) {
    return this.http.delete("http://angular2api2.azurewebsites.net/api/internships/" + todo._id);
  }

  createTodo(todo: ITodo) {
    return this.http.post("http://angular2api2.azurewebsites.net/api/internships", todo);
  }

  getUsers() {
    return this.http.get("http://angular2api1.azurewebsites.net/api/internships/getall");
  }

}