import './App.css'
import { ButtonBlockquote } from './components/ButtonBlockquote'
import { Blockquote } from './components/Blockquote'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="App">

      <Header>
        <Logo name = "FF OURBike"/>
      </Header>

      <Main> 
        <ButtonBlockquote 
          title = "TUDO O QUE VOCÊ PRECISA EM UM SÓ LUGAR!"
          subtitle = "Somos uma comunidade de apoio aos ciclistas."
          button = "Explorar"
          src = "./images/man-and-bike.png"
          alt = "Man with a bike."
        />

        <Blockquote
          title = "FÁCIL SISTEMA DE LOCALIZAÇÃO"
          subtitle = "Encontre pessoas e estabelecimentos facilmente."
          src = "./images/map.png"
          alt = "A 3D map."
        />

        <Blockquote
          title = "FAÇA NOVAS AMIZADES"
          subtitle = "Que tal conhecer novas pessoas para pedalar em conjunto ?"
          src = "./images/man-and-woman.png"
          alt = "A man and a woman."
        />

        <Blockquote
          title = "ENCONTRE LOCAIS DE REPARO "
          subtitle = "Diversos estabelecimentos de manutenção e lojas especializadas."
          src = "./images/bike.png"
          alt = "A bike."
        />

        <Footer
          title = "VENHA FAZER PARTE DE NOSSA COMUNIDADE!"
          button= "Participar"
        />
      </Main>

    </div>
  )
}

export default App
