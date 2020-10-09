import React from 'react';
import './App.css';
import Card from './components/layout/Card';

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import ListaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/Usuario'
import DiretaPai from './components/comunicacao/DiretaPai'
export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card color="#84a98c" titulo="#09 -Comunicação direta">
                <DiretaPai></DiretaPai>
            </Card>
            <Card color="#e05780" titulo="#08 - Renderização Condicional">
                <ParOuImpar numero="111"></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
                <UsuarioInfo></UsuarioInfo>
            </Card>
            <Card color="#83E377" titulo="#07 - Desafio Repetição">
                <ListaProdutos></ListaProdutos>
            </Card>
            <Card color="#54478C" titulo="#06 - Repetição">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card color="#FF6B6B" titulo="#05 - Com Filhos">
                <Familia sobrenome="Custódio">
                    <FamiliaMembro nome="Rafaela"></FamiliaMembro>
                    <FamiliaMembro nome="Bruna"></FamiliaMembro>
                    <FamiliaMembro nome="José"></FamiliaMembro>
                </Familia>
            </Card>
            <Card color="#F9C74F" titulo="#04 - Desafio Aleatório">
                <Aleatorio min={1} max={100} />
            </Card>
            <Card color="#43AA8B" titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            <Card color="#277DA1" titulo="#02 - Com parâmetro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Rafaela"
                    nota={9.3}
                />
            </Card>
            <Card color="" titulo="#01 - Primeiro">
                <Primeiro />
            </Card>
        </div>
    </div>
);
