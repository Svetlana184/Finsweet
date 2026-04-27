import { useState } from "react"
import styles from "./SignIn.module.scss"
import SimpleButton from "../../common/SimpleButton/SimpleButton";
import shape from "../../../assets/shapes/btn_shape.svg"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
    const [data, setData] = useState('signin')
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userRepeatPassword, setRepeatPassword] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    }
    const handleChangeUserPassword = (event) => {
        setUserPassword(event.target.value);
    }
    const handleChangeUserAge = (event) => {
        setUserPassword(event.target.value);
    }
    const handleChangeUserRole = (event) => {
        setUserPassword(event.target.value);
    }
    const handleChangeRepeatPassword = (event) => {
        setUserPassword(event.target.value);
    }

    const handleClickSignUp = async (e) => {
         e.preventDefault();
        try {
        const response = await axios.post('http://localhost:3000/api/auth/register', {
            name_user:userName,
            password:userPassword,
            age_user:userAge,
        });
        setUserName('');
        setUserPassword('');
        setUserAge('');
        } catch (error) {
            const errorMsg = error.response?.data?.error || 'Ошибка регистрации';
            console.log(errorMsg)
        } 
    }

    const handleClickSignIn = async (e) => {
         try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                name_user: userName,
                password: userPassword,
            });
            const newToken = response.data.token;
            localStorage.setItem('token', newToken);
            console.log("успешно")
            setUsername('');
            setUserPassword('');
            navigate('/admin');
        } catch (error) {
            console.log(error.response?.data?.error || 'Ошибка входа')
        } 
    };

    return(
            <div className={styles.sign_in_modal}>
                <ul>
                    <li>
                        <button onClick={()=>setData('signin')}>Sign In</button>
                    </li>
                    <li>
                        <button onClick={()=>setData('signup')}>Sign Up</button>
                    </li>
                </ul>
                {data == 'signin' ? 
                <div className={styles.signin}>
                    <h3>Log in account</h3>
                    <form action="" method="post">
                        <input value={userName} onChange={handleChangeUserName} type="text" name="" id="" placeholder="Your name"/>
                    </form>
                    <form action="" method="post">
                        <input onChange={handleChangeUserPassword} type="password" name="" id="" placeholder="Your password"/>
                    </form>
                    <div>
                        <button className={styles.cancel_button}>
                            <img className={styles.shape} src={shape} alt="" />
                            <p className={styles.text}>Cancel</p>
                        </button>
                        <SimpleButton onClick={(e) => handleClickSignIn(e)} name="Log in"/>
                    </div>
                </div>
                : <div className={styles.signin}>
                    <h3>Create account</h3>
                    <form action="" method="post">
                        <input onChange={handleChangeUserName} type="text" name="" id="" placeholder="Your name"/>
                        <input onChange={handleChangeUserAge} type="text" name="" id="" placeholder="Your age"/>
                        <input onChange={handleChangeUserRole} type="text" name="" id="" placeholder="Your role"/>
                        <input onChange={handleChangeUserPassword} type="password" name="" id="" placeholder="Your password"/>
                        <input onChange={handleChangeRepeatPassword} type="password" name="" id="" placeholder="Repeat password"/>
                    </form>
                    <div>
                         <button className={styles.cancel_button}>
                            <img className={styles.shape} src={shape} alt="" />
                            <p className={styles.text}>Cancel</p>
                        </button>
                        <SimpleButton onClick={(e) => handleClickSignUp(e)} name="Create account"/>
                    </div>
                    
                </div>}
            </div> 
    )
};

export default SignIn;