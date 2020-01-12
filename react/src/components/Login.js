import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import './styles.scss';
import facade from '../apiFacade';
import Modal from 'react-bootstrap/Modal';

const LoginForm = ({ login }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [form, setform] = useState({
    formtype: "Login"
  });

  const onSubmit = evt => {
    evt.preventDefault();
    login(user.username, user.password);
  };

  const onChange = evt => {
    evt.persist();
    setUser(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
  };

  return (

    <div className="LoginForm">
      <form onSubmit={onSubmit} onChange={onChange}>
        <input placeholder="Brugernavn" id="username" />
        <input placeholder="Kodeord" type="password" id="password" />
        <button type="submit" className="login">
          Login
        </button>
      </form>
    </div>
  );
};

const RegisterForm = ({ register }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    repeatPwd: '',
    type: 'User'
  });

  const onSubmit = evt => {
    evt.preventDefault();
    if (user.password == user.repeatPwd) {
      register(user.username, user.password, user.type);
    } else {
      alert("Passwords matchede ikke.");
    }
  };

  const onChange = evt => {
    evt.persist();
    setUser(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
  };

  return (
    <div className="LoginForm">
      <form onSubmit={onSubmit} onChange={onChange}>
        <input placeholder="Brugernavn" id="username" />
        <input placeholder="Kodeord" type="password" id="password" />
        <input placeholder="Gentag kodeord" type="password" id="repeatPwd" />
        <select id="type">
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit" className="login">
          Opret bruger
        </button>
      </form>
    </div>
  );
};

const UserInfo = ({ username, role, logout }) => {
  const onLogout = evt => {
    evt.preventDefault();
    logout();
  };

  return (
    <div className="UserInfo">
      <ul>
        <li>
          <NavLink className="link" to="/user/123">
            <span>Profil {username}</span>
          </NavLink>
        </li>
        <li>
          <button onClick={onLogout} className="login">
          <span>Logud</span>
      </button>
        </li>
      </ul>
    </div>
  );
};

const Login = props => {
  const [username, setUsername] = useState(false);
  const [role, setRole] = useState('');
  const [loggedIn, setLoggedIn] = useState('');
  const [loginFormShown, showLoginForm] = useState(false);
  const [formtype, formtypechange] = useState('Login')
  const [loading, setLoading] = useState(false)
  const Flogout = async () => {
    setLoggedIn(false);
    console.log(loggedIn);
    facade.logout();
  };

  const login = async (username, pass) => {
    try {
      setLoading(true);
      let user = await facade.login(username, pass)
      setLoading(false);
      setLoggedIn(true);
      setRole(user.role);
      setUsername(user.username);
      showLoginForm(false);
    }
    catch (error) {
      alert("username eller password forkert");
      setLoading(false);
    }
  };

  const register = async (username, pass, type) => {
    try {
      setLoading(true);
      let user = await facade.register(username, pass, type)
      setLoading(false);
      setLoggedIn(true);
      setRole(user.role);
      setUsername(user.username);
      showLoginForm(false);
    }
    catch (error) {
      alert("username allerede i brug.");
      setLoading(false);
    }
  }
  return (
    <div className="loginform">
      {loggedIn ? (
        <UserInfo username={username} role={role} logout={Flogout} />
      ) : (
          <button
            className="login"
            onClick={() => {
              showLoginForm(true);
              formtypechange('Login')
            }}
          >
            <FiUser className="icon" />
            <span>Login</span>
          </button>
        )}

      <Modal
        show={loginFormShown}
        size="md"
        centered
        onHide={() => {
          showLoginForm(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <FiUser className="modal-icon" />
            {formtype}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (<div className="LoginForm"><Loader /></div>) : (formtype == 'Login') ?
            (<div><LoginForm login={login} />
              <button
                className="register"
                onClick={() => formtypechange('Opret Ny Bruger')}
              >
                <span>Ny Bruger</span>
              </button>
            </div>
            ) : (
              <RegisterForm register={register} />
            )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
