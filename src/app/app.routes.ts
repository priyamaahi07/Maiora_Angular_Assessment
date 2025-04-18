import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComAComponent } from './com-a/com-a.component';
import { ComBComponent } from './com-b/com-b.component';
import { OrderItemComponent } from './order-item/order-item.component';

export const routes: Routes = [
    {
        path: '',
        component: OrderItemComponent
    },
    {
        path: 'a',
        component: ComAComponent
    },
    {
        path: 'b',
        component: ComBComponent
    }
];
