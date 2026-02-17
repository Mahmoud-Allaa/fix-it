import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonBadge,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, bookmark, bookmarkOutline, star, location, chatbubble, calendar } from 'ionicons/icons';

interface Technician {
  id: number;
  name: string;
  category: string;
  categoryColor: string;
  rating: number;
  reviews: number;
  location: string;
  price: string;
  priceUnit: string;
  image: string;
  bio: string;
  gallery: string[];
  isBookmarked?: boolean;
}

@Component({
  selector: 'app-technician-detail',
  templateUrl: 'technician-detail.page.html',
  styleUrls: ['technician-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonIcon,
    IonBadge,
  ],
})
export class TechnicianDetailPage implements OnInit {
  technician: Technician = {
    id: 1,
    name: 'Daniel Walker',
    category: 'Plumber',
    categoryColor: '#FF7043',
    rating: 4.9,
    reviews: 130,
    location: 'Austin, Texas',
    price: '$45',
    priceUnit: 'per visit',
    image: 'assets/icon/plumber.webp',
    bio: "Hi! I'm a certified plumbing technician. I focus on delivering fast, clean, and dependable solutions for all types of plumbing issues. Your comfort and satisfaction come first.",
    gallery: [
      'assets/icon/gallery1.jpg',
      'assets/icon/gallery2.jpg',
      'assets/icon/gallery3.jpg',
    ],
    isBookmarked: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    addIcons({ arrowBack, bookmark, bookmarkOutline, star, location, chatbubble, calendar });
  }

  ngOnInit() {
    // In a real app, you would fetch technician data based on route params
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Load technician data by id
      console.log('Loading technician with id:', id);
    }
  }

  goBack() {
    this.router.navigate(['/tabs/services']);
  }

  toggleBookmark() {
    this.technician.isBookmarked = !this.technician.isBookmarked;
  }

  viewAllGallery() {
    console.log('View all gallery');
  }

  sendMessage() {
    console.log('Send message to:', this.technician.name);
  }

  bookNow() {
    console.log('Book now:', this.technician.name);
  }
}
