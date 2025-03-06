export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">X-CAFFEINE</h1>
                <p>For Coffee Enthusiasts</p>
            </div>
            <button>
                <p>Sign up free</p>
                <i class="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer></footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}