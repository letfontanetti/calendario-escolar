import css from "./Dashboard_Card_Profs.module.css"
import { Link } from 'react-router-dom';
export default function Dashboard_Card_Profs (){
    return(
        <div>
            <div className={css.card_profs}>
                <h4 className={css.titulo}>Professores Cadastrados</h4>
                <div className={css.todos_profs}>
                    <p className={css.professores}>Helena</p>
                    <p className={css.professores}>Marileide</p>
                    <p className={css.professores}>Melquisedeque</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>
                    <p className={css.professores}>Abde-Nego</p>

                </div>
                <div className={css.plus}>
                    <Link className={css.mais} to={"/Cadastro"}>+</Link>
                </div>


            </div>
        </div>
    )
}