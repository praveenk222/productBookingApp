import { Component, OnInit ,ViewChildren} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Plugins } from '@capacitor/core';
import { NgOtpInputConfig } from 'ng-otp-input';
import { RegisterService } from 'src/Services/registration-services/register.service';
import { LoadingService } from 'src/Services/services/loading.service';
import { UserData } from 'src/providers/user-data';
const { Clipboard } = Plugins;
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  showLoader!: boolean;
  UserOTP = '';
  isDisabled: boolean = true;
  verficationForm!: FormGroup;
  logindata: any;
  mobileno: any;
  otp:any;
  otpConfig :NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles:{
      'display':'flex'
    },
    containerStyles:{
      'display':'flex'
    },
    inputClass:'each_input',
    containerClass:'all_inputs'
  };
  constructor(private reg: RegisterService, private loadingservice: LoadingService, public dialog: MatDialog,
    private _vf: FormBuilder, private router: Router, private register: RegisterService, private snackBar: MatSnackBar, private userdata: UserData) {
    this.verficationForm = this._vf.group({
      fst: ['', Validators.required],
      scn: ['', Validators.required],
      thrd: ['', Validators.required],
      fth: ['', Validators.required],
      fifth: ['', Validators.required],
      sth: ['', Validators.required]

    })
    this.userdata.getuser().then((res:any) => {
      if (res !== null) {
        // this.logindata = res;
        this.UserOTP = res.OTP;
        this.mobileno = res.MobileNo;
      } else {
        this.snackBar.open('Please Enter mobile No.')
        this.router.navigateByUrl('login')
      }

    })
  }
  btndisabled = false;

  ngOnInit() {
    this.btndisabled = true;

  }
  onInputChange(event: any) {
  }
  async setUserdetails() {

    let datad = await this.getuserbymobileno()
      .then((data: any) => {
        this.UserOTP = data.OTP;
        this.userdata.setNew("loginuser", data)
        console.log('Data received:', data);

      });
  }
  getuserbymobileno(): Promise<any> {
    return this.reg.getbymobileno(this.mobileno).toPromise()
  }


  verifyOTP() {
  
    //  setTimeout(() => {
    //   this.loaderService.display(false);
    // }, 800);
console.log(this.otp)
    // const otpString = `${otp.fst}${otp.scn}${otp.thrd}${otp.fth}${otp.fifth}${otp.sth}`;

    //  console.log(this.logindata.OTP == otpString)
    if (this.UserOTP == this.otp) {

     
      setTimeout(() => {
        this.dialog.closeAll()
     }, 3000)



      this.router.navigate(['/selfie'])
    } else {
      this.snackBar.open("invalid otp");
      // this.router.navigate(['/verification'])

    }



  }
  title = 'otp';
  form!: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  @ViewChildren('formRow') rows: any;
  keyUpEvent(event:any, index:any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
     pos = index - 1 ;
    } else {
     pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
     this.rows._results[pos].nativeElement.focus();
    }
   }
  generateOTP(): string {
    // Generate a random 6-digit number
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
  }
  //resend otp
  resend() {
    
    if (!this.mobileno) {
      this.router.navigateByUrl('/login')

      this.snackBar.open('Please Enter Mobile');
      return
    }
    let data = {
      "mobileno": this.mobileno,
      "otp": "123456"
    }
    data.otp = this.generateOTP();
    this.loadingservice.simpleLoader('Loading..')
    this.reg.resendsms(data).subscribe(
      (res: any) => {

        console.log(res)
        if (res.status) {
          this.loadingservice.dismissLoader();
          let message: string = res.message;
          console.log(message);

          this.snackBar.open(message);
          this.setUserdetails()
        }
        else {
          this.loadingservice.dismissLoader();
        }
      })
  }

handle(event:any){
  this.otp=event;
  console.log(this.otp)
}
}


