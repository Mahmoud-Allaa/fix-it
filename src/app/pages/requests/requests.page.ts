import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonHeader, IonTitle, IonContent, IonButton, IonIcon,
  IonCard, IonCardContent, IonAvatar, IonBadge, IonChip
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, time, star, chatbubble, close, arrowBack } from 'ionicons/icons';

interface ServiceRequest {
  id: number;
  technicianName: string;
  technicianImage: string;
  serviceName: string;
  category: string;
  date: string;
  time: string;
  status: 'pending' | 'completed' | 'cancelled';
  price: string;
  rating?: number;
}

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonTitle, IonContent, IonButton, 
    IonIcon, IonCard, IonCardContent, IonAvatar, IonBadge, IonChip
  ],
})
export class RequestsPage {
  requests: ServiceRequest[] = [
    {
      id: 1,
      technicianName: 'Daniel Walker',
      technicianImage: 'assets/icon/plumber.webp',
      serviceName: 'Expert Plumbing',
      category: 'Plumber',
      date: 'Feb 18, 2026',
      time: '10:00 AM',
      status: 'pending',
      price: '$45'
    },
    {
      id: 2,
      technicianName: 'John Smith',
      technicianImage: 'assets/icon/plumber.webp',
      serviceName: 'Electrical Repair',
      category: 'Electrician',
      date: 'Feb 15, 2026',
      time: '2:00 PM',
      status: 'completed',
      price: '$60',
      rating: 4.8
    },
    {
      id: 3,
      technicianName: 'Mike Johnson',
      technicianImage: 'assets/icon/plumber.webp',
      serviceName: 'House Cleaning',
      category: 'Cleaner',
      date: 'Feb 12, 2026',
      time: '9:00 AM',
      status: 'cancelled',
      price: '$55'
    }
  ];

  constructor(private router: Router) {
    addIcons({arrowBack,calendar,time,star,chatbubble,close});
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'pending': return '#FF9800';
      case 'completed': return '#4CAF50';
      case 'cancelled': return '#F44336';
      default: return '#666';
    }
  }

  viewTechnician(request: ServiceRequest) {
    this.router.navigate(['/technician-detail', request.id]);
  }

  sendMessage(request: ServiceRequest) {
    console.log('Message:', request.technicianName);
  }

  cancelRequest(request: ServiceRequest) {
    console.log('Cancel request:', request.id);
  }

  goBack() {
    this.router.navigate(['/tabs/home']);
  }
}
