import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import LoadingIndicator from "../components/LoadingIndicator";
import programService from "../repositories/program";

const ProgramsListScreen = ({ navigation }) => {
    const [programs, setPrograms] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPrograms();
    }, []);

    const getPrograms = async () => {
        const response = await programService.getAllProgramsAPI();
        setPrograms(response.data);
        setIsLoading(false);
    }

    if (isLoading) {
        return <LoadingIndicator/>
    }

  return (
      <ScrollView style={styles.scrollView}>
        <List.Section>
            {programs.map((program, index) => (
                <List.Item
                    key={index}
                    title={program.name}
                    left={props => <List.Icon {...props} icon="folder" />}
                    onPress={() => navigation.navigate('Program', { programId: program.id, programName: program.name })}
                />
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

export default ProgramsListScreen;