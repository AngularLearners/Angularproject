export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    //  const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //resolve(this.loggedIn);n
    return this.loggedIn;
    // }, 800);
    // });

    // setTimeout(() => {
    //   return this.loggedIn;
    // }, 800);
    //return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
