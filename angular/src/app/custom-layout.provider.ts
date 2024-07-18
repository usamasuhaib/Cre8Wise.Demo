import { APP_INITIALIZER } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

export const CUSTOM_LAYOUT_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureLayoutFn,
    deps: [ReplaceableComponentsService],
    multi: true,
  },
];

export function configureLayoutFn(replaceableComponents: ReplaceableComponentsService) {
  return () => {
    replaceableComponents.add({
      key: 'CustomLayout',
      component: CustomLayoutComponent,
    });
  };
}
