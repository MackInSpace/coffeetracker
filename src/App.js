import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import History from "./components/History"
import Layout from "./components/Layout"
import Stats from "./components/Stats"
//import { useAuth } from "./context/AuthContext"

function App() {
  //const { globalUser, globalData } = useAuth()
  const isAuthenticated = true //replace true with globalUser
  //const isData = globalData && Object.keys(globalData || {}).length

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
  <Layout>
    <Hero />
    <CoffeeForm isAuthenticated={isAuthenticated} />
    {isAuthenticated && (authenticatedContent)}
  </Layout>
  )
}

export default App