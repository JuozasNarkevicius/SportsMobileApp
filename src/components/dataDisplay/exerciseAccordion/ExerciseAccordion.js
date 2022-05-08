import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import videoService from '../../../services/video';

function ExerciseAccordion({ exercise }) {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      style={styles.accordionItem}
      titleStyle={styles.itemText}
      title={exercise.name}
      theme={{ colors: { text: styles.itemText.color } }}
      expanded={expanded}
      onPress={handlePress}
    >
      <List.Item
        title={`Sets: ${exercise.sets}`}
        titleStyle={styles.itemText}
        style={styles.listItem}
      />
      <List.Item
        title={`Reps: ${exercise.reps}`}
        titleStyle={styles.itemText}
        style={styles.listItem}
      />
      <List.Item
        title={`Rest: ${exercise.rest}`}
        titleStyle={styles.itemText}
        style={styles.listItem}
      />
      {exercise.description ? (
        <List.Item
          style={styles.listItem}
          titleStyle={styles.itemText}
          descriptionStyle={styles.itemText}
          title="Description:"
          description={exercise.description}
          descriptionNumberOfLines={100}
        />
      ) : null}
      {exercise.videoUrl ? (
        <View style={{ marginTop: 70, marginLeft: 5, marginRight: 5 }}>
          <YoutubePlayer
            height={300}
            videoId={videoService.getIdFromUrl(exercise.videoUrl)}
          />
        </View>
      ) : null}
    </List.Accordion>
  );
}

export default ExerciseAccordion;
