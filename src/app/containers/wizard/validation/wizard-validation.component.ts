import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { WizardComponent as ArcWizardComponent } from 'angular-archwizard';
import { AngularFileUploaderComponent, AngularFileUploaderConfig } from 'angular-file-uploader';
import { DataService, Person } from '../../form-validations/reactive-basic/data.service';
import { map } from 'rxjs/internal/operators/map';
//import { MyChipComponent } from '../../form-validations/reactive-basic/reactive-basic.component';
 

@Component({
  selector: 'app-wizard-validation',
  templateUrl: './wizard-validation.component.html',
  styleUrls: ['./wizard-validation.component.css']
})
export class WizardValidationComponent implements OnInit {
  //@ViewChild(MyChipComponent) child;
  @ViewChild('formStep1') formStep1: NgForm;
  @ViewChild('formStep2') formStep2: NgForm;
  @ViewChild('formStep3') formStep3: NgForm;
  @ViewChild('wizard') wizard: ArcWizardComponent;
  @ViewChild('fileUpload1')
  //basicForm: FormGroup;
  message:string;
  resetUpload3: boolean;
  resetUpload2: boolean;
  posting = false;
  sharedVarParent: string;
  myContent= " ";
  value = 'Objet';
  objet:string;
  data: any = {
  
    objet: 20,
    
  };
  files: File[] = [];
 // allVar=[];
  @Input() allVar: any[];
  modulesBubble = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link'],
      ['clean']
    ]
  };
  afuConfig2: AngularFileUploaderConfig = {
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    maxSize: 1,
    uploadAPI: {
      url: 'http://localhost:3000/upload',
    },
    formatsAllowed: '.jpg,.png,.xlsx',
    multiple: true,
  };
  @Output() 
  chip = new EventEmitter()
  people: Person[] = [];
  selectedPeople = [];
  docUpload(env) {
    console.log(env);
    this.getAllData()
  }
  basicForm = new FormGroup({
    objet: new FormControl(''),
    selectedPeople: new FormControl(null, Validators.required),
  });
  constructor(private dataService:DataService,   private fb: FormBuilder) { 
    this.objet='objet';
  }

  ngOnInit() {
   this.displayData()
   this.objet='test'
   this.basicForm = this.fb.group({
    objet: [null, Validators.required],
    selectedPeople:this.selectedPeople
  });
  }
  displayData() {
    this.dataService.getPeople()
    .pipe(map(x => x.filter(y => !y.disabled)))
    .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id];
    });
  }
  onClickSubmit() {
    alert("Cooly");
 }
  getAllData(){
    this.allVar=null
    this.dataService.getuploadVar().subscribe(u=>{
      this.allVar=u
     this.chip.emit(this.allVar)
    })
  }
  onSubmit(){
    console.log(this.basicForm.value)
    console.log(this.sharedVarParent)
  }
  onNextStep1() {
    this.wizard.goToNextStep()
  }
  onNextStep2() {
    this.formStep2.onSubmit(null);
    if (this.formStep2.valid) {
      this.wizard.goToNextStep();
    }
  }
  displayEmailVariable($event) {
    this.myContent=$event
  }
  // getAllData(){
  //   this.allVar=null
  //   this.dataService.getuploadVar().subscribe(u=>{
  //     this.allVar=u
  // //   this.chip.emit(this.allVar)
  //   })
  // }
  
  onNextStep3() {
    this.formStep3.onSubmit(null);
    if (this.formStep3.valid) {
      this.posting = true;
      setTimeout(() => {
        this.posting = false;
      }, 2000);
      this.wizard.goToNextStep();
    }
  }

  variableClick(chip){
    console.log(chip)
    if(chip.value){
      this.sharedVarParent=this.myContent+"["+chip.value+"]"
    }
  }
  // testEmit(event){
  //   console.log(event)
  // };
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  

}
@Component({
  selector: 'my-chip',
  template: `<p>{{message}}</p>`
})
export class MyChipComponent implements OnInit {

  message = 'Hola Mundo!';
  ngOnInit() {
    //console.log(name)
  }
  constructor(private dataService: DataService) {

  }
  }