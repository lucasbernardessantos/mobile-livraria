import { AutorDTO } from "./autorDTO";

export class ObraResponseDTO {
  constructor(
    private titulo: string,
    private autor: AutorDTO,
    private id?: number
  ) {}
}