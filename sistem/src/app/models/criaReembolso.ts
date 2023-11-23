export interface criaReembolso{
  funcionario: number;
  valor: number;
  motivo: string;
  dataReembolso: string;
  estado?: string;
  id?: number
}
