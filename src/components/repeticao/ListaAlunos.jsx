import React from 'react';
import '../../data/alunos';
import alunos from '../../data/alunos';
export default (props) => {
   
    const listAlunos = alunos.map((aluno) =>{
        return (
            <li>
                {aluno.id}) {aluno.nome}: {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
               {listAlunos}
                
            </ul>
        </div>
    );
};
