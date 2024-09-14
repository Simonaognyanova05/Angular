import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  profileGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [], []),
    password: new FormControl('', [], []),
  })
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    this.loginService.login(this.profileGroup.value.email, this.profileGroup.value.password)
    .subscribe(res => {
      console.log('Успешен вход');
    })    
  }
}
