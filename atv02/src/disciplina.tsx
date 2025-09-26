import './disciplina.css';

type DisciplinaProps = {
    nome: string;
    codigo: string;
}

export default function Disciplina (props: DisciplinaProps){
    return( 
    <div className = "disciplina">
      <h1>{props.nome}</h1>
      <h2>{props.codigo}</h2>
    </div>
    );
}

