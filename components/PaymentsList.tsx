import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native'; // corectat "TpuchableOpacity"
import PayMethodCard from './PayMethodCard';
import { payments } from '../data/payments';

function PaymentsList() {
  const [selected, setSelected] = useState(null); // folosim null pentru id-ul selectat

  return (
    <View>
      <FlatList
        data={payments}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelected(item.id)}> 
            <PayMethodCard 
              selected={item.id === selected} 
              image={item.image} 
              method={item.method}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default PaymentsList;
