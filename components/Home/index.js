import { ImageBackground, Text, View } from "react-native";
import estilo from "./estilo";
import * as Animatable from 'react-native-animatable';

const Home = () => {
    return (
        <View style={{ backgroundColor: '#323232', flex: 1 }}>
            <ImageBackground source={{ uri: 'https://th.bing.com/th/id/OIP._bEym4kYuz4jJi612zzl1QHaEn?rs=1&pid=ImgDetMain' }} style={estilo.image}>
                <Animatable.View
                    animation="bounce"
                    iterationCount="infinite"
                    direction="alternate"
                    duration={2000}
                    style={estilo.titulo}
                >
                    <Text style={estilo.titulo} >Ltda. RJ</Text>
                </Animatable.View>

            </ImageBackground>
        </View>
    )
}

export default Home;