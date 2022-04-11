import React from 'react';
import { List } from 'react-native-paper';
import ExerciseAccordion from '../exerciseAccordion/ExerciseAccordion';
import styles from './styles';

function WorkoutAccordion({ workout }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      style={styles.accordionItem}
      titleStyle={styles.itemText}
      title={workout.name}
      theme={{ colors: { text: styles.itemText.color } }}
      expanded={expanded}
      onPress={handlePress}
    >
      {workout.exercises.map((exercise) => (
        <ExerciseAccordion key={exercise.id} exercise={exercise} />
      ))}
    </List.Accordion>
  );
}

export default WorkoutAccordion;
