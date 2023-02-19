import { useEffect, useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, Switch, Text, View } from 'react-native';
import axios from 'axios';
import WheatherInfo from './WheatherInfo';
import { useColorScheme } from "nativewind";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";


import colors from 'tailwindcss/colors'
import { WEATHER_OPEN_API_KEY, WEATHER_OPEN_URL } from '@env';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&'; //URL da pesquisa na base de dados do Open Weather

export default function Home() {


  const [latitude, setLatitude] = useState(-19.938141)
  const [longitude, setLongitude] = useState(-44.052490)
  const [wheaterInfo, setWheaterInfo] = useState([])
  const [loaded, setLoaded] = useState(false)
  const {colorScheme, toggleColorScheme } = useColorScheme()
  const [refresh, setRefresh] = useState(false)


  const iconColor = colorScheme === "dark" ? "white" : "black";

  async function requestLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()
      setLatitude(currentPosition.coords.latitude)
      setLatitude(currentPosition.coords.longitude)
      getWeather()
    }
  }
  function getWeather() {
    axios.get(`${WEATHER_OPEN_URL}&lat=${latitude}&lon=${longitude}&appid=${WEATHER_OPEN_API_KEY}`)
      .then((response) => {
        setWheaterInfo(response.data)
        setLoaded(true)
      })
  }

  const onRefresh = () => {
    setRefresh(true)
    requestLocationPermission()
    setRefresh(false)
  } 
  useEffect(() => {
    requestLocationPermission()
  }, [])

  return (


    <View className='flex-1 items-center justify-center light:bg-white dark:bg-black' >
      <ScrollView
      refreshControl={<RefreshControl 
        refreshing={refresh} onRefresh={onRefresh}
      />}
      >
      <View className=' flex-row justify-end mt-16 mr-5 items-center'>
        <Text className='light:text-black dark:text-white'>Dark</Text>
        <Switch
          trackColor={{ true: colors.black, false: colors.white }}
          thumbColor={colorScheme === 'light' ? colors.black : colors.white}
          onValueChange={toggleColorScheme}
          value={colorScheme === 'light'}
        />
        <Text className='light:text-black dark:text-white'>Light</Text>
      </View>
      {
        loaded ?
          <WheatherInfo data={wheaterInfo} />
          :
          <ActivityIndicator size="small" color={iconColor} />
      }
      </ScrollView>
    </View>

  );
}


