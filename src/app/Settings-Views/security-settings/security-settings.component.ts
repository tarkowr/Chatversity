import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CustomFormValidation } from '../../Core/_models/form-validation'


@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent implements OnInit {

  formValidation = new CustomFormValidation()
  changePassForm: FormGroup
  samePassword = true
  passwordsMatch = false

  submitted = false
  loading = false

  constructor(private formBuilder: FormBuilder) { }

  //
  // ─── CONVENIENCE GETTER FOR EASY ACCESS TO FORM FIELDS ──────────────────────────
  //
  get f() { return this.changePassForm.controls }


  //
  // ─── CHECK IF NEW PASSWORD AND CONFIRM PASSWORD MATCH ──────────────────────────
  //
  onChanges() {
    this.changePassForm.valueChanges.subscribe(val => {

      if (val.oldPassword === val.newPassword) {
        this.samePassword = true
      } else {
        this.samePassword = false
      }

      if (val.newPassword === val.confirmPassword) {
        this.passwordsMatch = true
      } else {
        this.passwordsMatch = false
      }
    })
  }


  //
  // ─── HANDLE CHANGE PASSWORD FORM SUBMISSION ──────────────────────────
  //
  onSubmit() {
    this.submitted = true
    this.loading = true

    // If form is invalid then stop here
    if (this.changePassForm.invalid) {
      this.loading = false
      return
    }

    // Create obj to hold formdata
    const formData: FormData = new FormData()

    // Append input to form data
    formData.append('oldPassword', this.changePassForm.get('oldPassword').value)
    formData.append('newPassword', this.changePassForm.get('newPassword').value)
    formData.append('confirmPassword', this.changePassForm.get('confirmPassword').value)

    // TODO: Send to Okta and handle response
  }

  ngOnInit() {
    // Build change password form
    this.changePassForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.compose([
        Validators.required, Validators.pattern(this.formValidation.passwordValidation)
      ])],
      confirmPassword: ['', Validators.required],
    })

    this.onChanges()
  }
}
