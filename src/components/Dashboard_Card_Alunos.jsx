import css from "./Dashboard_Card_Profs.module.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");
export default function Dashboard_Card_Alunos (){

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div>
            <div className={css.card_profs}>
                <h4 className={css.titulo}>Alunos Cadastrados</h4>
                <div className={css.todos_profs}>
                    <p className={css.professores}>Luiz</p>
                    <p className={css.professores}>Felipe</p>
                    <p className={css.professores}>Murilo</p>
                    <p className={css.professores}>Abner</p>
                    <p className={css.professores}>Ana</p>
                </div>
                <div className={css.plus}>
                    <button className={css.mais} onClick={openModal} >+</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <h2>Cadastrar Novo Aluno</h2>
                        <hr/>

                        <input className={css.inp} placeholder={""}></input>

                        <button onClick={closeModal}>Cadastrar</button>
                    </Modal>
                </div>
            </div>
        </div>
    )
}