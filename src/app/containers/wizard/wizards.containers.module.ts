import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ArchwizardModule } from 'angular-archwizard';
import { WizardEndStepComponent } from './end-step/wizard-end-step.component';
import { WizardValidationComponent } from './validation/wizard-validation.component';
import { WizardIconsComponent } from './icons/wizard-icons.component';
import { WizardVerticalComponent } from './vertical/wizard-vertical.component';
import { WizardBasicComponent } from './basic/wizard-basic.component';
import { ComponentsModule } from 'src/app/views/app/ui/components/components.module';
import { TexteditorModule } from 'ng-texteditor';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FormValidationsContainersModule } from '../form-validations/form.validations.containers.module';
import { EmailEditorComponent } from './email-editor/email-editor.component';
import { QuillModule } from 'ngx-quill'
@NgModule({
  declarations: [
    WizardBasicComponent,
    WizardEndStepComponent,
    WizardValidationComponent,
    WizardIconsComponent,
    WizardVerticalComponent,
    // EmailEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModuleAngular,
    TranslateModule,
    TexteditorModule,
    FormValidationsContainersModule,
    AngularFileUploaderModule,
    ComponentsModule,
    ArchwizardModule
  ],
  providers: [],
  exports: [
    WizardBasicComponent,
    WizardEndStepComponent,
    ComponentsModule,
    WizardValidationComponent,
    WizardIconsComponent,
    WizardVerticalComponent
  ]
})

export class WizardsContainersModule { }
