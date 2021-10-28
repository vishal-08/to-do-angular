import { literalArr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ManageTaskService } from '../manage-task.service';
import { ManageTodoService } from '../manage-todo.service';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  listsArray : any =[]
  completeArray: any =[]

  constructor(private _task : ManageTaskService, private _router : Router, private _managetodo : ManageTodoService) { }

  ngOnInit(): void {
   
    this.listsArray = this._task.manageInComplete()
    //  console.log(this.listsArray)
    // console.log(this._task.manageComplete())
     this.completeArray = this._task.manageComplete()
    
  }

  
}
