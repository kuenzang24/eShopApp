import { StyleSheet, Image, SafeAreaView } from 'react-native';

export default function Header() {
    return (
        <SafeAreaView style={styles.Header}>
            <Image
            source={require('../assets/Logo.png')}
            resizeMode="contain"
            style={{height: 50}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 5
    }
});