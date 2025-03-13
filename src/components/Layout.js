import { useState } from 'react';
import Modal from './Modal';
import Authentication from './Authentication';
//import { useAuth } from '../context/AuthContext'; //wrapping the button in brackets & global user have to do with AuthContext.js

export default function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    //const { globalUser, logout } = useAuth() //wrapping the button in brackets & global user have to do with AuthContext.js

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">X-CAFFEINE</h1>
                <p>For Coffee Enthusiasts</p>
            </div>
                <button onClick={() => { setShowModal(true) }}>
                    <p>Sign up free</p>
                    <i class="fa-solid fa-mug-hot"></i>
                </button>  
        </header>//wrapping the button in brackets & global user have to do with AuthContext.js
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">X-Caffeine</span> was made by Adam Mackey.
            <br>Check out the project on <a target="_blank" href="https://github.com/MackInSpace/coffeetracker">GitHub</a>!</br></p>
        </footer>
    )

    function handleCloseModal() {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal}/>
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}