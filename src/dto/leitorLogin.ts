export class LeitorLoginDTO {
  constructor(
    private email: string,
    private senha: string
  ) {}

  get Email(): string {
    return this.email
  }

  get Senha(): string {
    return this.senha
  }
}