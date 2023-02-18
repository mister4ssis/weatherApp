import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function WheatherInfo({ data }) {

    return (
        <View style={styles.container}>
            <FontAwesome5 name="cloud-moon-rain" size={160} color="black" />
            <Text style={styles.titulo}>{data.name}, {data.sys.country} </Text>


            <Text style={styles.temperatura}>
            <MaterialCommunityIcons name="temperature-celsius" size={35} color="black" /> {Number(data.main.temp).toFixed(1)}<Text >°C</Text>
            </Text>

            <View style={styles.minMaxTempInfo}>

            <Text style={styles.minMaxTempDetails}><FontAwesome5 name="temperature-low" size={24} color="black" />{Number(data.main.temp_min).toFixed(1)}<Text >°C</Text> </Text>
            <Text style={styles.minMaxTempDetails}><FontAwesome5 name="temperature-high" size={24} color="black" />{Number(data.main.temp_max).toFixed(1)}<Text >°C</Text> </Text>
            </View>

            <Text>
                Sensação Termica: {(data.main.feels_like).toFixed(1)}<Text>°C</Text>
            </Text>
            <Text><FontAwesome5 name="wind" size={20} color="black" /> {data.wind.speed}km/h</Text>
            <Text><FontAwesome5 name="water" size={20} color="black" /> {data.main.humidity}% </Text>


        </View>
    )
}