import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function EcoScreen() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center m-5 font-sans">
        <img className="w-30 h-30" src="/eco/EcoSolars.png" alt="ecoSolars" />
      </div>
      <div className="w-2/3 mx-auto md:mx-5">
        {/* Iliothermo ECO Section */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl hover:bg-slate-900 transition-colors duration-200">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Ηλιακός Θερμοσίφωνας ΗΛΙΟΘΕΡΜΟ ECO
          </h1>
        </div>

        {/* Iliothermo ECO Description */}
        <div className="mt-2 p-6 shadow-sm bg-white border-gray-100 hover:scale-105">
          <div className="text-black space-y-4">
            <p>
              Οι γνωστοί ηλιακοί θερμοσίφωνες “Ηλιόθερμο ECO”, από το 1974,
              βρίσκονται στην κορυφή των προτιμήσεων στα ηλιακά συστήματα
              θέρμανσης ζεστού νερού χρήσης. Διατίθενται σε 80, 100, 125, 150
              και 200 λίτρα, διπλής ή τριπλής ενέργειας.
            </p>
            <p>
              Οι ηλιακοί θερμοσίφωνες “Ηλιόθερμο ECO” κατασκευάζονται με τις πιο
              αυστηρές προδιαγραφές ποιότητας και απόδοσης.
            </p>
          </div>
        </div>

        {/* Iliothermo ECO Advantages */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl hover:bg-slate-900 transition-colors duration-200">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Πλεονεκτήματα
          </h1>
        </div>
        <div className="mt-2 p-6 shadow-sm bg-white border-gray-100 hover:scale-105">
          <ul className="list-disc list-inside text-black space-y-2 ml-2">
            <li>
              Το μόνο με ηλεκτρονικό θερμόμετρο (προαιρετικό) — Σας δείχνει
              συνεχώς τη θερμοκρασία του νερού του ηλιακού θερμοσίφωνα μέσα στο
              σπίτι. Έτσι σας παρέχει ΕΛΕΓΧΟ της λειτουργίας του ηλιακού σας
              θερμοσίφωνα.
            </li>
            <li>
              Οικονομία νερού — Δεν περιμένετε με το χέρι στη βρύση για να
              φτάσει το ζεστό νερό και να ελέγξετε τη θερμοκρασία του.
            </li>
            <li>
              Οικονομία ρεύματος — Ξέρετε πότε να ενεργοποιήσετε την ηλεκτρική
              αντίσταση και για πόσο χρόνο.
            </li>
            <li>Ασφάλεια — Σας δείχνει τυχόν υπερθέρμανση.</li>
          </ul>
        </div>

        {/* Iliothermo ECO Technical Specs */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl hover:bg-slate-900 transition-colors duration-200">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Τεχνικά Χαρακτηριστικά
          </h1>
        </div>
        <div className="mt-2 p-6 shadow-sm bg-white border-gray-100 hover:scale-105">
          <ol className="list-decimal list-inside text-black space-y-4 ml-2">
            <li>
              Boiler από ευρωπαϊκό χαλυβδοέλασμα για μεγάλη διάρκεια ζωής.
            </li>
            <li>Πιστοποιημένο δοχείο σε πίεση 20 bar.</li>
            <li>
              Εσωτερική προστασία από εμαγιέ (υαλόκραμα ψημένο στους 860°C) για
              μεγαλύτερη προστασία στα σκληρά νερά.
            </li>
            <li>
              Νέο επαναστατικό εναλλάκτη κλειστού κυκλώματος που εξασφαλίζει
              ταχύτατη θέρμανση του νερού σε πολύ υψηλή θερμοκρασία και αντοχή
              σε 22,5 bar πίεσης.
            </li>
            <li>
              Ισχυρή μόνωση χυτής οικολογικής πολυουρεθάνης 5 εκ., πυκνότητας
              50kg/m³ που εξασφαλίζει διατήρηση ζεστού νερού ακόμα και τις πιο
              παγωμένες νύχτες του χειμώνα.
            </li>
            <li>
              Ράβδο μαγνησίου για ανοδική προστασία κατά της ηλεκτρόλυσης.
            </li>
            <li>
              Ηλεκτρική αντίσταση με θερμοστάτη για ζεστό νερό ακόμη και με
              συννεφιά.
            </li>
            <li>
              Πλαίσιο συλλέκτη από προφίλ αλουμινίου με προστασία από
              ηλεκτροστατική βαφή φούρνου για απεριόριστη διάρκεια ζωής.
            </li>
            <li>
              Απορροφητή από χάλκινο υδροσκελετό συγκολλημένο με laser σε
              επιλεκτική επιφάνεια αλουμινίου. Απορροφητικότητα 95%,
              εκπεμψιμότητα 5%.
            </li>
            <li>Ο μόνος πιστοποιημένος συλλέκτης σε αντοχή 22,5 bar.</li>
            <li>
              Υψηλή απόδοση, λόγω ισχυρής μόνωσης πετροβάμβακα στην πλάτη και
              στα πλευρικά τοιχώματα που περιορίζει τις απώλειες θερμότητας από
              τον ηλιακό συλλέκτη.
            </li>
          </ol>
        </div>

        <div className="flex justify-start my-7">
          <img src="/eco/EcoSpecs.png" alt="EcoSpecs" />
        </div>

        {/* Iliothermo ECO Sizes */}
        <div className="flex justify-start items-center h-10 mt-10 rounded-xl hover:bg-slate-900 transition-colors duration-200">
          <h1 className="p-3 text-orange-400 font-semibold text-lg drop-shadow-lg">
            Διαστάσεις
          </h1>
        </div>
        <div className="flex justify-start my-5">
          <img src="/eco/EcoSizes.png" alt="EcoSizes" />
        </div>

        <div className="flex justify-start my-7">
          <img src="/eco/EcoMod.png" alt="EcoMod" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EcoScreen;
