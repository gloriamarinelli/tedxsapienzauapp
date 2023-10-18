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
      question: "Come troverò l'Aula Magna?",
      answer:
        "Potrai recarti presso l’Aula Magna tramite l’ingresso laterale del Palazzo del Rettorato, raggiungendo il secondo piano. Ad ogni modo, non preoccuparti: consulta la mappa!",
    },
    {
      question: "Come avverrà l'accredito all'evento?",
      answer:
        "Gli accrediti avverranno dalle ore 08:45 alle ore 09:30. Ti basterà mostrare ai volontari TEDxSapienzaU il QRCode del biglietto che avrai ricevuto in fase di prenotazione.",
    },
    {
      question: "Quanto durerà l'evento?",
      answer:
        "L’evento si svolgerà dalle ore 09:30 alle ore 17:00. Non ti preoccupare, avrai modo di sgranchirti le gambe: sono previsti ben due momenti di break!",
    },
    {
      question: "Come potrò ritirare il mio lunch box?",
      answer:
        "Potrai ritirare il tuo lunch box presso il Village TEDxSapienzaU, durante la pausa prevista dalle ore 13:30 alle ore 15:00.",
    },
    {
      question:
        "Ho delle intolleranze/sono vegetarian*, potrò ritirare un lunch box adatto alle mie esigenze? ",
      answer:
        "Certamente. I lunch box sono pensati per essere inclusivi: tutti i pasti saranno vegetariani, gluten free o vegani. Per ulteriori indicazioni su questo punto, contattaci tramite l'indirizzo mail info@tedxsapienzau.com.",
    },
    {
      question: "Ho difficoltà motorie, potrò portare un accompagnatore?",
      answer:
        "Se hai difficoltà motorie, ti basterà farcelo sapere: un posto sarà riservato al tuo accompagnatore. Contattaci tramite l’indirizzo mail info+biglietti@tedxsapienzau.com",
    },
    {
      question: "Ho bisogno di ulteriori informazioni, a chi posso rivolgermi?",
      answer:
        "Se hai bisogno di ulteriori informazioni, non esitare a contattare i volontari TEDxSapienzaU tramite l’indirizzo mail info@tedxsapienzau.com.",
    },
  ];

  const iconRotationValues = faqData.map(
    () => useRef(new Animated.Value(0)).current);

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
    backgroundColor: "#0b0c0e",
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
    color: "#eb0028",
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  answerText: {
    color: "lightgrey",
    fontSize: RFValue(16),
    padding: 10,
    textAlign: "justify",
  },
});

export default FAQ;
