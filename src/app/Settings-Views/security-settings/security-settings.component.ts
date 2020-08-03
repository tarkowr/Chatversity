import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CustomFormValidation } from '../../Core/_models/form-validation'


@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent implements OnInit {

  formValidation = new CustomFormValidation()
  changePassForm: FormGroup
  samePassword = false
  passwordsMatch = false
  noNewInput = false
  noOldInput = false

  submitted = false
  loading = false

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.changePassForm.controls }


  //
  // ─── CHECK IF NEW PASSWORD AND CONFIRM PASSWORD MATCH ──────────────────────────
  //  

  onInputChange() {
    if (this.f.oldPassword.value === this.f.newPassword.value) {
      this.samePassword = true
    } else {
      this.samePassword = false
    }

    if (this.f.newPassword.value === this.f.confirmPassword.value) {
      this.passwordsMatch = true
    } else {
      this.passwordsMatch = false
    }

    if (this.f.newPassword.value === "" || this.f.confirmPassword.value === "") {
      this.noNewInput = true
    }
    else {
      this.noNewInput = false
    }

    if (this.f.oldPassword.value === "") {
      this.noOldInput = true
    }
    else {
      this.noOldInput = false
    }
  }


  //
  // ─── HANDLE CHANGE PASSWORD FORM SUBMISSION ──────────────────────────
  //
  onSubmit() {
    this.submitted = true
    this.loading = true

    if (this.changePassForm.invalid) {
      this.loading = false
      return
    }

    const formData: FormData = new FormData()

    // Append input to form data
    formData.append('oldPassword', this.changePassForm.get('oldPassword').value)
    formData.append('newPassword', this.changePassForm.get('newPassword').value)
    formData.append('confirmPassword', this.changePassForm.get('confirmPassword').value)

    // TODO: Send to Okta and handle response
    }

  ngOnInit() {
    this.changePassForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.compose([
        Validators.required, Validators.pattern(this.formValidation.passwordValidation)
      ])],
      confirmPassword: ['', Validators.required],
    })
  }
}
