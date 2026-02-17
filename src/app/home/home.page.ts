import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonContent, IonAvatar, IonBadge, IonSearchbar, 
  IonButton, IonIcon, IonCard, IonCardContent, 
  IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  notificationsOutline, searchOutline, options, calendarOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonAvatar, IonBadge, 
    IonSearchbar, IonButton, IonIcon, IonCard, 
    IonCardContent, IonGrid, IonRow, IonCol
  ],
})
export class HomePage {
  userName = 'Alex Carter';
  notificationCount = 3;

  services = [
    { name: 'Plumber', icon: '🔧', color: '#E3F2FD' },
    { name: 'Electrician', icon: '👨‍🔧', color: '#FFE0B2' },
    { name: 'Carpenter', icon: '👷', color: '#C8E6C9' },
    { name: 'Painter', icon: '🔧', color: '#BBDEFB' },
    { name: 'Mason', icon: '💼', color: '#FFCCBC' },
    { name: 'Welder', icon: '🔧', color: '#C5CAE9' },
    { name: 'Roofer', icon: '🏠', color: '#FFCDD2' },
    { name: 'More', icon: '📱', color: '#BBDEFB' }
  ];

  popularServices = [
    {
      id: 1,
      name: 'Expert Plumbing',
      price: '$45',
      category: 'Plumber',
      rating: 4.8,
      image: 'assets/icon/plumber.webp'
    }
  ];

  constructor(private router: Router) {
    addIcons({ 
      notificationsOutline, searchOutline, options, calendarOutline
    });
  }

  viewAllServices() {
    this.router.navigate(['/tabs/services']);
  }

  viewService(service: any) {
    // Map service name to category name
    const categoryMap: { [key: string]: string } = {
      'Plumber': 'Plumbing',
      'Electrician': 'Electrical',
      'Carpenter': 'Carpentry',
      'Painter': 'Painting',
      'Welder': 'Welding',
      'Mason': 'Masonry',
      'Roofer': 'Roofing',
      'Cleaning': 'Cleaning'
    };
    
    const category = categoryMap[service.name] || service.name;
    this.router.navigate(['/tabs/services'], { queryParams: { category } });
  }

  viewTechnicianDetail(service: any) {
    this.router.navigate(['/technician-detail', service.id]);
  }
}
