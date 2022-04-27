import React, { useState, useEffect } from 'react';
import {
  ScrollView, View, Text, ImageBackground,
} from 'react-native';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import programService from '../../repositories/program';
import styles from './styles';
import ProgramsList from '../../components/dataDisplay/programsList/ProgramsList';

function ProgramsListScreen({ navigation }) {
  const [programs, setPrograms] = useState();
  const [followedPrograms, setFollowedPrograms] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getPrograms = async () => {
    const programsResponse = await programService.getAllProgramsAPI();
    const followedProgramsResponse = await programService.getAllFollowedProgramsAPI();
    setPrograms(programsResponse.data);
    setFollowedPrograms(followedProgramsResponse.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPrograms();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <ImageBackground source={require('../../assets/images/phone_background.png')} style={styles.image}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>My own programs</Text>
          <ProgramsList navigation={navigation} programs={programs} />
          <Text style={styles.text}>My followed programs</Text>
          <ProgramsList navigation={navigation} programs={followedPrograms} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default ProgramsListScreen;
