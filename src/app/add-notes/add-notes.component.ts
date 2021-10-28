import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseTwoDigitYear } from 'ngx-bootstrap/chronos/units/year';
import { ToastrService } from 'ngx-toastr';
import { ManageTodoService } from '../manage-todo.service';

import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  @ViewChild('pickDate', { static: true })
  pickDate!: ElementRef;
  // @ViewChild('detail')  detail!: ElementRef

  taskForm!: FormGroup;
  tasks: any = []
  task: any = {}
  list : any = []


  constructor(private _managetodo :ManageTodoService,  private _router: Router, private fb: FormBuilder, private toastr: ToastrService, private element: ElementRef, public datepipe: DatePipe) {

  }



  ngOnInit(): void {

    this.createTaskForm()
    
    
    console.log(window.Date().slice(4, 15))
  }

  createTaskForm() {
    this.list = this._managetodo.getList()
    this.taskForm = this.fb.group({
      
      title: [null, Validators.required],
      detail: [null, [Validators.required, Validators.minLength(10)]],
      dueDate: [null, Validators.required],
      createdAt : new Date(),
      status : 'TODO',
      modifiedAt : [null],
      id : (this.list.length) + 1
    })
  }

  onSave() {

    this.tasks = this._managetodo.getList()
    this.tasks = this.tasks || []
    this.tasks.push(this.taskForm.value)
    localStorage.setItem("taskData", JSON.stringify(this.tasks))
    this.addTask(this.task)
    this.toastr.success("Task Added Successfully")
    this._router.navigate(['/home'])
  }

  addTask(task: any) {
    let tasks = []
    if (localStorage.getItem('taskData')) {
      tasks = this._managetodo.getList()
      tasks = [task, ...tasks]

      localStorage.setItem("taskData", JSON.stringify(this.tasks))
    } else {
      tasks = [task]
      localStorage.setItem("taskData", JSON.stringify(this.tasks))
    }



  }


  onCancel() {
    this._router.navigate(['/home'])
  }
  today() {
    const latestDate  = this._managetodo.today()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })
  }

  tomorrow() {
    const latestDate  = this._managetodo.tomorrow()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })

  }
  nextWeek() {
    const latestDate  = this._managetodo.nextWeek()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })
  }

  nextMonth() {
    const latestDate  = this._managetodo.nextMonth()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })
  }


}
