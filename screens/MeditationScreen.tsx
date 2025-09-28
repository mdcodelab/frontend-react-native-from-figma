import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import MeditationCard from '../components/MeditationCard';
import { dummyData } from '../data/data';
import { useNavigation } from 'expo-router';

function MeditationScreen() {
    const tabsArray = ['Live', 'Recorded'];
    const ACTIVE_BG = 'rgba(117, 86, 59, 1)';
    const ACTIVE_TEXT = '#fff';
    const INACTIVE_TEXT = 'rgba(44, 32, 22, 1)';

    const [selectedTab, setSelectedTab] = React.useState(tabsArray[0]);

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            Button
        title="Go to Contact Us"
        onPress={() => navigation.navigate("Contact Us")}
      />
            <Text style={styles.title}>Meditations</Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </Text>

            <View style={styles.tabs}>
                {tabsArray.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setSelectedTab(tab)}
                        style={[
                            styles.tab,
                            selectedTab === tab
                                ? { backgroundColor: ACTIVE_BG, borderColor: ACTIVE_BG }
                                : styles.tabInactive,
                        ]}
                        accessibilityRole="button"
                        accessibilityState={{ selected: selectedTab === tab }}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                { color: selectedTab === tab ? ACTIVE_TEXT : INACTIVE_TEXT },
                            ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Lista cu meditații */}
            <FlatList
                data={dummyData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MeditationCard image={item.image} title={item.title}
                    date={item.date} icon={item.icon}/>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{
                    marginBottom: vs(16),
                    justifyContent: 'space-between',
                }}
            />
        </View>
    );
}

export default MeditationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: s(20),
        fontWeight: '600',
        letterSpacing: 0.3,
        marginTop: vs(8),
        color: 'rgba(29, 21, 15, 1)',
    },
    description: {
        fontSize: s(14),
        fontWeight: '400',
        marginTop: vs(8),
    },
    tabs: {
        flexDirection: 'row',
        width: s(320),
        height: vs(42),
        gap: s(10),
        marginTop: vs(10),
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: vs(10),
    },
    tab: {
        width: s(155),
        height: vs(32),
        paddingHorizontal: s(12),
        borderRadius: s(8),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(117, 86, 59, 1)',
    },
    tabInactive: {
        backgroundColor: 'transparent',
    },
    tabText: {
        fontSize: s(14),
        fontWeight: '600',
    },
});
