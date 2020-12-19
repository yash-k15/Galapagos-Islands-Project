import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, Dimensions,ScrollView, ImageBackground} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


class SanCristobal extends React.Component {
    
    render(){
      return (
        
        <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={500}
                       imageHeight={500} > 
           <Image
        source={require('../../../app/assets/images/GalapaGoMap.jpg')}
        style={{
          alignSelf: 'center',
          height: 350,
          width: 350
          
          
        }}
        resizeMode="stretch"/>
        </ImageZoom> 
        
    );
  }
}
export default SanCristobal;