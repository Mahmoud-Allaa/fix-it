import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services/services.page').then((m) => m.ServicesPage),
      },
      {
        path: 'requests',
        loadComponent: () => import('./pages/requests/requests.page').then((m) => m.RequestsPage),
      },
      {
        path: 'tichnitians',
        loadComponent: () => import('./pages/wishlist/wishlist.page').then((m) => m.TichnitiansPage),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'technician-detail/:id',
    loadComponent: () => import('./pages/technician-detail/technician-detail.page').then((m) => m.TechnicianDetailPage),
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
];
