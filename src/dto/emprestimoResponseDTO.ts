import { LeitorDTO } from "./leitorDTO";
import { ObraResponseDTO } from "./obraResponseDTO";

export class EmprestimoResponseDTO {
  constructor(
    private id: number,
    private leitor: LeitorDTO,
    private obra: ObraResponseDTO,
    private status: string,
    private dataEmprestimo: number,
    private dataDevolucao: number
  ) {}
}