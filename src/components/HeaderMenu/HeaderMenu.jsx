import "./index.scss"
import dncLogo from "../../assets/logo.svg";
import shoppingcart from "../../assets/shopping-cart.svg"

const HeaderMenu = () => {
  return (
    <header className='header-menu'>
      <img src={dncLogo} alt="logo" className="header-menu__logo" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h1>Meu Carrinho</h1>
        <img src={shoppingcart} alt="shoppingcart" />
      </div>
    </header>
  )
}

export default HeaderMenu