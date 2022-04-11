import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import programService from '../../repositories/program';
import styles from './styles';

function ProgramsListScreen({ navigation }) {
  const [programs, setPrograms] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getPrograms = async () => {
    const response = await programService.getAllProgramsAPI();
    setPrograms(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPrograms();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <List.Section>
          {programs.map((program) => (
            <List.Item
              style={styles.listItem}
              titleStyle={styles.itemText}
              key={program.id}
              title={program.name}
              onPress={() => navigation
                .navigate('Program', {
                  programId: program.id,
                  programName: program.name,
                })}
            />
          ))}
        </List.Section>
      </ScrollView>
    </View>
  );
}

export default ProgramsListScreen;
