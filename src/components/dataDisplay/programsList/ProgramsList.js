import React from 'react';
import { List } from 'react-native-paper';
import styles from './styles';

function ProgramsList({ navigation, programs }) {
  return (
    <List.Section>
      {programs.map((program) => (
        <List.Item
          style={styles.listItem}
          titleStyle={styles.itemText}
          key={program.id}
          title={program.name}
          onPress={() => navigation
            .navigate('Program', {
              programId: program.id,
              programName: program.name,
            })}
        />
      ))}
    </List.Section>
  );
}

export default ProgramsList;
