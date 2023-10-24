import React, { useState, useRef, useContext } from "react";
import { LanguageContext } from "../../App.js";
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
import global from "../../resources/global.json";

const FAQ = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);
  const { language } = useContext(LanguageContext);

  // domande e risposte
  const faqDataita = [
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

  const faqDataeng = [
    {
      question: "Where can I find the Aula Magna?",
      answer:
        "You will be able to go to the Aula Magna via the side entrance of Palazzo del Rettorato, reaching the second floor. In any case, don't worry: You can consult the map!",
    },
    {
      question: "How can I check-in at the event?",
      answer:
        "The Check-in will take place from 08:45 am to 09:30 am. You will just need to show the TEDxSapienzaU volunteers the QRCode of the ticket you received when you made your reservation.",
    },
    {
      question: "How long will the event last?",
      answer:
        "The event will run from 09:30 to 17:00. Don't worry, you will have a chance to stretch your legs:  two break times are already planned!",
    },
    {
      question: "How can I pick up my lunch box?",
      answer:
        "You will be able to pick up your lunch box at the TEDxSapienzaU Village, during the scheduled break from 1:30 pm to 3:00 pm.",
    },
    {
      question:
        "I have intolerances/I am vegetarian, is there any lunch box suitable for my needs?",
      answer:
        "Absolutely. Lunch boxes are designed to be inclusive: all meals will be vegetarian, gluten free or vegan. For further guidance regarding the matter, please contact us via email info@tedxsapienzau.com. ",
    },
    {
      question:
        "I have mobility difficulties, will I be able to bring a companion?",
      answer:
        "If you have mobility difficulties, just let us know: a place will be reserved for your companion. Contact us via the email address info+biglietti@tedxsapienzau.com.",
    },
    {
      question: "I need some additional information, who can I contact?",
      answer:
        "If you need more information, please feel free to contact TEDxSapienzaU volunteers via email info@tedxsapienzau.com.",
    },
  ];

  const faqData = language === "ita" ? faqDataita : faqDataeng;

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
    color: global.COLORS.RED,
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
