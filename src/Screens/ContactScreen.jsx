import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function ContactScreen() {
  const formRef = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! 📬");
          navigate("/");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast.error("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <NavBar />

      <div className="max-w-4xl mx-auto font-sans my-6 p-6">
        <h1 className="text-3xl font-bold  mb-6">Επικοινωνία</h1>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold  text-lg mb-2">
              Όνομα
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Προσθέστε το όνόμα σας"
              className="p-3 border font-mono border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="font-semibold text-lg mb-2">
              Επώνυμο
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Προσθέστε το επώνυμο σας"
              className="p-3 border font-mono border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Πρσθέστε το email σας"
              className="p-3 border font-mono border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-semibold text-lg mb-2">
              Κινητό Τηλέφωνο
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Προσθέστε το κινητό σας τηλέφωνο"
              className="p-3 border font-mono border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 border border-gray-800 text-black font-bold rounded-lg hover:bg-orange-400 transition-colors duration-200 focus:outline-none "
          >
            Ολοκλήρωση Αποστολής
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default ContactScreen;
