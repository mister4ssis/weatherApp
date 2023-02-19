import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { useColorScheme } from "nativewind";

import { styled } from 'nativewind'

const weatherInfosCodes = [
    { icon: 'sun', codes: [800] },
    { icon: 'cloud-sun', codes: [801, 802, 803, 804] },
    { icon: 'cloud-rain', codes: [300, 301, 302, 310, 311, 312, 313, 314, 321] },
    { icon: 'cloud-showers-heavy', codes: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531] },
    { icon: 'poo-storm', codes: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232] },
    { icon: 'snow', codes: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622] },
    { icon: 'smog', codes: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781] },
]

const nightIcons = {
    "sun": "moon",
    "cloud-sun": "cloud-moon",
    "cloud-sun-rain": "cloud-moon-rain",
    "cloud-showers-heavy": "cloud-showers-heavy",
    "poo-storm": "poo-storm",
    "snow": "snow",
    "smog": "snow",
}



function WheatherInfoStyled({ data }) {


    const { colorScheme } = useColorScheme()
    const [icon, setIcon] = useState("")
    const textColor = colorScheme === "dark" ? "white" : "black";

    useEffect(() => {


        for (let info of weatherInfosCodes) {

            if (info.codes.includes(data.weather[0].id)) {

                var hour = new Date().getHours();
                if (hour >= 18) {
                    let iconNight = nightIcons[info.icon]
                    setIcon(iconNight);

                    
                } else {
                    setIcon(info.icon);
                }
                break;
            }

        }

    
        
    
    }, [])
return (

    <View className="flex-1 items-center justify-center gap-5">

        <FontAwesome5 name={icon} size={160} color={textColor} />
        <Text >{data.weather.id}</Text>

        <Text className="dark:text-white light:text-black font-bold text-4xl" >{data.name}, {data.sys.country} </Text>


        <Text className="dark:text-white light:text-black text-2xl" >
            <MaterialCommunityIcons name="temperature-celsius" size={35} color={textColor} />
            {Number(data.main.temp).toFixed(1)}<Text >°C</Text>
        </Text>

        <View className=" flex-row" >

            <Text className="dark:text-white light:text-black mx-12" >
                <FontAwesome5 name="temperature-low" size={24} color={textColor} />
                {Number(data.main.temp_min).toFixed(1)}<Text >°C</Text>
            </Text>

            <Text className="dark:text-white light:text-black mx-12 " >
                <FontAwesome5 name="temperature-high" size={24} color={textColor} />
                {Number(data.main.temp_max).toFixed(1)}<Text >°C</Text>
            </Text>

        </View>



        <View className=" flex-row py-8" >

            <Text className="dark:text-white light:text-black mx-12" >
                <FontAwesome5 name="wind" size={20} color={textColor} /> {data.wind.speed}km/h</Text>

            <Text className="dark:text-white light:text-black mx-12" >
                <FontAwesome5 name="water" size={20} color={textColor} /> {data.main.humidity}% </Text>
        </View>


    </View>
)
}

const WheatherInfo = styled(WheatherInfoStyled)

export default WheatherInfo;