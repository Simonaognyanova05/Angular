import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  @ViewChild('laptop') laptop!: NgForm;
  constructor() { }

  ngOnInit(): void {
    console.log(this.laptop.value);

  }

  ngAfterViewInit(): void {
  }
  submitHandler(): void{
    console.log(this.laptop.value);

  }

}
