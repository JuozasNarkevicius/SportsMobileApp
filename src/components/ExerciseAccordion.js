import React from "react";
import { List } from 'react-native-paper';

const ExerciseAccordion = ({ exercise }) => {
    const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title={exercise.name}
      expanded={expanded}
      onPress={handlePress}>
        <List.Item title={`Sets: ${exercise.sets}`} />
        <List.Item title={`Reps: ${exercise.reps}`} />
        <List.Item title={`Rest: ${exercise.rest}`} />
    </List.Accordion>
  );
}

export default ExerciseAccordion;