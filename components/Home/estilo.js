import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        position: 'relative'
    },
    titulo: {
        fontSize: 40,
        color: '#eb1212',
        fontWeight: 700,
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // shadowColor: "#000000",
        // shadowOffset: {
        //     width: 0,
        //     height: 18,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 20.00,
        // elevation: 24
    }
})

export default estilo;