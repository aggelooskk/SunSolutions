import React from "react";
import NavBar from "../Components/NavBar";

function EurostarScreen() {
  return (
    <>
      <NavBar />

      {/* Header Section */}
      <div className="flex justify-start items-center h-16 w-2/3 mx-5 my-3 bg-black rounded-lg shadow-lg">
        <h1 className="p-3 text-white font-mono text-md">
          Ηλιακοί Θερμοσίφωνες Κανονικού Ύψους
        </h1>
      </div>

      {/* Description Section */}
      <div className="w-2/3 mx-5 mb-14 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="text-black space-y-4">
          <p>
            Ο ηλιακός θερμοσίφωνας EUROSTAR έχει σχεδιαστεί και κατασκευαστεί με
            κύριο στόχο να εξασφαλίζει μεγάλη απόδοση και διάρκεια ζωής.
          </p>
          <p>
            Ο νέος χάλκινος επιλεκτικός συλλέκτης τιτανίου με τον υψηλότερο
            βαθμό απόδοσης, παρέχει συνέχεια καυτό νερό ακόμα και στις
            δυσκολότερες καιρικές συνθήκες. Τα προηγμένα υλικά που
            χρησιμοποιούνται στην κατασκευή του και η προσοχή σε κάθε
            λεπτομέρεια, εξασφαλίζουν την άψογη λειτουργία του για μια ολόκληρη
            ζωή.
          </p>
          <p>
            Οι ηλιακοί θερμοσίφωνες EUROSTAR κατασκευάζονται σύμφωνα με το
            διεθνές πρότυπο διασφάλισης ποιότητας ISO 9001-2015 και ελέγχονται
            από το διεθνές πρότυπο ISO/DP9459-2.
          </p>
          <p>
            Ο συλλέκτης πιστοποιείται κατά ΕΝ 12975-1-2 για την απόδοσή του και
            για την αξιοπιστία του. Επιπλέον, πιστοποιείται και όλο το σύστημα
            του ηλιακού θερμοσίφωνα κατά το Ευρωπαϊκό πρότυπο ΕΝ 12976-1-2.
          </p>
          <p>
            Ο ηλιακός θερμοσίφωνας EUROSTAR, καθώς και οι συλλέκτες του
            ξεχωριστά, έχουν διακριθεί με το Ευρωπαϊκό σήμα ποιότητας Solar
            Keymark.
          </p>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="flex justify-start items-center h-20 w-2/3 m-5 bg-black rounded-lg shadow-lg">
        <h1 className="p-3 text-white font-mono text-xl font-bold">
          Πλεονεκτήματα
        </h1>
      </div>
      <div className="w-2/3 m-5 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
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
      <div className="flex justify-start items-center h-20 w-2/3 m-5 bg-black rounded-lg shadow-lg">
        <h1 className="p-3 text-white font-mono text-xl font-bold">
          Τεχνικά Χαρακτηριστικά Boiler
        </h1>
      </div>
      <div className="w-2/3 m-5 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <p className="text-black mb-4">
          Πλαίσιο ηλιακού συλλέκτη από ειδικά σχεδιασμένο χυτό προφίλ
          αλουμινίου, επεξεργασμένο με ηλεκτροστατική βαφή φούρνου, χωρίς ραφές,
          βίδες κ.λπ., για απόλυτη στεγανότητα.
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
            Θερμικό υγρό προπυλενογλυκόλης με αντιδιαβρωτικά πρόσθετα για άμεση
            μετάδοση θερμότητας και προστασία από παγετό και οξείδωση.
          </li>
        </ol>
      </div>
      <div className="w-2/3 h-20 m-5 my-8">
        <img src="/eurostarmod.png" alt="eurostar" />
      </div>
    </>
  );
}

export default EurostarScreen;
