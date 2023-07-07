import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartRouteComponent } from './cart-route/cart-route.component';
import { SharedUiModule } from '@store/shared/ui';

@NgModule({
  declarations: [CartRouteComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartRouteComponent,
      },
    ]),
  ],
})
export class CartModule {}
