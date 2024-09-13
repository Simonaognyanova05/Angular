import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  operatingSystem: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS',
  ];

  laptopGroup: FormGroup = this.formBuilder.group({
    processor: new FormControl('', [Validators.required, Validators.minLength(4)], []),
    ram: new FormControl(''),
    hardDisk: new FormControl(),
    os: new FormControl()
  })
  constructor(private formBuilder: FormBuilder) { }


  onSubmit(): void{
    console.log(this.laptopGroup.value);
    
  }
  ngOnInit(): void {
  }


}
