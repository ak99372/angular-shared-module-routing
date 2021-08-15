import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildModuleFactory } from './loadModuleWithProviders';
import { ModuleA, ModuleB } from './modules';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'module-a',
        loadChildren: () => new ChildModuleFactory(ModuleA.forChild())
      },
      {
        path: 'module-b',
        loadChildren: () => new ChildModuleFactory(ModuleB.forChild())
      }
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
