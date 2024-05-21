import React, { useState } from 'react';
import css from './Login.module.css';
import {Link} from 'react-router-dom';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = (e) => {
        e.preventDefault();
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
        setUsuario('');
        setSenha('');
    };

    return (

        <div className={css.container}>
            <div className={css.tudo}>
                <div>
                    <img className={css.logo} src="./logoatualizada.png" alt=""/>
                </div>
                <div className={css.formcontainer}>
                    <h1>Login</h1>
                </div>
                <form className={css.form} onSubmit={handleEntrar}>

                    <div>
                        <input
                            type="text"
                            id="usuario"
                            placeholder={'Usuario:'}
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="senha"
                            placeholder={'Senha:'}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button className={css.botao} type="submit"><Link to={"/"} className={css.link1}>Entrar</Link></button>
                    <button className={css.botao2} type="submit"><Link to={"/Cadastro"} className={css.link2}>Não possui conta? <span className={css.cadastroHover}>Cadastre-se</span></Link></button>
                </form>
            </div>
        </div>
    )
        ;
}

export default Login;