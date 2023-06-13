export class UserModel {
  fullName!: string;
  email!: string;
  password!: string;
  phone!: string;
  sexo!: string;
  perfil!: string[];

  constructor(fullName: string, email: string, password: string, phone: string, sexo: string, perfil: string[]) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.sexo = sexo;
    this.perfil = perfil;
  }
}