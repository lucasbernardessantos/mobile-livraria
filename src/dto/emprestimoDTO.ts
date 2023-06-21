export class EmprestimoDTO {
  constructor(
    private leitor: number,
    private obra: number,
    private status: string,
    private dataEmprestimo: number,
    private dataDevolucao: number
  ) {}

  get Leitor() {
    return this.leitor
  }
  get Obra() {
    return this.obra
  }
  get Status() {
    return this.status
  }
  get DataEmprestimo() {
    return this.dataEmprestimo
  }
  get DataDevolucao() {
    return this.dataDevolucao
  }
}