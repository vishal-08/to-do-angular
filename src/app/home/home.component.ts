import { literalArr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listsArray : any = []
  
  

  constructor(private _task : TodoService, private _router : Router) { }

  ngOnInit(): void {
    this.listsArray = JSON.parse(localStorage.getItem('taskData')!)
    console.log(this.listsArray)
    
  }

  getList(){
    
  }


  
}
