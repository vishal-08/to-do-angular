import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  taskForm!: FormGroup;
  task: any = {}
    // taskData:any =[]
    // dueDate : Date = new Date("")
    // task:any = {
    //   title : " ",
    //   details : " ",
    //   duedate : this.dueDate
    // }
    // taskModel = new Task("", "", this.dueDate, "todo", "8/08/2021", "09/08/2021")
  // taskData:any =[]
  

  // dueDate : Date = new Date("")
  // task:any = {
  //   title : " ",
  //   details : " ",
  //   duedate : this.dueDate
  // }
  


  // taskModel = new Task("", "", this.dueDate, "todo", "8/08/2021", "09/08/2021")

  constructor(private _router: Router, private fb: FormBuilder) { 
    
  }


  
  ngOnInit(): void {
   this.createTaskForm()
  }

  createTaskForm(){
    this.taskForm =  this.fb.group({
      title: [null, Validators.required],
      detail:[null, Validators.required],
      dueDate :[null, Validators.required]
    })
  }

  onSave(): void{
    
  //   this.taskData.push(this.task)
  //   console.log(this.taskData)
  //   localStorage.setItem('taskData', JSON.stringify(this.taskData))
    
  //  this._router.navigate(['/home'])
    console.log(this.taskForm)
    this.task = Object.assign(this.task, this.taskForm.value)
    this.addtask(this.task)
  }

  addtask(task:any){
    let taskData = []
    if(localStorage.getItem('taskData')){
      taskData = JSON.parse(localStorage.getItem('taskData')!)
      taskData = [task, ...taskData]

    }else{
      taskData = [task]
    }
    localStorage.setItem("taskData",JSON.stringify(taskData))
  }

  
  
  
}
