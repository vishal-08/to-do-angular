import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   @ViewChild('rowEl', { static: true }) rowEl!: ElementRef;
  
  listsArray:any = []
  completedTask:any =[]
  completedArray:any=[]

  constructor(private _router: Router, private toastr : ToastrService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getlist()
    console.log(this.listsArray)
  }

  getlist(){
    this.listsArray = JSON.parse(localStorage.getItem('taskData')!)
    this.completedArray = JSON.parse(localStorage.getItem('completedTask')!)
    // console.log(this.rowEl.nativeElement)
    for(let i=0; i<this.listsArray.length; i++){
      this.listsArray[i].dueDate = this.datepipe.transform(this.listsArray[i].dueDate, 'MM/dd/yyyy')
    }
  }

//   function onDelete(index) {
//     noteItem.splice(index, 1)
//     localStorage.setItem("noteItem", JSON.stringify(noteItem))
//     renderNotes()
// }

onDelete(index: any){
  if(window.confirm('Are sure you want to delete this item ?')){
    this.listsArray.splice(index, 1)
  localStorage.setItem("taskData",JSON.stringify(this.listsArray))
  this.toastr.warning("Deleted Successfully")
   }
  
  // this.getlist()
  setTimeout(() => {
    location.reload()
  }, 1000);
  
}


onEdit(index: any){
  let currentIndex = index
  
 
  this._router.navigate(['edit/',index])
}

onComplete(id: number){
  
  const completedObj = this.listsArray[id]
  // console.log(completedObj)
  // console.log(this.listsArray)
  this.completedTask.push(this.listsArray[id])
  // console.log(this.completedTask)
  // this.addCompletedTask(completedObj)


  if(window.confirm('Are sure you want to send it to completed?')){
  // localStorage.setItem("completedTask", JSON.stringify(this.completedTask))
  this.listsArray.splice(id, 1)
  localStorage.setItem("taskData",JSON.stringify(this.listsArray))
  this.addCompletedTask(completedObj)
  
  this.toastr.info("Added to completed Task Successfully")

  setTimeout(() => {
    location.reload()
  }, 1000);
  }
  
}


addCompletedTask(completedObj: any ){
  let compTaks = []
   if(localStorage.getItem('completedTask')){
    compTaks = JSON.parse(localStorage.getItem('completedTask')!)
    compTaks = [completedObj, ...compTaks]

    localStorage.setItem("completedTask",JSON.stringify(compTaks))
  }else{
    compTaks = [completedObj]
    localStorage.setItem("completedTask",JSON.stringify(compTaks))
  }


  
}

key = 'id'
reverse: boolean = false
sortDate(){
  if(this.reverse)
  {
    let newArr = this.listsArray.sort((a:any, b:any) => a.index - b.index)
    this.listsArray = newArr
  }
  else{
    let newArr = this.listsArray.sort((a:any, b:any) => b.index - a.index)
    this.listsArray = newArr
  }
  this.reverse = !this.reverse
}


}
