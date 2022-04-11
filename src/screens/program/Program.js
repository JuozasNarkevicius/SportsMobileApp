import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import WorkoutAccordion from '../../components/dataDisplay/workoutAccordion.js/WorkoutAccordion';
import programService from '../../repositories/program';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import styles from './styles';

function ProgramScreen({ route, navigation }) {
  const [program, setProgram] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { programId, programName } = route.params;

  const getProgram = async () => {
    const response = await programService.getProgramAPI(programId);
    setProgram(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    navigation.setOptions({ title: programName });
    getProgram();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <List.Section>
          {program.workouts.map((workout) => (
            <WorkoutAccordion key={workout.id} workout={workout} />
          ))}
        </List.Section>
      </ScrollView>
    </View>
  );
}

export default ProgramScreen;
