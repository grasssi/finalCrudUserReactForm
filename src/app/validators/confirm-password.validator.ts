import { FormGroup } from "@angular/forms";
export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    // console.log('pasword=', control.value);
    // console.log('RePasword=', matchingControl.value);
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ ConfirmPasswordValidator: true });
      console.log('err1=', matchingControl.setErrors);
    } else {
      console.log('err2   =', matchingControl.setErrors);
      matchingControl.setErrors(null);
    }
  }
}
