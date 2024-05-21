import css from "./Dashboard_Card_Profs.module.css"
import { Link } from 'react-router-dom';
import Cadastro from "../pages/Cadastro";

export default function Dashboard_Card_Salas (){


    return(
        <div>
            <div className={css.card_profs}>
                <h4 className={css.titulo}>Salas Cadastradas</h4>
                <div className={css.todos_profs}>
                    <p className={css.professores}>Eletrica</p>
                    <p className={css.professores}>Desenvolvimento de sistemas</p>
                    <p className={css.professores}>Vendas</p>
                    <p className={css.professores}>Calçado</p>
                    <p className={css.professores}>Tornearia mecanica</p>
                </div>
                <div className={css.plus}>
                    <Link className={css.mais} to={"/Cadastro"}>+</Link>
                </div>
            </div>
        </div>
    )
}