import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { AuthService } from '@app/core/services/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string
  loginForm: FormGroup
  isLoading = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authenticationService: AuthService) {
    this.createForm()
  }

  ngOnInit() { }

  async login() {
    this.isLoading = true
    await this.authenticationService.login(this.loginForm.value)

    this.router.navigate([ '/'], { replaceUrl: true })
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    })
  }
}
