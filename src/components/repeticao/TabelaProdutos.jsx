import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProdutos.css';

export default (props) => {
    function getLinhas() {
        return produtos.map((produto, index) => {
            return (
                <tr key={produto.id} className={index % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
                </tr>
            );
        });
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>{getLinhas()}</tbody>
            </table>
        </div>
    );
};
