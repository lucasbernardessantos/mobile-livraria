export class LeitorDTO {
  constructor(
    private nome: string,
    private email: string,
    private cpf: string,
    private senha: string,
    private id?: number
  ) {}

  get Nome(): string {
    return this.nome
  }

  get Email(): string {
    return this.email
  }

  get CPF(): string {
    return this.cpf
  }

  get Senha(): string {
    return this.senha
  }

  get Id() {
    return this.id
  }
}