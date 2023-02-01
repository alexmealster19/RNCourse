import { StyleSheet } from 'react-native';
import { View, Text, Pressable } from 'react-native';

function GoalItem(props) {

    return (
        <Pressable
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
};

export default GoalItem;

const styles = StyleSheet.create({

    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        height: '75%',
        textAlign: 'center'
    },
    goalText: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25
    },
    pressedItem: {
        opacity: 0.5
    }
});
