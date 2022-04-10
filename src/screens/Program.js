import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import WorkoutAccordion from '../components/WorkoutAccordion';
import programService from '../repositories/program';
import LoadingIndicator from '../components/LoadingIndicator';

const ProgramScreen = ({ route, navigation }) => {
    const [program, setProgram] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { programId, programName } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: programName });
        getProgram();
    }, []);


    const getProgram = async () => {
        const response = await programService.getProgramAPI(programId);
        setProgram(response.data);
        setIsLoading(false);
    }

    if (isLoading) {
        return <LoadingIndicator/>
    }

  return (
      <ScrollView style={styles.scrollView}>
        <List.Section>
          {program.workouts.map((workout, index) => (
                <WorkoutAccordion workout={workout} key={index} />
          ))}
        </List.Section>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 5,
  },
  text: {
    fontSize: 42,
  },
});

export default ProgramScreen;