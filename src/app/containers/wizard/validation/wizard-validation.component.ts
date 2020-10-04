 
import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { WizardComponent as ArcWizardComponent } from 'angular-archwizard';
import { AngularFileUploaderComponent, AngularFileUploaderConfig } from 'angular-file-uploader';
import { DataService, Person, EmailContent } from '../../form-validations/reactive-basic/data.service';
 


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
  sharedVarParent= "-";
  sharedVarParentToSend: string;
  myContent= "-";
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
  people=[];
  selectedPeople = [];
  dataTosend:any=[];
  userInfo=[];
  odoo=[]
  docUpload(env) {
    console.log(env);
    this.getAllVarData()
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
   this.basicForm = this.fb.group({
    objet: [null, Validators.required],
    selectedPeople:this.selectedPeople
  });
  }
  // ngAfterViewInit(): void {
  //   this.getAllData()
  // }
  onClickSubmit() {
    alert("Cooly");
 }
  getAllVarData(){
    this.allVar=null
    this.dataService.getuploadVar().subscribe(u=>{
      this.allVar=u
     this.chip.emit(this.allVar)
    })
  }
  getAllData(){
    this.selectedPeople=null
    this.dataService.getuploadData()
    .subscribe((res) => {
        this.people = res;
        // if( this.people){
        //   this.selectedPeople = [this.people];
        // }
        // console.log(this.selectedPeople)
    });

  }
  onSubmit(){
    this.dataService.postEmailContent(
      {
        objet:this.basicForm.value['objet'],
        person:this.basicForm.value['selectedPeople'],
        content:this.sharedVarParent,
    }).subscribe(e=>{
      console.log(e)
    })
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
  // getAllVarData(){
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
    if(chip.value){
      // this.sharedVarParent.replace(/[^]$/,chip.value)
     // this.sharedVarParentToSend=''
    //  this.myContent.replace(/\n|\r/g, "")
     this.sharedVarParent=this.myContent+"["+chip.value+"]"
    // this.sharedVarParent.replace(/^ \n/g, "-").trim()
    //  if(this.sharedVarParent.includes("["+chip.value+"]")){
    //  this.sharedVarParent.replace("["+chip.value+"]",chip.value)  
    //   ///console.log(this.sharedVarParentToSend)
    //  }
  
    // this.sharedVarParent=this.myContent+"["+chip.value+"]"
    // console.log(this.sharedVarParent)
      // 
      // this.sharedVarParentToSend=this.sharedVarParent.replace("["+chip.value+"]",chip.value)
     //  console.log(this.sharedVarParentToSend)

    //  console.log(this.sharedVarParent.replace("[",''))
      // this.sharedVarParent=this.myContent+""+'person.'+chip.value+""
    }
  }
  onSelect(event) {
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

  }
  constructor(private dataService: DataService) {

  }
  }