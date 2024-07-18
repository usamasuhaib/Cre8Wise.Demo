import { ReplaceableComponentsService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { eThemeLeptonXComponents } from '@abp/ng.theme.lepton-x';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-internet-status></abp-internet-status>
  `,
})
export class AppComponent {

  constructor(private replaceableComponents:ReplaceableComponentsService){
    this.replaceableComponents.add({
      component: CustomLayoutComponent,
      key: eThemeLeptonXComponents.ApplicationLayout,
    });
  }
}
