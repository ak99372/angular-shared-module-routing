import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';
import { HelloComponent } from './hello.component';

const HelloRoutes = [
  {
    path: '',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      multi: true,
      useValue: HelloRoutes
    }
  ]
})
export class ModuleA {
  static forChild(): ModuleWithProviders<ModuleB> {
    return {
      ngModule: ModuleA,
      providers: []
    };
  }
}

@NgModule({
  imports: [RouterModule],
  providers: []
})
export class ModuleB {
  static forChild(): ModuleWithProviders<ModuleB> {
    return {
      ngModule: ModuleB,
      providers: [
        {
          provide: ROUTES,
          multi: true,
          useValue: HelloRoutes
        }
      ]
    };
  }
}
