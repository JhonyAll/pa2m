import { ImageBackground, Text, View, Dimensions, StyleSheet } from "react-native";
import estilo from "./estilo";
import * as Animatable from 'react-native-animatable';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from "react";
import Carousel from 'react-native-snap-carousel'
import dados from "../../dados"
import { Image } from "expo-image";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ foto, index }) => {
    console.log(foto)
  return (
    <View style={styles.container} key={index}>
      <Image
        source={`../../assets/img_veiculos/${foto}`}
        style={styles.image}
      />
      {/* <Text style={styles.header}>{item.title}</Text> */}
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})



const Home = () => {
    const isCarousel = React.useRef(null)
    console.log(dados[1].fotos)

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={{ uri: 'https://th.bing.com/th/id/OIP._bEym4kYuz4jJi612zzl1QHaEn?rs=1&pid=ImgDetMain' }} style={estilo.image}>
            </ImageBackground>
            <Text style={{ fontSize: 32, textAlign: 'center', fontWeight: 700, marginTop: 20 }} >Ltda. RJ</Text>
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Encontre aqui na Ltda. RJ o carro ideal para você!</Text>
            <Animatable.View
                    animation="bounce"
                    iterationCount="infinite"
                    direction="alternate"
                    duration={2000}
                    style={{ marginTop: 28}}
                >
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign style={{ padding: 5, backgroundColor: '#222', borderRadius: '50%'}} name="arrowdown" size={24} color="white" />
                    </View>
                </Animatable.View>
                {/* <Carousel
                    layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={dados}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}
                /> */}
        </View>
    )
}

export default Home;