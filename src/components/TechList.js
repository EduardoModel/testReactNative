import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

// import { Container } from './styles';

const TechList = () => {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddNewTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <SafeAreaView>
      <FlatList
        data={techs}
        keyExtractor={tech => tech}
        renderItem={({item}) => <Text>{item}</Text>}
      />

      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />
      <TouchableOpacity onPress={() => handleAddNewTech()}>
        <Text>Add new tech</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TechList;
