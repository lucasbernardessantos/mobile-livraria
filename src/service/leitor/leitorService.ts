import { LeitorDTO } from "../../dto/leitorDTO";
import { LeitorRepository } from "../../repository/leitorRepository";

export class LeitorService {
  private repositoryLeitor: LeitorRepository

  constructor() {
    this.repositoryLeitor = new LeitorRepository()
  }

  public gravar(dto: LeitorDTO) {
    
  }
}