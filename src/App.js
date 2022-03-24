import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MilesThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [cattsThings, setCattsThings] = useState([
    {
      name: 'bkr water bottle',
      image: 'https://m.media-amazon.com/images/I/51HSFG9SGjL._SL1500_.jpg',
      attributes: ['reusability', 'girly', '500ml', 'beautiful'],
    },
    {
      name: 'Nespresso Machine',
      image:
        'https://m.media-amazon.com/images/I/71PEOpQgLUL._AC_SX466_.jpg',
      attributes: [
        'necessary for coding',
        'non-watery coffee',
        'Italian',
      ],
    },
    {
      name: 'Fjallraven Kanken',
      image:
        'https://cdn.shopify.com/s/files/1/0213/4654/products/fjallraven-kanken-backpack-bags-packs-fjallraven-navy-647891_2000x.jpg?v=1599842964',
      attributes: [
        'really useful',
        'lasts long',
        'good for posture',
      ],
    },
    {
      name: 'Cracking the Coding Interview',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
      attributes: [
        'helps you get a job',
        'really hard algorithm questions',
        'hope I can get them right',
      ],
    },
  ])

  const [chrisThings, setchrisThings] = useState([
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'turkey',
      image:
        'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'such gobbles',
        'good when stuffed',
        'not a taco',
        'why gravy exists',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ])

  const [davidsThings, setDavidsThings] = useState([
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'giraffe',
      image:
        'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      attributes: [
        'tall',
        'cool',
        'fun',
        'animal',
        "(David doesn't acually own a giraffe)",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ])

  const [brandonsThings, setBrandonsThings] = useState([
    {
      name: "energy drinks",
      image: "https://target.scene7.com/is/image/Target/GUEST_e29edd93-8fd8-43db-946f-4b7ef393bbe3?wid=800&hei=800&qlt=80&fmt=pjpeg",  
      attributes: ["my life blood", "nectar of the gods", "not a taco", "beautiful"],
    },
    {
      name: "superior pizza",
      image: "https://1eu32g2n7xjk2vsbqi2chy76-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/History-of-Deep-Dish-Pizza-Chicago.jpg",  
      attributes: ["FOH about Detroit pizza wth is wrong with you"],
    },
    {
      name: "goofball",
      image: "https://media-exp1.licdn.com/dms/image/C4E03AQGwJQOSakXEvA/profile-displayphoto-shrink_800_800/0/1643144196223?e=1653523200&v=beta&t=ZbvmaYPst4axTs4StIwzsfa27n2ZZPRvv8pFZqo1Nzw",  
      attributes: ["Guy who has extremely poor taste in pizza", "Judgement may not be trusted", "Has a 20-yo Macbook"],
    },
    {
      name: "Console Master Race",
      image: "https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png",  
      attributes: ["Imagine paying $1000 for a new video card, couldn't be me"],
    },
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={cattsThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<MilesThings things={chrisThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={brandonsThings} />}
      />
    </Routes>
  )
}

export default App
