import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profileGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [], []),
    password: new FormControl('', [], []),
  })
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  onRegister(): void {
    const email = this.profileGroup.value.email;
    const password = this.profileGroup.value.email;

    this.registerService.login(email, password).subscribe(() => {
      console.log('Success');
    })
  }
}
