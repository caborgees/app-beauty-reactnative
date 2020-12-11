import * as React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PaginaCatalogo({ navigation }) {
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
        <View style={styles.Conteudo}>
          <Text style={styles.Titulo}> Choose specialists</Text>
          <Text style={styles.SeeAll}> See all</Text>
        </View>
        <View style={styles.Popular}>
          <View style={styles.Box2}>
            <Image
              style={styles.Avatar}
              source={require('../../assets/i 3.png')}
            />
            <Text style={styles.Place}> Studio Beauty</Text>
            <Text style={styles.Specialty}> Makeup | Hair </Text>
            <Text style={styles.Distance}> 300m </Text>
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
        <View style={styles.Popular}>
          <View style={styles.Box2}>
            <Image
              style={styles.Avatar}
              source={require('../../assets/i 1.png')}
            />
            <Text style={styles.Place}> Vanessa Leal</Text>
            <Text style={styles.Specialty}> Makeup </Text>
            <Text style={styles.Distance}> 700m </Text>
          </View>
          <View style={styles.Box2}>
            <Image
              style={styles.Avatar}
              source={require('../../assets/i 2-1.png')}
            />
            <Text style={styles.Place}> Glam Nails</Text>
            <Text style={styles.Specialty}> Nail Design </Text>
            <Text style={styles.Distance}> 1.2km </Text>
          </View>
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
