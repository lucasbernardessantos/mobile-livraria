export class AutorDTO {
  constructor(
    private nome: string,
    private id?: number
  ) {}

  get Nome(): string {
    return this.nome
  }

  get Id() {
    return this.id
  }
}