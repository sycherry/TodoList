import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { AddAndUpdateProps } from './addAndUpdate.props'
import { styles } from './addAndUpdate.styles';
import { palette } from "../styles/color"

export function AddAndUpdate(props: AddAndUpdateProps) {
    const { text, disabled, button, addAndUpdateTodoList, onChangeText } = props
    return (
        <View style={styles.addWrap}>
            <View style={styles.colset}>
                <View style={styles.col1}>
                    <TextInput
                        testID="input"
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={text} placeholder="Enter here"
                        placeholderTextColor={palette.gray} />
                </View>

                <View style={styles.col2}>
                    <TouchableOpacity
                        testID="button"
                        disabled={disabled}
                        style={[styles.addButton, disabled ? styles.addButtonDisabled : null]}
                        onPress={() => addAndUpdateTodoList()}>
                        <Text style={styles.addText}>{button}</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}
