import * as React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const Navigator = useNavigation();

  return (
    <ScrollView
      style={{
        background:
          'linear-gradient(180deg, rgba(229, 229, 229, 0) 0%, #FFFFFF 34.9%)',
      }}>
      <View>
        <Image
          style={styles.Banner}
          source={require('../../assets/banner.png')}
        />
      </View>

      <View style={styles.Conteudo}>
        <Text style={styles.Titulo}> Choose service </Text>
        <Text style={styles.SeeAll}> See all</Text>
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={styles.Box}>
            <Image
              style={styles.Icon}
              source={require('../../assets/icone2.png')}
            />
            <Text style={styles.Categorie}> Hair</Text>
          </View>

          <View style={styles.Box}>
            <Image
              style={styles.Icon1}
              source={require('../../assets/icone.png')}
            />
            <Text style={styles.Categorie}> Make up</Text>
          </View>

          <View style={styles.Box}>
            <Image
              style={styles.Icon}
              source={require('../../assets/icone1.png')}
            />
            <Text style={styles.Categorie}> Nail</Text>
          </View>
        </View>
        <Text style={styles.Titulo}> Popular specialists </Text>
        <TouchableOpacity style={styles.SeeAll}
        onPress={()=> navigation.navigate('Catalogo')}
        > See all</TouchableOpacity>
      </View>
      <View style={styles.Popular}>
        <View style={styles.Box2}>
          <Image
            style={styles.Avatar}
            source={require('../../assets/i 1.png')}
          />
          <Text style={styles.Place}> Mirian Stoleto</Text>
          <Text style={styles.Specialty}> Makeup </Text>
          <Text style={styles.Distance}> 700m </Text>
        </View>
        <View style={styles.Box2}>
          <Image
            style={styles.Avatar}
            source={require('../../assets/i 2.png')}
          />
          <Text style={styles.Place}> Paula Mariana</Text>
          <Text style={styles.Specialty}> HairDresser </Text>
          <Text style={styles.Distance}> 1.2km </Text>
        </View>
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Banner: {
    width: 325,
    height: 110,
    zIndex: 1,
  },
  Conteudo: {
    display: 'inline',
    margin: 5,
  },
  Titulo: {
    color: '#8A6D6D',
    fontWeight: 'bold',
    margin: 5,
  },
  SeeAll: {
    display: 'inline',
    justifyContent: 'space-between',
    marginLeft: 100,
    fontSize: 10,
    color: '#30475E',
  },
  Box: {
    margin: 10,
    backgroundColor: '#F3E6E3',
    width: 90,
    height: 90,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    width: 52,
    height: 52,
    margin: 2,
  },
  Icon1: {
    width: 42,
    height: 51,
    margin: 2,
  },

  Categorie: {
    color: '#30475E',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Popular: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  Box2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 138,
    height: 148,
    background: '#F3E6E3',
    borderRadius: 20,
  },
  Avatar: {
    width: 65,
    height: 65,
  },
  Place: {
    color: '#30475E',
    fontWeight: 'bold',
  },
  Specialty: {
    color: '#8A6D6D',
    fontSize: 12,
  },
  Distance: {
    color: '#8A6D6D',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
