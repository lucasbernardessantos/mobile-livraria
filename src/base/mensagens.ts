export abstract class Mensagens {
  private mensagens: string[]

  constructor() {
    this.mensagens = []
  }

  adicionar(msg: string): void {
    this.mensagens.push(msg)
  }

  pegar(): string[] {
    return this.mensagens
  }

  limpar(): void {
    this.mensagens = []
  }
}