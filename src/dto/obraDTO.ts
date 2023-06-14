export class ObraDTO {
  constructor(
    private titulo: string,
    private autor: number,
    private id?: number
  ) {}

  get Titulo(): string {
    return this.titulo
  }

  get Autor() {
    return this.autor
  }

  get Id() {
    return this.id
  }
}