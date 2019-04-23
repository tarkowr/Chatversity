import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent implements OnInit {

  oldPassword = new FormControl('')
  changePassForm: FormGroup;
  samePassword: boolean;
  passwordsMatch: boolean;
  constructor(private formBuilder: FormBuilder) { }

  onChanges() {
    this.changePassForm.valueChanges.subscribe(val => {
      
      if (val.oldPassword === val.newPassword){
        this.samePassword = true
      }
      else{
        this.samePassword = false
      }
      
      if (val.newPassword === val.confirmPassword) {
        this.passwordsMatch = true
      } else {
        this.passwordsMatch = false
      }
    })
  }

  ngOnInit() {
    this.changePassForm = this.formBuilder.group({
      oldPassword: new FormControl ([''], Validators.required),
      newPassword: new FormControl([''], Validators.required),
      confirmPassword: new FormControl([''], Validators.required),
    })

    this.onChanges()
  }

}
