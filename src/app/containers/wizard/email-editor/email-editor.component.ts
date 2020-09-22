import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent {
  @ViewChild('editor') editor;
  @Input() sharedVar: string="my text";
  @Output() valueChange = new EventEmitter();
  @Output() sharedVarChange = new EventEmitter();
  content='my text'

  titleName = 'Angular';
  modules = {
    toolbar: [      
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  };
  onChangeVar(newValue) {
    this.sharedVar = newValue;
    this.sharedVarChange.emit(newValue);
  }
  onContentChanged = (event) =>{
    this.content=event.text
    this.valueChange.emit(event.text);
  }
}
