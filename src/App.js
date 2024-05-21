import './App.css';
import React from "react";
import Dashboard from "./pages/Dashboard";
import Calendario from "./pages/Tela_Calendario"
import Erro from "./pages/Erro"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Professores from "./pages/Tela_professores";
import Cursos from "./pages/Tela_Cursos"
import Salas from "./pages/Tela_Salas"
import Alunos from "./pages/Tela_Alunos"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route element={<Calendario />}  path="/Calendario" exact />
                <Route element={<Dashboard />}  path="/" />
                <Route element={<Professores />} path="/Professores" />
                <Route element={<Cursos />} path="/Cursos" />
                <Route element={<Salas />} path="/Salas" />
                <Route element={<Alunos />} path="/Alunos" />
                <Route element={<Login />} path="/Login" />
                <Route element={<Cadastro />} path="/Cadastro" />
                <Route element={<Erro />}  path="*" />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
