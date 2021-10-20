import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists : any = []
  
  

  constructor(private _task : TodoService) { }

  ngOnInit(): void {
    
    
  }

  getList(){
    
  }


  
}
