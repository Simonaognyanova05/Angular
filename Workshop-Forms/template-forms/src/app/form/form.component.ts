import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('profile') profile!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  submitHandler(): void{
    console.log(this.profile.value);
  }
}
