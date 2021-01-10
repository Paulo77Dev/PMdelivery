import  './styles.css';
import { ReactComponent as MainImage } from './main.svg' ;
function  Home( )  {
return  (
  <div className="home-container">
    <div className="home-content">
        <div className="home-actions"> 
            <h1 className="home-title">
            FAÇA SEU PEDIDO <br /> 
            QUE IREMOS ENTREGAR<br />  
            PARA VOCÊ EM INSTANTES
          </h1>
          <h3 className="home-subtitle">
          Escolha o seu pedido e em poucos <br /> 
          minutos levaremos na sua casa
          </h3>
          <a href="orders" className="home-btn-order">
            FAZER PEDIDO
          </a>
      </div>
      <div className="home-image">
        <MainImage/>
    </div>
  </div>
</div>
)
}
export default Home;