import eurostarImg from "./Images/card/eurostar.png";
import finoImg from "./Images/card/fino.png";
import ecoImg from "./Images/card/eco.png";

const card = [
  {
    name: "Eurostar",
    description:
      "Αναβαθμισμένη απόδοση και οικολογική υπεροχή — η νέα γενιά ηλιακών θερμοσιφώνων σχεδιασμένη για να κάνει τη διαφορά.",
    image: eurostarImg,
    route: "/eurostar",
  },
  {
    name: "Fino",
    description:
      "Ο EUROSTAR FINO φέρνει ισορροπία μεταξύ υψηλής απόδοσης, διαχρονικής αξιοπιστίας και σύγχρονου, διακριτικού design.",
    image: finoImg,
    route: "/fino",
  },
  {
    name: "Eco",
    description:
      "Σχεδιασμένη για ζεστά κλίματα, η σειρά ECO λειτουργεί χωρίς την ανάγκη επαναπλήρωσης του ηλιακού κυκλώματος",
    image: ecoImg,
    route: "/eco",
  },
];

export default card;
