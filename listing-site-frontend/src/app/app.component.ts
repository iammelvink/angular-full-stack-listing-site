import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app'; changed
import firebase from 'firebase/app';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'listing-site-frontend';

    constructor(
        // Injecting AngularFireAuth into the app.component
        // via the constructor
        public firebase: AngularFireAuth,
    ) { }

    // Sign in with Google account
    signInClicked(): void {
        this.firebase.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    // Sign out
    signOutClicked(): void {
        this.firebase.signOut();
    }
}
