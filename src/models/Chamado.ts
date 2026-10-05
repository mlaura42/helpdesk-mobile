export interface Chamado {

    id: number;
    titulo: string;
    descricao: string;
    status: 'NOVO' | 'PENDENTE' | 'FINALIZADO';

}