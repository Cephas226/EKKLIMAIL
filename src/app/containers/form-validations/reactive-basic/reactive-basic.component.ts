import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {multiCheckboxValidator} from './../custom.validators';

@Component({
  selector: 'app-reactive-basic',
  templateUrl: './reactive-basic.component.html'
})
export class ReactiveBasicComponent implements OnInit {
  basicForm: FormGroup;
  fruit: string
  sharedVarParent: string;
  htmlText ="<p>Testing</p>"
  variableMail = new FormArray([]);
  qtd:any[] ;
  myContent: any;
  constructor() {

   }

  ngOnInit() {
    this.basicForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      rank: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      details: new FormControl(null, [Validators.required]),
      radio: new FormControl(null, [Validators.required]),
      checks: new FormGroup({
        check0: new FormControl(false),
        check1: new FormControl(false)
      }, multiCheckboxValidator())
    });

  }
  sendVar(){
    this.sharedVarParent=this.myContent+'[nom_prenom]'
    console.log(this.sharedVarParent)
  }
  onSubmit() {
    // console.log(this.basicForm);
  }
  // logChange($event){
  //   // console.log($event.content.ops[0]);
  // }
  // addVariable() {
  //   this.variableMail.push(new FormControl(''));
  // }
  displayEmailVariable($event) {
    this.myContent=$event
  }
}
