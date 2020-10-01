import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {multiCheckboxValidator} from './../custom.validators';
import { Person, DataService } from './data.service';
import { map } from 'rxjs/operators';

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
  myContent= " ";
  people: Person[] = [];
  selectedPeople = [];
  parentVar =[]
  allVar: any;
  chip: any;
  constructor(private dataService: DataService) {

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
    this.dataService.getPeople()
    .pipe(map(x => x.filter(y => !y.disabled)))
    .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id];
    });
     // this.getAllData()
  }

  variableClick(chip){
    console.log(chip)
    if(chip.value){
      this.sharedVarParent=this.myContent+"["+chip.value+"]"
    }
  }

  displayMe(event){
    console.log(event)
  }
  // displayEmailVariable($event) {
  //   this.myContent=$event
  // }
  // getAllData(){
  //   this.allVar=null
  //   this.dataService.getuploadVar().subscribe(u=>{
  //     this.allVar=u
  // //   this.chip.emit(this.allVar)
  //   })
  // }
  onSubmit(){

  }
}

