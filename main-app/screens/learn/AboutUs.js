import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

class AboutUs extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                <Text>About Us Screen</Text>
                <View style={styles.container}>
                    <Text> We are an organization committed to strengthening the tourism sector as the main productive
                        activity of Galapagos, through the promotion, technical assistance and training of its members
                        and the community, guided by a principle of sustainable tourism. </Text>
                </View>
                <View style={styles.container}>
                    <Text> To be the organization that leads the representation of the tourism sector in the
                            Province under standards of excellence and ethics, promoting sustainable tourism
                            and a solidarity participation with its members and the community. </Text>
                </View>
                <View style={styles.container}>
                    <Text> Art. 5.- The Provincial Chamber of Tourism of Galapagos has the following objectives:
                        1. Promote the development of tourism and its services in general
                        in harmony with the need for conservation, preservation and management of the Galapagos Islands.
                        2. Ensure the prosperity of its members, providing cooperation and support for the development
                        of their activities and the necessary services in accordance with the legal provisions and the
                        present Statute. 3. Foster collaboration and understanding between the various social sectors
                        and tourism service providers, promoting the harmonious progress of the Galapagos province in
                        every aspect. 4. Stimulate cooperation between the private sector and the public sector for the
                        benefit of tourism. 5. Cooperate in the orientation of state policies and in the elaboration of
                        regulations regarding tourism, conservation and management of the Galapagos Islands. 6. To guide
                        the national and international public opinion on the problems that affect tourism, other
                        productive activities, the community and, in general, the Galapagos Islands, aiming at the
                        achievement of goals that benefit them. 7. All others provided in the Law and more regulations.
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text> The Provincial Chamber of Tourism of Galapagos CAPTURGAL,
                        is a non-profit organization created in 1996 (Ministerial Agreement No. 0013).
                        With its main office in Puerto Ayora, on the island of Santa Cruz, with its respective Chapters of San Cristóbal,
                        it serves its almost 100 associates of the four inhabited islands of the archipelago.
                        (Floreana Island is a parish of the San Cristóbal Municipal Government),
                        a who provides services in the fields of legal and technical advice, arbitration,
                        training and business references. In fulfilling its functions,
                        CAPTURGAL takes positive measures to ensure the conservation of these extraordinary islands.
                        Since its foundation, CAPTURGAL has worked determinedly and jointly with the Galapagos National
                        Park in order to promote tourism, without causing any damage to these unique ecosystems.  But
                        CAPTURGAL's job is also to take care of the Galapagos visitors, their comfort,
                        their safety, their well-being. In a word: offer them quality.
                        The Provincial Chamber of Tourism of Galapagos is at your service, to make your visit to these
                        enchanted islands unforgettable. Therefore, just enjoy it! </Text>
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default AboutUs;