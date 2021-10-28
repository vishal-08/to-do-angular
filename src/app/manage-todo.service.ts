import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageTodoService {

  listsArray:any = []

  constructor(private fb: FormBuilder, private toastr : ToastrService, private _router : Router,  public datepipe: DatePipe) { }

  getList(){
    let temp : any = localStorage.getItem("taskData")
    this.listsArray = JSON.parse(temp) 

    if(this.listsArray === null)
    {
      this.listsArray = []
    }
   
    // for(let i=0; i<this.listsArray.length; i++){
    //   this.listsArray[i].dueDate = this.datepipe.transform(this.listsArray[i].dueDate, 'MM/dd/yyyy')
    // }
    
    // console.log(this.listsArray)
    return this.listsArray
    
  }

  deleteItem(id : any){
    
    let temp : any = localStorage.getItem("taskData")
    this.listsArray = JSON.parse(temp) 
    
    for(let list of this.listsArray){
      if(list.id === id){
        list.status = "DELETED"
        localStorage.setItem("taskData",JSON.stringify(this.listsArray))
      }
    }
    
  }

  onIncomplete(id : any){
    
    let temp : any = localStorage.getItem("taskData")
    this.listsArray = JSON.parse(temp) 
    
    for(let list of this.listsArray){
      if(list.id === id){
        list.status = "TODO"
        localStorage.setItem("taskData",JSON.stringify(this.listsArray))
      }
    }
    
  }

  onEdit(index : any){
    let currentIndex = index
  
 
    this._router.navigate(['edit/',index])
  }

  onMarkComplete(index : any){
    const list = this.getList()
    console.log(list)
    const obj = {
      title : list[index].title,
      detail: list[index].detail,
      createdAt:list[index].createdAt,
      modifiedAt:list[index].modifiedAt,
      dueDate:list[index].dueDate,
      status : "DONE"
    }
    list.splice(index, 1, obj)

    localStorage.setItem("taskData", JSON.stringify(list))
   
     // console.log(list)
  }
 
  today() {
   
    var currentDate = new Date(new Date().getTime());
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    // console.log(this.pickDate.nativeElement)
    console.log(duedate)
    // // dateEl.value = 10/12/2021
    // this.dateEl.nativeElement.value = "10/04/2021"

  }

  tomorrow() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    console.log(duedate)

  }
  nextWeek() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 7);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    console.log(duedate)
  }

  nextMonth() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 30);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    console.log(duedate)
  }
}
