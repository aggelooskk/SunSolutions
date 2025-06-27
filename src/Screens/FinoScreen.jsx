import NavBar from "../Components/NavBar";
import Certifications from "../Components/Certifications";
import Footer from "../Components/Footer";
import finoSolars from "../fino/finosSolars.png";

function FinoScreen() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center m-5 font-sans">
        <img className="w-30 h-30" src={finoSolars} alt="finoSolars" />
      </div>

      <div className="m-1 lg:w-2/3 sm:full">
        {/* Header Section */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Ηλιακοί Θερμοσίφωνες Χαμηλού Ύψους
          </h1>
        </div>

        {/* Description */}
        <div className="p-6 shadow-sm bg-white border-gray-100 ">
          <div className="text-black space-y-4">
            <li>
              Ο ηλιακός θερμοσίφωνας EUROSTAR FINO έχει σχεδιαστεί και
              κατασκευαστεί με κύριο στόχο να εξασφαλίζει μεγάλη απόδοση,
              διάρκεια ζωής και διακριτική εμφάνιση.
            </li>
            <li>
              Ο νέος χάλκινος επιλεκτικός συλλέκτης τιτανίου με τον υψηλότερο
              βαθμό απόδοσης, παρέχει συνέχεια καυτό νερό ακόμα και στις
              δυσκολότερες καιρικές συνθήκες. Τα προηγμένα υλικά που
              χρησιμοποιούνται στην κατασκευή του και η προσοχή σε κάθε
              λεπτομέρεια, εξασφαλίζουν την άψογη λειτουργία του για μια
              ολόκληρη ζωή.
            </li>
            <li>
              Οι ηλιακοί θερμοσίφωνες EUROSTAR FINO κατασκευάζονται σύμφωνα με
              το διεθνές πρότυπο διασφάλισης ποιότητας ISO 9001-2015 και
              ελέγχονται από το διεθνές πρότυπο ISO/DP9459-2.
            </li>
          </div>
        </div>

        {/* Boiler Technical Specs */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Τεχνικά Χαρακτηριστικά Boiler
          </h1>
        </div>
        <div className="p-6 shadow-sm bg-white border-gray-100 ">
          <ol className="list-decimal list-inside text-black space-y-4 ml-2">
            <li>
              Εξωτερικό περίβλημα από ανοξείδωτο ατσάλι ΙΝΟΧ ή χάλυβα
              ηλεκτροστατικής βαφής φούρνου για απεριόριστη διάρκεια ζωής με
              μέγιστο ύψος 1μ.
            </li>
            <li>
              Ισχυρή μόνωση χυτής οικολογικής πολυουρεθάνης 5–7 cm, πυκνότητας
              50 kg/m³ με θερμομονωτικό συντελεστή 0.019 kcal/m/h/°C.
            </li>
            <li>
              Μανδύας κλειστού κυκλώματος για μέγιστη επιφάνεια εναλλαγής
              θερμότητας και ταχύτερη θέρμανση νερού.
            </li>
            <li>
              Boiler από ευρωπαϊκό χαλυβδοέλασμα με εσωτερική προστασία από
              εμαγιέ (860°C) για προστασία από σκληρά νερά.
            </li>
            <li>Ανοδική προστασία με ράβδο μαγνησίου κατά της ηλεκτρόλυσης.</li>
            <li>
              Ηλεκτρική αντίσταση 4kW για ζεστό νερό ακόμα και με συννεφιά.
            </li>
            <li>
              Θερμοστάτης ασφαλείας διπλής επαφής με θερμικό ασφαλείας για
              προστασία από υπερθέρμανση.
            </li>
          </ol>
        </div>

        {/* Advantages */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Πλεονεκτήματα
          </h1>
        </div>
        <div className="p-6 shadow-sm bg-white border-gray-100 ">
          <ul className="list-disc list-inside text-black space-y-2 ml-2">
            <li>Απλή εγκατάσταση σε επίπεδη σκεπή σε ελάχιστο χρόνο.</li>
            <li>Συνδέεται και με Καλοριφέρ (προαιρετικά).</li>
          </ul>
        </div>

        {/* Collector Technical Specs */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Τεχνικά Χαρακτηριστικά Ηλιακού Συλλέκτη
          </h1>
        </div>
        <div className="p-6 shadow-sm bg-white border-gray-100 ">
          <ol className="list-decimal list-inside text-black space-y-4 ml-2">
            <li>
              Πλαίσιο από χυτό προφίλ αλουμινίου με ηλεκτροστατική βαφή, χωρίς
              ραφές και βίδες για πλήρη στεγανότητα.
            </li>
            <li>
              Επιλεκτικός χάλκινος υδροσκελετός (Τιτανίου-μπλε) με φύλλα
              αλουμινίου για υψηλή απορροφητικότητα.
            </li>
            <li>
              Μόνωση με πετροβάμβακα 40 mm στην πλάτη και 20 mm στα πλαϊνά για
              ελαχιστοποίηση θερμικών απωλειών.
            </li>
            <li>
              Πρισματικό άθραυστο κρύσταλλο securit 4mm ψημένο στους 700ºC, με
              90,5% διαπερατότητα.
            </li>
            <li>
              Ελαστικά EPDM και σιλικονούχα παρεμβύσματα για αντοχή έως 160 ºC.
            </li>
            <li>
              Θερμικό υγρό προπυλενογλυκόλης με αντιδιαβρωτικά για ταχεία
              θέρμανση και αντοχή σε παγετό και οξείδωση.
            </li>
          </ol>
        </div>
      </div>
      <Certifications />
      <Footer />
    </>
  );
}

export default FinoScreen;
