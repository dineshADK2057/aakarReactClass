import styled from 'styled-components'
import './App.css'
import Card, { ImgCard } from './components/Card/Card'
import StateHook from './components/usestate/StateHook'


function App() {

  return (
    <>

      {/* <div className="cardContainer">


        <Card title = "this is card 1" image = "https://th.bing.com/th/id/R.2436bfd57f8da9d3352be6d9c69f7d0d?rik=9ZCsDkOmNhWhyQ&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fbest-scenery-wallpaper-scenery-images.jpg&ehk=QhEgBXlBIdu4NBBKeTvxOQncAMHrLokkC8ustgaeB9c%3d&risl=&pid=ImgRaw&r=0"/>

        
        <Card />
        <Card />       


      </div>

      <div className="info">
        this is info div
      </div> */}

      <StateHook/>

    </>
  )
}
export default App

const NewCard = styled.div`
  display: flex;
  gap: 80px !important;

  &:hover{
    background-image: url();
  }

`


