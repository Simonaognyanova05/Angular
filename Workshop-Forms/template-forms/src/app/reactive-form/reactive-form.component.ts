import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  profileGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', [], []),
    password: new FormControl('', [], []),
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.profileGroup.value);
    
  }
}
