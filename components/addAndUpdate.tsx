import { KeyboardAvoidingView, Platform, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { AddAndUpdateProps } from './addAndUpdate.props'

export function AddAndUpdate(props: AddAndUpdateProps) {
    const { text, disabled, button, addAndUpdateTodoList, onChangeText } = props

    return (
        <View style={styles.addWrap}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}>

                <View style={styles.colset}>
                    <View style={styles.col1}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => onChangeText(text)}
                            value={text} placeholder="Enter here"
                            placeholderTextColor="#666" />
                    </View>

                    <View style={styles.col2}>
                        <TouchableOpacity
                            disabled={disabled}
                            style={[styles.addButton, disabled ? styles.addButtonDisabled : null]}
                            onPress={() => addAndUpdateTodoList()}>
                            <Text style={styles.addText}>{button}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    addWrap: {
        width: '100%',
        backgroundColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        paddingTop: 20,
        paddingBottom: 25,
        paddingHorizontal: 15,
    },
    colset: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    col1: {
        width: '60%',
    },
    col2: {
        paddingLeft: 10,
        width: 'auto',
    },
    input: {
        fontSize: 16,
        color: '#000',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    addButton: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: 'rgba(1,69,166,1)',
        borderRadius: 18,
    },
    addText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    addButtonDisabled: {
        backgroundColor: 'rgba(1,69,166,.2)',
    }
});
