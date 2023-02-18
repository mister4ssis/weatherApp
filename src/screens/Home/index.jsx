import api from '../../services/api';import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';
import axios from 'axios';
import WheatherInfo from '../WheatherInfo';
import citiesInfo from '../../services/providers/city.list.json'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&';
const api_key = 'e79f8329ee89dc43dae90c1808a0e95c';


export default function Home() {


  const [latitude, setLatitude] = useState(-19.938141)
  const [longitude, setLongitude] = useState(-44.052490)
  const [wheaterInfo, setWheaterInfo] = useState([])
  const [loaded, setLoaded] = useState(false)
  

  // const fetchWeather = async () => {
  //   const url = `${baseUrl}&lat=${latitude}&lon=${longitude}&appid=${api_key}&mode=json`;
  //   // const response = await axios.get(url);
  //   // axios.get(url).then(response => console.log(Object.values(response.data.wind)))
  //   const response = await fetch(url)
  //   let info = await response.json()
  //   // info = JSON.stringify(info)
  //   // console.log(info);
  //   setWheaterInfo(info);
  // };



  useEffect(() => {
    axios.get(`${baseUrl}&lat=${latitude}&lon=${longitude}&appid=${api_key}`)
        .then((response) => {
          setWheaterInfo(response.data)
          setLoaded(true)
          
        })
  }, [latitude, longitude])
  return (
    <View style={styles.container}>
      

      {/* <Text> Cidade: {wheaterInfo.clouds} </Text> */}
      {/* <Text> País: {wheaterInfo ?? wheaterInfo.sys.country} </Text>*/}
      {/* <Text> Temperatura: {Object.values(wheaterInfo.main)[3]} </Text>  */}
      {
        loaded ?
        <Text> <WheatherInfo data = {wheaterInfo}/> </Text> 
        :
        <Text>Carregando...</Text>
      }

      <StatusBar style="auto" />

    </View>
  );
}


