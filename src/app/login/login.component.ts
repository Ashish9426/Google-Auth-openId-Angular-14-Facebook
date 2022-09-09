import { Component, OnInit } from '@angular/core';

import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';


export interface UserSocial {
  provider: string;
  id: string;
  email: string;
  name: string;
  photoUrl?: string;
  firstName: string;
  lastName: string;
  authToken: string;
  idToken: string;
  authorizationCode: string;
  response: any;
}

declare var google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: UserSocial;

  constructor(
    private authService: SocialAuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // google.accounts.id.initialize({
    //   client_id: "236025958894-l05tha7iovc0ool81upch4i6gi91npe8.apps.googleusercontent.com",
    //   callback: (response: any) => this.handleGoogleSignIn(response)
    // });
    // google.accounts.id.renderButton(
    //   document.getElementById("buttonDiv"),
    //   { size: "large", type: "icon", shape: "pill" }  // customization attributes
    // );


    this.authService.authState.subscribe((user:UserSocial) => {
      this.user = user;

      console.log('user 14', user)
      this.router.navigate(['/home'])
      
    });
    
  }

  // ngAfterViewInit(): void {
  //   google.accounts.id.initialize({
  //     client_id: "797383761002-vps4eav136ji7n7qfgd1k4eilh7qb8qr.apps.googleusercontent.com",
  //     callback: (response: any) => this.handleGoogleSignIn(response)
  //   });
  //   google.accounts.id.renderButton(
  //     document.getElementById("buttonDiv"),
  //     { size: "large",  theme: "outline" }  // customization attributes
  //   );
  // }

  // handleGoogleSignIn(response: any) {
  //   console.log('dataaaaaa1',response.credential);

  //   // This next is for decoding the idToken to an object if you want to see the details.
  //   let base64Url = response.credential.split('.')[1];
  //   let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
  //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  //   }).join(''));
  //   console.log('dataaaaaa2',JSON.parse(jsonPayload));
  // }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    alert('working signoutS')
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
