import React, { useState, useContext } from "react";
import { LanguageContext } from "../../App.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import global from "../../resources/global.json";

const windowWidth = Dimensions.get("window").width;
const PlaceholderImage = require("../images/Red-Circle.png");

const speakersBio = {
  "Damiano Tullio":
    "Damiano Tullio è un antropologo, divulgatore, naturalista, Formatore in AntropoEcologia, e creatore della pratica del Rewilding Esistenziale. Nel 2007 fonda Antropostudio progetto interdisciplinare dove Antropologia, Ecologia ed Outdoor si incontrano per dar vita ad esperienze formative volte alla comprensione del rapporto primordiale che lega la nostra specie agli ambienti selvaggi. ",
  "Ilaria Lucrezia Rossi": "Descrizione di Ilaria Lucrezia Rossi",
  "Edward von Freymann":
    "Edward von Freymann: un padre che dopo la morte prematura della sua unica figlia Gaia, ha costituito la fondazione Gaia von Freymann per tenere sempre vivo il suo ricordo andando nelle scuole insieme alla polizia stradale a sensibilizzare i ragazzi nell'educazione stradale e l'abbattimento delle barriere architettoniche. Dopo 2 processi, ha messo a disposizione gratuitamente i propri avvocati e psicologi per le famiglie vittime della strada.  ",
  "Riccardo Basilone":
    "Riccardo Basilone ha 24 anni ed è nato e cresciuto a Toronto, in Canada. Ha imparato l'italiano dopo essersi trasferito a Milano, dove ha frequentato il liceo classico e si è laureato in Fisica. Vive a Roma da due anni, per finire i suoi studi magistrali di Fisica e per suonare nelle strade della città. L'arte di strada è il suo lavoro, che gli dà la possibilità di comunicare ogni giorno con il resto del mondo, attraverso la sua musica. Gli esseri umani sono gli unici animali in grado di esprimere incomprensione. Come facciamo a capirci tra di noi, e perché vogliamo di farlo? Il discorso di Riccardo esplora la comunicazione umana attraverso la storia della sua vita. L'arte e la scienza fanno trionfare la civiltà umana in un problema che all'apparenza sembra semplice, ma nasconde complessità di livello filosofico.",
  "Gloria Schito":
    "Gloria Schito, in arte @glojoined, è una fashion content creator e imprenditrice. Classe 1995, muove i suoi primi passi nel mondo del digitale giovanissima grazie alla sua passione: la moda. In breve tempo crea una community solida e affiatata, con cui condivide look, consigli, pensieri. Nel frattempo è Ingegnere informatico e si specializza in management engineering. Dopo qualche anno, nel 2021, Gloria arriva anche nelle librerie con una guida su come trovare il proprio stile, intitolata 'A far la moda comincia tu'. La sua innata curiosità l'ha sempre spinta a cercare e innovare, e recentemente è atterrata nel mondo del Metaverso, creando il concetto di Metafashion. Metafashion è un termine che  identifica una moda innovativa nel metaverso, che a differenza  sarà più interattiva e stimolante di quella reale, offrendo un'esperienza di shopping immersiva svolta digitalmente comodamente da casa.",
  "Matteo Cervellini":
    "Matteo Cervellini, fisioterapista di 25 anni. Dall’influenza di Youtubers famosi e libri di crescita personale, ha spesso inseguito il successo per sentirsi soddisfatto, fino al momento in cui ha realizzato di non essere per niente felice. Da un anno sta recuperando tutto il tempo passato ad ispirarsi ad un eroe che non sarebbe mai diventato, sperimenta esperienze come se fosse un bambino che non conosce il mondo. Gli piace far sorridere le persone, la montagna e il cibo gratis. ",
  "Ana Estrela":
    "Ana Estrela, nata a Salvador di Bahia, Brasile, è una ballerina e assistente di coreografia presso la 'Companhia Brasileira de Danças Populares'. Ha dedicato la sua arte alla promozione di percorsi di socializzazione per ragazzi di strada, bambini e adolescenti a rischio, nonché per persone con abilità diverse e pazienti psichiatrici, inizialmente in Brasile e successivamente in Italia a partire dal 1998. Nel 2008, Ana ha fondato a Bari l'associazione Origens, che si impegna a promuovere la cultura brasiliana attraverso l'arte, la gastronomia e eventi culturali, evolvendosi nel tempo in un'associazione multietnica. Nel 2013, ha avuto l'idea di utilizzare la cucina come mezzo per connettere le persone e come percorso professionale. Così, ha creato Ethnic Cook, un laboratorio in cui rifugiati e migranti, soprattutto donne, possono apprendere un mestiere, interagire tra loro, abituarsi alle diversità, scambiare idee e competenze. Il progetto ha ottenuto finanziamenti dalla Regione Puglia, dal comune e da una fondazione privata in collaborazione con l'antitratta. È stato riconosciuto da entità come l'UNHCR e l'Università di Scienze Gastronomiche di Pollenzo per il suo contributo stimolante e di supporto all'integrazione dei partecipanti. L'Università di Bari, insieme alla Fondazione ISMU, ha selezionato il progetto come una delle tre migliori iniziative nel Sud Italia che valorizzano le competenze dei migranti. Per il suo impegno nell'inclusione sociale attraverso il cibo, Ana Estrela ha ricevuto una menzione speciale al Basque Culinary World Prize 2021 e è stata scelta come uno dei '20 volti del cibo 2021' nella sezione empowerment da Cook, la rubrica del Corriere della Sera. Nel 2020, insieme alle sue compagne, ha aperto il Bistrot Sociale Multietnico nel cuore di Bari e ha pubblicato il libro 'Ethnic Cook - Sapori e storie dal Mondo'. Attualmente, Ana dirige il Bistrot, organizza eventi e corsi di formazione dedicati alle donne rifugiate e presta consulenza alle associazioni interessate a sviluppare progetti simili. Rappresenta il Coordinamento Diaspore in Puglia per la cooperazione internazionale.",
  "Nina Lambarelli":
    "Nina Lambarelli è una poetessa performativa. Ha debuttato con il suo spettacolo 'L'appel du vide' nel 2020 ed ha continuato per la strada del Poetry Slam e del teatro d'improvvisazione, dove lo spettacolo 'A mille ce n'è' ha preso forma per arrivare al Back to Zero Awards 2023. Ha partecipato come artista per uno spettacolo della FAO ed al festival 'Arterie - Rassegna di Ipotesi espressive'. È prossima alla laurea in Lingue e letterature straniere dopo aver passato un periodo alla Sorbonne Nouvelle di Parigi e prevede di continuare gli studi in ambito postcoloniale.",
  "Marcello Ienca":
    "Marcello Ienca, nato nel 1988, ha alle spalle una lunga carriera nel campo delle neurotecnologie: è stato studente di filosofia e scienze cognitive presso varie università sparse in giro per il mondo, tra cui la Sapienza (Roma), Humboldt (Berlino) e la New York University. Nel 2018 ha conseguito il dottorato in etica biomedica presso l'Università di Basilea, per poi lavorare come ricercatore presso l'ETH di Zurigo. In tempi più recenti ha fondato l'Intelligent Systems Ethics Group presso l'EPFL ed è stato visiting scholar all'Università di Oxford. Dal 2023 è titolare della cattedra di Etica delle IA e delle Neuroscienze presso il Politecnico di Monaco (TUM) in Germania. Utilizza metodi teorici ed empirici per indagare le implicazioni etiche, sociali e politiche di tecnologie come le BCI ('Brain Computer Interface') e gli algoritmi di elaborazione dei Big Data, concentrandosi su argomenti come la relazione tra intelligenza artificiale e cognizione umana. È noto per il suo lavoro pionieristico sui cosiddetti 'neurodiritti' (neurorights), tema portante del TED Talk che porterà sul palco della Sapienza: un ritorno alle origini non solo nell'edizione (Back To Zero), ma anche dal punto di vista professionale.  ",
  "Rose Villain":
    "Nata a Milano e poi trasferitasi a New York, la cantante e autrice ha all'attivo milioni di stream. Rose Villain ha tutte le carte in regola per ribaltare l'attuale scena musicale, curando lei stessa in prima persona la creatività di ogni progetto artistico che la riguarda.  A gennaio 2023 esce il suo primo lavoro discografico, 'Radio Gotham': un album esplosivo, inaspettato e ricco di tematiche personali, che ha entusiasmato pubblico e critica.",
  "Silvano Onofri": "Descrizione di Silvano Onofri ",
  "Nakita Aboya":
    "Originaria del Camerun, Nakita ha iniziato il suo dottorato di ricerca in Economia a 20 anni presso Sapienza Università di Roma. Nel 2020 è anche entrata a far parte del prestigioso M.I.T/Harvard Economics Mentoring Program. Ora lavora per la FAO. Provenendo da un ambiente umile, il suo discorso sarà incentrato su come sia riuscita a raggiungere le maggiori istituzioni in giovane età, nonostante le difficoltà di viaggiare da sola verso l'Europa.",
};

const speakersBioEng = {
  "Damiano Tullio":
    "Damiano Tullio is an anthropologist, popularizer, naturalist, educator in AnthropoEcology, and creator of the practice of Existential Rewilding. In 2007, he founded Antropostudio, an interdisciplinary project where Anthropology, Ecology and Outdoor meet to create educational experiences aimed at understanding the primordial relationship that binds our species to wild environments.",
  "Ilaria Lucrezia Rossi":
    "Ilaria Rossi: physics graduate and science populariser. On her social channels, she fights for women's empowerment and gender equality in STEM disciplines, hoping to contribute to an academic environment free of discrimination.",
  "Edward von Freymann":
    "Edward von Freymann: a father who, after the untimely death of his only daughter Gaia, set up the Gaia von Freymann Foundation to always keep her memory alive by going to schools together with the traffic police to raise awareness among young people in road safety education and the removal of architectural barriers. After two trials, he made his lawyers and psychologists available free of charge to families affected by road accidents.  ",
  "Riccardo Basilone":
    "How do we communicate? And why do we do it? This subject has fascinated Riccardo from a young age, ever since he moved to Italy from Canada. A physics student at university, it is with the notes of piano, guitar and voice that Riccardo brings us into the most human dimension of our being together: communicating, and loving each other.",
  "Gloria Schito":
    "Gloria Schito is an Italian entrepreneur and influencer working in the fashion world. Author of the book 'A far la moda comincia tu', she argues for the idea that fashion is an industry for everyone and that it is an excellent field for experimentation and innovation: this is the case with Metafashion.",
  "Matteo Cervellini":
    "A 25-year-old physiotherapist, Matteo often chased success to feel satisfied, until the moment he realized that it did not make him happy. The hero he was chasing was completely alien to him, and ever since he understood this, he started to live his life again as he never had before.",
  "Ana Estrela":
    "Born in Salvador di Bahia in Brazil, she became a dancer and assistant choreographer for the 'Companhia Brasileira de Danças Populare'.  In 2013, in Italy, she had the intuition to use cooking as a bridge between people, as well as a career path. She then founded Ethnic Cook, a workshop where refugees and immigrants, especially women, can learn a job and get to know each other, get used to each other, exchange ideas and skills, be there.",
  "Nina Lambarelli":
    "Nina Lambarelli is a performance poet. She debuted with her show 'L'appel du vide' in 2020 and continued down the road of Poetry Slam and improvisational theater, where the show 'A thousand is one' took shape to reach the Back to Zero Awards 2023. She participated as an artist in an FAO show and in the festival 'Arterie - Rassegna di Ipotesi espressive'. She is close to graduating in Foreign Languages and Literatures after spending a period at the Sorbonne Nouvelle in Paris and plans to continue her studies in the postcolonial field.",
  "Marcello Ienca":
    "Marcello Ienca is a Professor of Ethics of AI and Neuroscience at the Technical University of Munich and a Senior Scientist at the Swiss Federal Institute of Technology, in Lausanne. His research focuses on the ethics of human-machine interaction, with a particular interest in the responsible development and human rights implications of neurotechnologies, artificial intelligence, big data, robotics and virtual environments. Marcello Ienca will address these topics on the TEDx stage, with a specific emphasis on the concept of 'neurorights.'",
  "Rose Villain":
    "Born in Milan and later settled in New York, the singer and songwriter has millions of streams to her credit. Rose Villain has all the credentials to turn the current music scene upside down, curating the creativity of each of her artistic projects herself. In January 2023, she released her first record, 'Radio Gotham': an explosive, unexpected and thematically personal album, which delighted audiences and critics alike.",
  "Silvano Onofri": "Descrizione di Silvano Onofri ",
  "Nakita Aboya":
    "A native of Cameroon, Nakita started her Ph.D. Economics at 20 years old at Sapienza University of Rome. She also joined the prestigious M.I.T/Harvard Economics Mentoring Program in 2020. She now works for the FAO. Coming from a humble background, her speech will be centered around how she made it to top institutions at a young age despite the difficulties of traveling alone to Europe.",
};

const Speaker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
  );
  const [currentSpeakerImage, setCurrentSpeakerImage] = useState("");
  const [currentSpeaker, setCurrentSpeaker] = useState("");

  const { language } = useContext(LanguageContext);

  const DescriptionModal = ({ description }) => {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "85%",
              height: "60%",
              backgroundColor: "#fff",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              padding: 15,
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}
            >
              {currentSpeaker}
            </Text>
            <View style={{ height: "80%" }}>
              <ScrollView>
                <Text
                  style={{
                    fontSize: 15,
                    color: "black",
                    lineHeight: 20,
                    textAlign: "justify",
                  }}
                >
                  {description}
                </Text>
              </ScrollView>
            </View>
            <Pressable
              style={{
                position: "absolute",
                bottom: 20,
                backgroundColor: global.COLORS.RED,
                borderRadius: 10,
              }}
            >
              <Text
                onPress={() => setModalVisible(false)}
                style={{
                  color: "white",
                  fontSize: 16,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  const SpeakerCard = ({ name, image, description, time, circlePosition }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "#000",
          position: "relative",
          marginBottom: 20,
        }}
      >
        <Image
          source={image}
          style={{
            position: "absolute",
            maxHeight: 250,
            width: "100%",
            borderRadius: 10,
          }}
        />
        <LinearGradient
          style={{ width: "100%", height: "100%", position: "absolute" }}
          colors={["transparent", "rgba(0, 0, 0, 0.65)"]}
          locations={[0, 0.8]}
        >
          <Pressable
            style={{ position: "absolute", bottom: 0, left: 0 }}
            onPress={() => {
              setModalVisible(true);
              setCurrentDescription(
                language == "ita" ? speakersBio[name] : speakersBioEng[name]
              );
              setCurrentSpeakerImage(image);
              setCurrentSpeaker(name);
            }}
          >
            <Text style={styles.nameText}>
              {name}
              {"  "} <Feather name="info" size={24} color="white" />
            </Text>
          </Pressable>
          <ImageBackground
            source={PlaceholderImage}
            style={{
              position: "absolute",
              right: circlePosition === "left" ? null : 5,
              left: circlePosition === "left" ? 5 : null,
              top: 5,
              width: 80,
              aspectRatio: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              {time}
            </Text>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DescriptionModal description={currentDescription} />
      <ScrollView>
        {/**
         * FIRTS BLOCK
         */}
        <SpeakerCard
          name={"Damiano Tullio"}
          image={require("../images/speakers23/tullio.webp")}
          time={"16:00"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Ilaria Lucrezia Rossi"}
          image={require("../images/speakers23/rossi.webp")}
          time={"10:30"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Edward von Freymann"}
          image={require("../images/speakers23/von_freymann.webp")}
          time={"11:00"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Riccardo Basilone"}
          image={require("../images/speakers23/basilone.webp")}
          time={"11:15"}
          circlePosition={"left"}
        />
        {/**
         * SECOND BLOCK
         */}
        <SpeakerCard
          name={"Gloria Schito"}
          image={require("../images/speakers23/schito.webp")}
          time={"12:00"}
        />
        <SpeakerCard
          name={"Matteo Cervellini"}
          image={require("../images/speakers23/cervellini.webp")}
          time={"12:15"}
        />
        <SpeakerCard
          name={"Ana Estrela"}
          image={require("../images/speakers23/estrela.webp")}
          time={"12:30"}
        />
        <SpeakerCard
          name={"Nina Lambarelli"}
          image={require("../images/speakers23/lambarelli.webp")}
          time={"12:45"}
        />
        {/**
         * THIRD BLOCK
         */}
        <SpeakerCard
          name={"Marcello Ienca"}
          image={require("../images/speakers23/tullio.webp")}
          time={"15:30"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Rose Villain"}
          image={require("../images/speakers23/villain.webp")}
          time={"15:45"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Silvano Onofri"}
          image={require("../images/speakers23/tullio.webp")}
          time={"16:00"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Nakita Aboya"}
          image={require("../images/speakers23/aboya.webp")}
          time={"16:15"}
          circlePosition={"left"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0c0e",
    paddingTop: 20,
  },
  nameText: {
    fontSize: RFValue(20),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    position: "absolute",
    bottom: 5,
    left: 10,
  },
  image: {
    width: windowWidth,
    height: 200,
    resizeMode: "contain",
  },
});

export default Speaker;
