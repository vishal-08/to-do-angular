import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskModel = new Task("grocery", "grocery shopping", "09/08/2021", "todo", "8/08/2021", "09/08/2021")

  constructor() { }

  ngOnInit(): void {
  }

}
