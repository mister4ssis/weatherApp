import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:15,
        height:'100%'
    },
    titulo: {
        fontSize: 40
    },
    temperatura: {
        flex: 1,
        fontSize: 35
    },
    minMaxTempInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    minMaxTempDetails: {
        marginHorizontal: 40,
        padding:10
    }
})

export default styles;