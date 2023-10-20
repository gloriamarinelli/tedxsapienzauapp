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
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const PlaceholderImage = require("../images/Red-Circle.png");

const speakersBio = {
  "Damiano Tullio":
    "Damiano Tullio è un antropologo ,divulgatore, naturalista,Formatore in AntropoEcologia, e creatore della pratica del Rewilding Esistenziale. Nel 2007 fonda Antropostudio progetto interdisciplinare dove Antropologia, Ecologia ed Outdoor si incontrano per dar vita ad esperienze formative volte alla comprensione del rapporto primordiale che lega la nostra specie agli ambienti selvaggi.  Il suo vero spazio didattico sono  i luoghi  incontaminati, gran parte del suo lavoro consiste nel riavvicinare le persone alla natura selvaggia, che risiede nei  luoghi non antropizzati e nelle isole addormentate dell’anima,  troppo spesso lasciate dai più inesplorate. Dimensioni di avventura, consapevolezza ed evoluzione  personale che vedono  la loro completa realizzazione non solo nel suo lavoro di antropologo, ma anche  nelle sue attività di Guida Federtrek, e Formatore Nazionale CSEN per il Forestbathing,  che confluiscono  con un approccio integrato nel progetto Antropostudio, fondato nel 2007 e che, ad oggi, raggiunge con la sua missione centinaia di persone coinvolgendole in esperienze dirette sul campo ed attraverso le diverse presenze in seminari, congressi e trasmissioni , che hanno raccontato la storia del progetto Antropostudio. In questo paradigma, i boschi stessi, le grotte e le vette si trasformano in un’aula di lavoro in cui svolgere attività di Formazione in ambito  scolastico, aziendale e terapeutico per aprire le porte del proprio ascolto interiore verso l’indagine del mondo selvaggio che risiede dentro e fuori di noi.  Nei suoi corsi di formazione definisce questo metodo di riavvicinamento ad orientamento AntropoEcologico come Rewilding Esistenziale, un processo che permette un risveglio emozionale dell’individuo  attraverso il rapporto diretto con gli elementi naturali. Il Rewilding mira ad un reinserimento  dell’Uomo in contesti totalmente non antropizzati ed al suo riadattamento dal punto di vista esperienziale e psicologico verso l’autentico orizzonte archetipico Uomo/Natura.   Per realizzare tutto questo è costante durante questi progetti il riferimento alle società tradizionali studiate sul campo che ancora oggi conservano tali sopravvivenze primitive,  un patrimonio di saperi , competenze e tradizioni vernacolari fondamentali per il nostro futuro che debbono essere tutelati e tramandati alle generazioni future.  ",
  "Ilaria Lucrezia Rossi": "Descrizione di Ilaria Lucrezia Rossi",
  "Edward von Freymann": "Descrizione di Edward von Freymann ",
  "Riccardo Basilone":
    "Riccardo Basilone ha 24 anni ed è nato e cresciuto a Toronto, in Canada. Ha imparato l’italiano dopo essersi trasferito a Milano, dove ha frequentato il liceo classico e si è laureato in Fisica. Vive a Roma da due anni, per finire i suoi studi magistrali di Fisica e per suonare nelle strade della città. L’arte di strada è il suo lavoro, che gli dà la possibilità di comunicare ogni giorno con il resto del mondo, attraverso la sua musica. Gli esseri umani sono gli unici animali in grado di esprimere incomprensione. Come facciamo a capirci tra di noi, e perché vogliamo di farlo? Il discorso di Riccardo esplora la comunicazione umana attraverso la storia della sua vita. L’arte e la scienza fanno trionfare la civiltà umana in un problema che all’apparenza sembra semplice, ma nasconde complessità di livello filosofico.",
  "Gloria Schito":
    "Gloria Schito, in arte glojoined, è una fashion content creator e imprenditrice. Classe 1995, muove i suoi primi passi nel mondo del digitale giovanissima grazie alla sua passione: la moda. In breve tempo crea una community solida e affiatata, con cui condivide look, consigli, pensieri. Nel frattempo è Ingegnere informatico e si specializza in management engineering. Dopo qualche anno, nel 2021, Gloria arriva anche nelle librerie con una guida su come trovare il proprio stile, intitolata “A far la moda comincia tu”. La sua innata curiosità l’ha sempre spinta a cercare e innovare, e recentemente è atterrata nel mondo del Metaverso, creando il concetto di Metafashion. Metafashion è un termine che  identifica una moda innovativa nel metaverso, che a differenza  sarà più interattiva e stimolante di quella reale, offrendo un’esperienza di shopping immersiva svolta digitalmente comodamente da casa.",
  "Matteo Cervellini":
    "Matteo Cervellini, fisioterapista di 25 anni. Dall’influenza di Youtubers famosi e libri di crescita personale, ha spesso inseguito il successo per sentirsi soddisfatto, fino al momento in cui ha realizzato di non essere per niente felice. Da un anno sta recuperando tutto il tempo passato ad ispirarsi ad un eroe che non sarebbe mai diventato, sperimenta esperienze come se fosse un bambino che non conosce il mondo. Gli piace far sorridere le persone, la montagna e il cibo gratis. ",
  "Ana Estrela":
    "Mi chiamo Ana Estrela .Sono nata a Salvador di Bahia, Brasile dove sono diventata ballerina e assistente di coreografia della “Companhia Brasileira de Danças Populare”. Ho utilizzato la mia arte nella promozione di percorsi di socializzazione per ragazzi di strada, bambini e adolescenti a rischio, persone con abilità altre, pazienti psichiatrici prima in Brasile poi in Italia dal 1998.  Nel 2008 fondai a Bari l'associazione Origens, che promuove la cultura brasiliana attraverso l'arte, la gastronomia ed eventi culturali e che negli anni è diventata un’associazione multietnica.  Nel 2013 ho avuto l'intuizione di usare la cucina come ponte tra le persone, oltre che come percorso professionalizzante. Fondai allora Ethnic Cook, un laboratorio in cui rifugiati e immigrati, sopratutto donne, possono imparare un lavoro e conoscersi, abituarsi all'altro, scambiare idee e competenze, esserci. Il progetto vince un finanziamento della Regione Puglia, un finanziamento comunale e un finanziamento di una fondazione privata in partenariato con l’ antitratta. Viene invitato da UNHCR e dell’Università di Scienze Gastronomiche di Pollenzo per il modo in cui stimola e sostiene l'integrazione delle partecipanti. l'Università di Bari, insieme a Fondazione ISMU,  sceglie il progetto come una delle tre migliori realtà che, al Sud, valorizzano le competenze dei migranti. Per l’impegno nell'inclusione sociale attraverso il cibo ho ricevuto una menzione speciale della Basque Culinary world prize 2021, sono stata scelta come uno dei 20 volti del cibo 2021 sezione empowerment da Cook, rubrica del Corriere della Sera. Nel 2020 con le mie compagne/sorelle abbiamo aperto il Bistrot Sociale Multietnico nel cuore della città di Bari e  stampato il nostro libro “Ethnic Cook – Sapori e storie dal Mondo”. In questo momento dirigo il Bistrot e organizzo gli eventi ed i corsi di formazione dedicati alle donne rifugiate, faccio la consulente per le associazioni che vogliono sviluppare progetti simili. Rappresento il Coordinamento Diaspore in Puglia per la cooperazione internazionale.",
  "Nina Lambarelli":
    'Nina Lambarelli è una poetessa performativa. Ha debuttato con il suo spettacolo "L\' appelle du vide" nel 2020 ed ha continuato per la strada del Poetry Slam e del teatro d\'improvvisazione, dove lo spettacolo " A mille ce n\'è " ha preso forma per arrivare al TedxAwards Sapienza 2023. Ha partecipato come artista per uno spettacolo della FAO ed al festival "Arterie - Rassegna di Ipotesi espressive". È prossima alla laurea in Lingue e letterature straniere dopo aver passato un periodo alla Sorbonne Nouvelle di Parigi e prevede di continuare gli studi in ambito postcoloniale.',
  "Marcello Ienca": "Descrizione di Marcello Ienca ",
  "Rose Villain": "Descrizione di Rose Villain",
  "Silvano Onofri": "Descrizione di Silvano Onofri ",
  "Nakita Aboya":
    "A genius brain in a Gen Z body, Aboya Nakita started her Ph.D. Economics at 20 years old at La Sapienza University of Rome. She does a co-direction with the renowned Philippe Aghion, Harvard graduate and Professor at the Paris School of Economics, where she took advanced doctoral courses and carried research in the development group. During her time in the French Capital, she mixed research with teaching assistantships and was also in the organizing team of the Second World Inequality Conference. Her research interests lie between macroeconomics and development economics: fiscal policies, inequality, and poverty. Professionally, she has worked for leading institutions such as the World Bank and the United Nations. Ranked as a High Potential Individual (H.P.I), she received many distinctions for starting university at 14 years old as well as her commitment to fighting poverty and inequality. A native of Cameroon, Nakita joined the prestigious M.I.T/Harvard Economics Mentoring Program in 2020 during which she was mentored by Antoine Levy, another High Potential Individual and Ph.D. Economics holder from the Massachusetts Institute of Technology, USA. Coming from a humble background, her speech will be centered around how she made it to top institutions at a young age despite the difficulties of traveling alone to Europe. Vision, Action, and Kindness – three ingredients of her recipe.  ",
};

const speakersBioEng = {
  "Riccardo Basilone":
    "Riccardo Basilone is 24 years old and was born and raised in Toronto, Canada. He learned Italian after moving to Milan, where he attended classical high school and graduated in Physics. He has been living in Rome for two years, finishing his master's degree in Physics and playing in the streets of the city. Street art is his job, which gives him the opportunity to communicate with the rest of the world every day through his music. Human beings are the only animals capable of expressing incomprehension. How do we understand each other, and why do we want to? Riccardo's speech explores human communication through his life story. Art and science triumph over human civilisation in a problem that on the surface seems simple, but hides complexities on a philosophical level.",
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
                backgroundColor: "#eb0028",
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
          image={require("../images/speakers/damiano_tullio.jpg")}
          time={"10:15"}
        />
        <SpeakerCard
          name={"Ilaria Lucrezia Rossi"}
          image={require("../images/speakers/ilaria_rossi.jpg")}
          time={"10:30"}
          circlePosition={"left"}
        />
        <SpeakerCard
          name={"Edward von Freymann"}
          image={require("../images/speakers/von_freymann.jpg")}
          time={"11:00"}
          circlePosition={"right"}
        />
        <SpeakerCard
          name={"Riccardo Basilone"}
          image={require("../images/speakers/riccardo_basilone.jpg")}
          time={"11:15"}
        />
        {/**
         * SECOND BLOCK
         */}
        <SpeakerCard
          name={"Gloria Schito"}
          image={require("../images/speakers/gloria_schito.jpg")}
          time={"12:00"}
        />
        <SpeakerCard
          name={"Matteo Cervellini"}
          image={require("../images/speakers/matteo_cervellini.jpg")}
          time={"12:15"}
        />
        <SpeakerCard
          name={"Ana Estrela"}
          image={require("../images/speakers/ana_estrela.jpg")}
          time={"12:30"}
        />
        <SpeakerCard
          name={"Nina Lambarelli"}
          image={require("../images/speakers/nina.jpg")}
          time={"12:45"}
        />
        {/**
         * THIRD BLOCK
         */}
        <SpeakerCard
          name={"Marcello Ienca"}
          image={require("../images/speakers/rose_villain.jpg")}
          time={"15:30"}
        />
        <SpeakerCard
          name={"Rose Villain"}
          image={require("../images/speakers/rose_villain.jpg")}
          time={"15:45"}
        />
        <SpeakerCard
          name={"Silvano Onofri"}
          image={require("../images/speakers/nakita.jpg")}
          time={"16:00"}
        />
        <SpeakerCard
          name={"Nakita Aboya"}
          image={require("../images/speakers/nakita.jpg")}
          time={"16:15"}
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
