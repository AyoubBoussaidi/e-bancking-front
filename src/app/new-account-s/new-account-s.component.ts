import { Component, OnInit } from '@angular/core';
import {AccountDetails} from "../model/account.model";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {AccountsService} from "../services/accounts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-account-s',
  templateUrl: './new-account-s.component.html',
  styleUrls: ['./new-account-s.component.css']
})
export class NewAccountSComponent implements OnInit {

  newAccountFormGroup! : UntypedFormGroup;
  constructor(private fb : UntypedFormBuilder, private accountService:AccountsService, private router:Router) { }

  ngOnInit(): void {
    this.newAccountFormGroup=this.fb.group({
      balance : this.fb.control(null, [Validators.required, Validators.minLength(2)]),
      customer_id : this.fb.control(null,[Validators.required]),
      intrestRate : this.fb.control(null,[Validators.required])
    });

  }

  handleSaveaccounts() {
    let account:AccountDetails=this.newAccountFormGroup.value;
    this.accountService.saveAccounts(account).subscribe({
      next : data=>{
        alert("Customer has been successfully saved!");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/accounts");
      },
      error : err => {
        console.log(err);
      }
    });
  }

}
