import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  taskForm!: FormGroup;
  tasks:any = []
  task: any = {}
  
  constructor(private _router: Router, private fb: FormBuilder, private toastr : ToastrService) { 
    
  }


  
  ngOnInit(): void {
    
   this.createTaskForm()
  //  this.tasks = JSON.parse(localStorage.getItem('taskData')!)
   console.log(this.tasks)
  }

  createTaskForm(){
    this.taskForm =  this.fb.group({
      title: [null, Validators.required],
      detail:[null, Validators.required],
      dueDate :[null, Validators.required]
    })
  }

  onSave(){
    
    this.tasks = JSON.parse(localStorage.getItem('taskData')! )
    this.tasks = this.tasks || []
    this.tasks.push(this.taskForm.value)
    localStorage.setItem("taskData",JSON.stringify(this.tasks))
     this.addTask(this.task)
    this.toastr.success("Task Added Successfully")
     this._router.navigate(['/home'])
  }

  addTask(task: any){
    let tasks = []
     if(localStorage.getItem('taskData')){
      tasks = JSON.parse(localStorage.getItem('taskData')!)
      tasks = [task, ...tasks]
  
      localStorage.setItem("taskData",JSON.stringify(this.tasks))
    }else{
      tasks = [task]
      localStorage.setItem("taskData",JSON.stringify(this.tasks))
    }

  
    
  }

  
  onCancel(){
      this._router.navigate(['/home'])
  }
  
}
