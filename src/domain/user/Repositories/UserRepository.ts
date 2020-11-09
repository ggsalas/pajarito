export class UserRepository {
  register(param: any) {
    throw new Error('[UserRepository#register] should be implemented')
  }

  login(param: any) {
    throw new Error('[UserRepository#login] should be implemented')
  }

  logout() {
    throw new Error('[UserRepository#logout] should be implemented')
  }

  current() {
    throw new Error('[UserRepository#current] should be implemented')
  }
}
