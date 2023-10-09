import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "react-native-vector-icons/Feather";

const FAQ = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);

  // domande e risposte
  const faqData = [
    {
      question: "Domanda 1?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Domanda 2?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Domanda 3?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Domanda 4?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Domanda 5?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Domanda 6?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const iconRotationValues = faqData.map(
    () => useRef(new Animated.Value(0)).current
  );

  const toggleAnswer = (index) => {
    Animated.timing(iconRotationValues[index], {
      toValue: selectedFaqIndex === index ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setSelectedFaqIndex(selectedFaqIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity
              onPress={() => toggleAnswer(index)}
              style={styles.faqQuestion}
            >
              <Text style={styles.questionText}>{item.question}</Text>
              <Animated.View>
                <Feather
                  name={selectedFaqIndex === index ? "x" : "plus"}
                  size={24}
                  color="white"
                  style={styles.icon}
                />
              </Animated.View>
            </TouchableOpacity>
            {selectedFaqIndex === index && (
              <Text style={styles.answerText}>{item.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  faqItem: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  icon: {
    marginLeft: 10,
  },
  faqQuestion: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  questionText: {
    color: "#E62B1E",
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  answerText: {
    color: "lightgrey",
    fontSize: RFValue(16),
    padding: 15,
    textAlign: "justify",

  },
});

export default FAQ;
