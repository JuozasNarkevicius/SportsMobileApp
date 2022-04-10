import React from "react";
import { List } from 'react-native-paper';
import ExerciseAccordion from "../components/ExerciseAccordion";

const WorkoutAccordion = ({ workout }) => {
    const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
      <List.Accordion
        title={workout.name}
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
            {workout.exercises.map((exercise, index) => (
                <ExerciseAccordion exercise={exercise} key={index} />
            ))}
      </List.Accordion>
  );
}

export default WorkoutAccordion;