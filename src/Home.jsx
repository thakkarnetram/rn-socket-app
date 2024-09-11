import React , { useEffect }from "react";
import { Text,View ,StyleSheet} from "react-native";


const Home = () => {


    return (
        <View>
            <Text style={styles.textColor}>
                Hello???
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textColor:{
        color:'#000000',
        margin:25,
        fontSize:20,
    }
})

export default Home;