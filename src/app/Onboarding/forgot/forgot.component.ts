import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CustomFormValidation } from '../../Core/_models/form-validation'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  appTitle = 'Forgot Password'
  formValidation: CustomFormValidation = new CustomFormValidation()

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.compose([ Validators.required, Validators.email,
        Validators.pattern(this.formValidation.regularEmailValidation)])]
    })

    this.returnUrl = '/'
  }

  get f() { return this.forgotForm.controls }

  onSubmit() {
    this.submitted = true
    this.loading = true

    if (this.forgotForm.invalid) {
      this.loading = false
      return
    }

    const formData: FormData = new FormData()
    formData.append('username', this.forgotForm.get('email').value)

    this.loading = false
  }
}
