import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";
import {AccountsService} from "../services/accounts.service";
import {Customer} from "../model/customer.model";
import {AccountDetails} from "../model/account.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  newAccountFormGroup! : UntypedFormGroup;
  constructor(private fb : UntypedFormBuilder, private accountService:AccountsService, private router:Router) { }

  ngOnInit(): void {
    this.newAccountFormGroup=this.fb.group({
      balance : this.fb.control(null, [Validators.required, Validators.minLength(2)]),
      customer_id : this.fb.control(null,[Validators.required]),
      overDraft : this.fb.control(null,[Validators.required])
    });
  }

  handleSaveaccount() {
    let account:AccountDetails=this.newAccountFormGroup.value;
    this.accountService.saveAccount(account).subscribe({
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
