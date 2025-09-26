import './disciplina.css';

type DisciplinaProps = {
    nome: string;
    codigo: string;
}

export default function Disciplina ({codigo, nome}: DisciplinaProps){
    return( 
    <div className = "disciplina">
      <h1>{nome}</h1>
      <h2>{codigo}</h2>
    </div>
    );
}

