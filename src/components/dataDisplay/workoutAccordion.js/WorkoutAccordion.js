import React from 'react';
import { List } from 'react-native-paper';
import ExerciseAccordion from '../exerciseAccordion/ExerciseAccordion';

function WorkoutAccordion({ workout }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title={workout.name}
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
