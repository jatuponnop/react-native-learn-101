/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AttractionCard from './AttractionCard';

const Attraction = props => {
  const [attractions, setAttractions] = useState([]);
  useEffect(() => {
    fetch('https://www.mecallapi.com/api/attractions')
      .then(res => res.json())
      .then(
        result => {
          setAttractions(result);
        },
        error => {
          console.log(error);
        },
      )

      .catch(ex => {
        console.error(ex);
      });
  }, []);
  //console.log('attract = ', attractions);
  return (
    <SafeAreaView>
      <ScrollView>
        {attractions.map(attraction => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            navigation={props.navigation}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Attraction;
