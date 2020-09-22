import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WizardComponent as ArcWizardComponent } from 'angular-archwizard';
import { AngularFileUploaderComponent, AngularFileUploaderConfig } from 'angular-file-uploader';
 

@Component({
  selector: 'app-wizard-validation',
  templateUrl: './wizard-validation.component.html',
  styleUrls: ['./wizard-validation.component.css']
})
export class WizardValidationComponent implements OnInit {
  @ViewChild('formStep1') formStep1: NgForm;
  @ViewChild('formStep2') formStep2: NgForm;
  @ViewChild('formStep3') formStep3: NgForm;
  @ViewChild('wizard') wizard: ArcWizardComponent;
  @ViewChild('fileUpload1')
  
  resetUpload3: boolean;
  resetUpload2: boolean;
  posting = false;
  files: File[] = [];
  
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
      url: 'https://slack.com/api/files.upload',
    },
    formatsAllowed: '.jpg,.png,.xlsx',
    multiple: true,
  };
  docUpload(env) {
    console.log(env);
  }
  constructor() { 
  }

  ngOnInit() {

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
 
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  displayEmailVariable($event) {
    console.log($event)
  }
}
