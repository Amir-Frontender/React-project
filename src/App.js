import './App.css';
import CardsComponent from './components/cards/CardsComponent';
import FooterComponent from './components/footer/FooterComponent';
import HeaderComponent from './components/header/HeaderComponent';
import NavigationComponent from './components/navigation/NavigationComponent';
import SliderComponent from './components/slider/SliderComponent';

function App() {
  const navigation = ['Catalog', 'Popular', 'Brands', 'Stocks','Contacts', 'Delivery & purchase', 'Help', 'Public offer' ]
  const sales = [
    {img:'./assets/img/mixit.png', discount: 50, name: 'mixit', color: 'rgba(51, 51, 51, 0.75)', bgc: 'linear-gradient(89.85deg, #F4F4F4 -1.06%, #E4E4E4 105.44%)'},
    {img:'./assets/img/2x.png', discount: 25, name: 'for second purschase', color: '#fff', bgc: '#EF4B4D'},
    {img:'./assets/img/pngwing.png', discount: 50, name: 'Lancome', color: '#fff', bgc: '#0950a2'},
  ]
  const cards= [
    {model: 'SOMANG COSMETICS', position: 'Conditioner', name: "SOMANG COSMETICS ECO ALOE HAIR CONDITIONER", price: 4200, img: './assets/img/cards_image-1.png'},
    {model: 'SOMANG COSMETICS', position: 'Crem', name: "SOMANG COSMETICS CREM", price: 3800, img: './assets/img/cards_image-2.png'},
    {model: 'SOMANG COSMETICS', position: 'Conditioner', name: "SOMANG COSMETICS ECO ALOE HAIR CONDITIONER", price: 2500, img: './assets/img/cards_image-3.png'},
    {model: 'SOMANG COSMETICS', position: 'Conditioner', name: "SOMANG COSMETICS ECO CONDITIONER", price: 4000, img: './assets/img/cards_image-4.png'},
    {model: 'SOMANG COSMETICS', position: 'Conditioner', name: "SOMANG COSMETICS ECO CONDITIONER", price: 4600, img: './assets/img/cards_image-5.png'},
    {model: 'SOMANG COSMETICS', position: 'Conditioner', name: "SOMANG COSMETICS ECO CONDITIONER", price: 5000, img: './assets/img/cards_image-6.png'},
  ]
  return (
    <div className="App">
      <HeaderComponent/>
      <NavigationComponent navigation={navigation}></NavigationComponent>
      <SliderComponent sales={sales}></SliderComponent>
      <CardsComponent cards={cards}></CardsComponent>
      <FooterComponent navigation={navigation}></FooterComponent>
    </div>
  );
}

export default App;