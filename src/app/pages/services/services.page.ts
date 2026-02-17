import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
    IonHeader,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonBadge,
    IonChip
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eye, calendar, star, arrowBack } from 'ionicons/icons';

interface Service {
    id: number;
    name: string;
    price: string;
    rating: number;
    reviews: number;
    category: string;
    categoryColor: string;
    image: string;
    isOnline: boolean;
}

@Component({
    selector: 'app-services',
    templateUrl: 'services.page.html',
    styleUrls: ['services.page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        IonHeader,
        IonTitle,
        IonContent,
        IonButton,
        IonIcon,
        IonCard,
        IonCardContent,
        IonAvatar,
        IonBadge,
        IonChip,
    ],
})
export class ServicesPage implements OnInit {
    selectedCategory = 'All';

    categories = ['All', 'Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Masonry', 'Welding', 'Roofing'];

    services: Service[] = [
        {
            id: 1,
            name: 'Expert Plumbing',
            price: '$45',
            rating: 4.5,
            reviews: 20,
            category: 'Plumber',
            categoryColor: '#FF7043',
            image: 'assets/icon/plumber.webp',
            isOnline: true,
        },
        {
            id: 2,
            name: 'Electrical Services',
            price: '$40/day',
            rating: 4.9,
            reviews: 210,
            category: 'Electrician',
            categoryColor: '#FF7043',
            image: 'assets/icon/plumber.webp',
            isOnline: true,
        },
        {
            id: 3,
            name: 'Deep Home Cleaning',
            price: '$55/session',
            rating: 4.5,
            reviews: 20,
            category: 'Cleaner',
            categoryColor: '#FF7043',
            image: 'assets/icon/plumber.webp',
            isOnline: true,
        },
        {
            id: 4,
            name: 'Furniture Painting',
            price: '$35/day',
            rating: 4.7,
            reviews: 165,
            category: 'Painter',
            categoryColor: '#FF7043',
            image: 'assets/icon/plumber.webp',
            isOnline: true,
        },
    ];

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        addIcons({ arrowBack, star, eye, calendar });
    }

    ngOnInit() {
        // Check for category query param
        this.route.queryParams.subscribe(params => {
            if (params['category']) {
                this.selectedCategory = params['category'];
            }
        });
    }

    goBack() {
        this.router.navigate(['/tabs/home']);
    }

    selectCategory(category: string) {
        this.selectedCategory = category;
    }

    viewProfile(service: Service) {
        this.router.navigate(['/technician-detail', service.id]);
    }

    bookNow(service: Service) {
        console.log('Book now:', service);
    }
}
