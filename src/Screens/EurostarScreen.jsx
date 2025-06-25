import NavBar from "../Components/NavBar";
import Certifications from "../Components/Certifications";
import Footer from "../Components/Footer";

function EurostarScreen() {
  return (
    <>
      <NavBar />

      <div className="flex justify-start m-5 font-sans">
        <img
          className="w-30 h-30"
          src="/eurostar/eurostarSolars.png"
          alt="eurostarSolars"
        />
      </div>
      <div className="lg:w-2/3 md:w-3/5 sm:full">
        {/* Header Section */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Ηλιακοί Θερμοσίφωνες Κανονικού Ύψους
          </h1>
        </div>

        {/* Description Section */}
        <div className="p-6 shadow-sm bg-white border-gray-100">
          <div className="text-black space-y-4">
            <li>
              Ο ηλιακός θερμοσίφωνας EUROSTAR έχει σχεδιαστεί και κατασκευαστεί
              με κύριο στόχο να εξασφαλίζει μεγάλη απόδοση και διάρκεια ζωής.
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
              Οι ηλιακοί θερμοσίφωνες EUROSTAR κατασκευάζονται σύμφωνα με το
              διεθνές πρότυπο διασφάλισης ποιότητας ISO 9001-2015 και ελέγχονται
              από το διεθνές πρότυπο ISO/DP9459-2.
            </li>
            <li>
              Ο συλλέκτης πιστοποιείται κατά ΕΝ 12975-1-2 για την απόδοσή του
              και για την αξιοπιστία του. Επιπλέον, πιστοποιείται και όλο το
              σύστημα του ηλιακού θερμοσίφωνα κατά το Ευρωπαϊκό πρότυπο ΕΝ
              12976-1-2.
            </li>
            <li>
              Ο ηλιακός θερμοσίφωνας EUROSTAR, καθώς και οι συλλέκτες του
              ξεχωριστά, έχουν διακριθεί με το Ευρωπαϊκό σήμα ποιότητας Solar
              Keymark.
            </li>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3  text-orange-400 font-semibold text-lg drop-shadow-lg">
            Πλεονεκτήματα
          </h1>
        </div>
        <div className="p-6 shadow-sm bg-white border-gray-100 ">
          <ul className="list-disc list-inside text-black space-y-2 ml-2">
            <li>
              Απλή Εγκατάσταση στα Κεραμίδια — Με τις ειδικές βάσεις του, το
              EUROSTAR τοποθετείται στα κεραμίδια χωρίς τρυπήματα και σπασίματα
              (ακόμα και σε ήδη τελειωμένες σκεπές) σε ελάχιστο χρόνο.
            </li>
            <li>
              Ρυθμιζόμενη Κλίση — Η ειδική πολλαπλή βάση του επιτρέπει στο
              EUROSTAR να αλλάζει κλίση από (18°–22°–35°–40°) ανάλογα με τις
              συνθήκες λειτουργίας για ακόμη μεγαλύτερη απόδοση.
            </li>
            <li>Συνδέεται και με Καλοριφέρ.</li>
          </ul>
        </div>

        {/* Technical Specs Section */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Τεχνικά Χαρακτηριστικά Boiler
          </h1>
        </div>
        <div className="p-6 shadow-sm bg-white border-gray-100">
          <p className="text-black mb-4">
            Πλαίσιο ηλιακού συλλέκτη από ειδικά σχεδιασμένο χυτό προφίλ
            αλουμινίου, επεξεργασμένο με ηλεκτροστατική βαφή φούρνου, χωρίς
            ραφές, βίδες κ.λπ., για απόλυτη στεγανότητα.
          </p>
          <ol className="list-decimal list-inside text-black space-y-4 ml-2">
            <li>
              Χάλκινος υδροσκελετός, απλός (non-selective) ή επιλεκτικός
              (Τιτανίου-μπλε), με φύλλα χαλκού ή αλουμινίου που εξασφαλίζουν
              ενιαία απορροφητική επιφάνεια και υψηλή απόδοση ακόμη και σε
              δυσμενείς καιρικές συνθήκες.
            </li>
            <li>
              Ισχυρή μόνωση με πετροβάμβακα πάχους 40mm (50kg/m³) στην πλάτη και
              20mm στα πλευρικά τοιχώματα του συλλέκτη περιορίζουν στο ελάχιστο
              τις θερμικές απώλειες.
            </li>
            <li>
              Πρισματικό άθραυστο κρύσταλλο securit, ψημένο στους 700°C, πάχους
              4mm, με χαμηλή περιεκτικότητα σε σίδηρο και υψηλό συντελεστή
              διαπερατότητας (90,5%).
            </li>
            <li>
              Ειδικά ελαστικά EPDM και παρεμβύσματα σιλικόνης εξασφαλίζουν πλήρη
              στεγανότητα και αντοχή σε θερμοκρασίες έως 160°C.
            </li>
            <li>
              Θερμικό υγρό προπυλενογλυκόλης με αντιδιαβρωτικά πρόσθετα για
              άμεση μετάδοση θερμότητας και προστασία από παγετό και οξείδωση.
            </li>
          </ol>
        </div>

        {/* Additional Technical Specs Section */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Τεχνικά Χαρακτηριστικά Ηλιακού Συλλέκτη
          </h1>
        </div>
        <div className="p-6 shadow-sm bg-white border-gray-100">
          <p className="text-black mb-4">
            Πλαίσιο ηλιακού συλλέκτη από ειδικά σχεδιασμένο χυτό προφίλ
            αλουμινίου, επεξεργασμένο με ηλεκτροστατική βαφή φούρνου, χωρίς
            ραφές, βίδες κλπ, για απόλυτη στεγανότητα.
          </p>
          <ol className="list-decimal list-inside text-black space-y-4 ml-2">
            <li>
              Χάλκινος υδροσκελετός, επιλεκτικός (Τιτανίου-μπλε) με φύλλα
              αλουμινίου που εξασφαλίζουν ενιαία απορροφητική επιφάνεια και
              απίστευτα υψηλή απόδοση ακόμα και στις χειρότερες καιρικές
              συνθήκες.
            </li>
            <li>
              Ισχυρότατη μόνωση με πετροβάμβακα πάχους 40 mm (50kg/m³) στην
              πλάτη και 20 mm στα πλευρικά τοιχώματα του συλλέκτη περιορίζουν
              στο ελάχιστο τις θερμικές απώλειες, συμβάλλοντας στην υψηλή
              απόδοση.
            </li>
            <li>
              Πρισματικό άθραυστο κρύσταλλο securit ψημένο στους 700º C χαμηλής
              περιεκτικότητας σιδήρου, πάχους 4mm με συντελεστή διαπερατότητας
              90,5%.
            </li>
            <li>
              Ειδικά ελαστικά EPDM και παρεμβύσματα σιλικόνης για απόλυτη
              στεγανοποίηση και αντοχή μέχρι 160 ºC.
            </li>
            <li>
              Ειδικό θερμικό υγρό προπυλενογλυκόλης εμπλουτισμένο με
              αντιδιαβρωτικά πρόσθετα κυκλοφορεί στον υδροσκελετό του απορροφητή
              επιτυγχάνοντας ταχύτατη εξάπλωση της θερμότητας και τέλεια
              προστασία κατά του παγετού και της οξείδωσης.
            </li>
          </ol>
        </div>

        <div className="flex justify-center items-center my-7 w-85 h-85">
          <img src="/eurostar/eurostarMod.png" alt="eurostarMod" className="" />
        </div>
        <Certifications />
        <Footer />
      </div>
      {/* Close the React fragment */}
    </>
  );
}

export default EurostarScreen;
