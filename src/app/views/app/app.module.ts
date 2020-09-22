import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { WizardsContainersModule } from 'src/app/containers/wizard/wizards.containers.module';
import { TexteditorModule } from 'ng-texteditor';

@NgModule({
  declarations: [BlankPageComponent, AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    WizardsContainersModule,
    TexteditorModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class AppModule { }

