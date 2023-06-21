import { AutorDTO } from "./autorDTO";

export class ObraResponseDTO {
  constructor(
    private id: number,
    private titulo: string,
    private autor: AutorDTO
  ) {}
}