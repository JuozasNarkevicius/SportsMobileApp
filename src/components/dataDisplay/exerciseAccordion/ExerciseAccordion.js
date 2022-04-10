import React, { useState } from 'react';
import { List } from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';

function ExerciseAccordion({ exercise }) {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title={exercise.name}
      expanded={expanded}
      onPress={handlePress}
    >
      <List.Item title={`Sets: ${exercise.sets}`} />
      <List.Item title={`Reps: ${exercise.reps}`} />
      <List.Item title={`Rest: ${exercise.rest}`} />
      {exercise.description ? (
        <List.Item
          title="Description:"
          description={exercise.description}
          descriptionNumberOfLines={100}
        />
      ) : null}
      {exercise.videoUrl ? (
        <YoutubePlayer
          height={300}
          videoId={exercise.videoUrl
            .substring(exercise.videoUrl.indexOf('=') + 1)}
        />
      ) : null}
    </List.Accordion>
  );
}

export default ExerciseAccordion;
