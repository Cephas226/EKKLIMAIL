import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss']
})
export class EmailEditorComponent {
  @ViewChild('editor') editor;
  @Output() valueChange = new EventEmitter();
  content='my text'

  titleName = 'Angular';
  modules = {
    toolbar: [      
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  };

  onContentChanged = (event) =>{
    // console.log(event.html);
    this.valueChange.emit(event.html);
  }
  // public form:FormGroup;
  // public content:AbstractControl;
  // @ViewChild('editor') editor;
  // @Output() valueChange = new EventEmitter();
  
  // modulesBubble = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  //     [
  //       { list: 'ordered' },
  //       { list: 'bullet' },
  //       { indent: '-1' },
  //       { indent: '+1' }
  //     ],
  //     ['link'],
  //     ['clean']
  //   ]
  // };
  // constructor(private _fb:FormBuilder) {
  //   this.form = _fb.group({
  //     'content': ['<div><p>{{toto}}</p></div>', Validators.compose([Validators.required])],
  //   });
  //   this.content = this.form.controls['content'];
  //  }

  // ngOnInit(): void {
 
  // }
  // logChange($event) {
  //    console.log($event);
  //   // this.valueChange.emit($event.content.ops[0]);
  //  }
}
