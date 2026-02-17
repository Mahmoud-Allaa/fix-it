import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
    IonHeader, IonTitle, IonContent, IonButton, IonIcon,
    IonList, IonItem, IonLabel, IonAvatar, IonCard, IonCardContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    person, mail, call, locationOutline,
    chevronForward, notifications, card,
    helpCircle, settings, logOut,
    camera, calendar, heart, star, arrowBack } from 'ionicons/icons';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss'],
    standalone: true,
    imports: [
        CommonModule, IonHeader, IonTitle, IonContent, IonButton,
        IonIcon, IonList, IonItem, IonLabel, IonAvatar, IonCard, IonCardContent
    ],
})
export class ProfilePage {
    user = {
        name: 'Mahmoud Alaa',
        email: 'mahmoud.alaa@example.com',
        phone: '+20 123 456 7890',
        location: 'Cairo, Egypt',
        avatar: 'assets/icon/plumber.webp',
        joinedDate: 'January 2026'
    };

    statistics = [
        { label: 'Bookings', value: '12', icon: 'calendar' },
        { label: 'Favorites', value: '8', icon: 'heart' },
        { label: 'Reviews', value: '5', icon: 'star' }
    ];

    menuItems = [
        { icon: 'person', label: 'Edit Profile', action: 'editProfile' },
        { icon: 'notifications', label: 'Notifications', action: 'notifications' },
        { icon: 'card', label: 'Payment Methods', action: 'payment' },
        { icon: 'settings', label: 'Settings', action: 'settings' },
        { icon: 'help-circle', label: 'Help & Support', action: 'help' },
        { icon: 'log-out', label: 'Logout', action: 'logout', isDanger: true }
    ];

    constructor(private router: Router) {
        addIcons({arrowBack,camera,mail,call,locationOutline,chevronForward,person,notifications,card,helpCircle,settings,logOut,calendar,heart,star});
    }

    handleMenuAction(action: string) {
        console.log('Action:', action);
        if (action === 'logout') {
            // Handle logout
        }
    }
    goBack() {
        this.router.navigate(['/tabs/home']);
    }
    changePhoto() {
        console.log('Change photo');
    }
}
