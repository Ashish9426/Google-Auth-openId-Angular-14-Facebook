import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleAuth';

  public user: any;
  public loggedIn!: boolean;
  constructor(private authService: SocialAuthService) {}
  //Logion
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  // Logout Function
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit() {
    //Get User Data
    this.authService.authState.subscribe((user) => {
      this.user = user;
 
      this.loggedIn = user != null;
    });
  }
}
