import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSave(){
    this._router.navigate(['/home'])
  }

}
