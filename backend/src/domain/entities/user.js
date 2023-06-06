export default class User {
  constructor({ name, profile_image, password, username, email }) {
    this.name = name;
    this.profile_image = profile_image;
    this.password = password;
    this.username = username;
    this.email = email;
    this.token = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
