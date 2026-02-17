import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss'],
    standalone: true,
    imports: [CommonModule, IonHeader, IonTitle, IonContent, IonButton, IonIcon],
})
export class ProfilePage {
    constructor() {
        addIcons({ arrowBack });
    }
}
