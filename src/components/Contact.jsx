/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/

import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);

  const text = {
    heading: { es: "¡A un click de iniciar!", en: "One click to get started!" },
    paragraph: {
      es: "Contáctame hoy, discutiremos tus necesidades...",
      en: "Contact me today — let’s talk about your needs...",
    },
    name: { es: "Nombre", en: "Name" },
    email: { es: "Correo", en: "Email" },
    message: { es: "Mensaje", en: "Message" },
    placeholderName: { es: "Allan Alpízar", en: "Allan Alpízar" },
    placeholderEmail: { es: "correo@ejemplo.com", en: "your@email.com" },
    placeholderMessage: { es: "Hola!", en: "Hi!" },
    submit: { es: "Enviar", en: "Send" },
    success: {
      es: "Mensaje enviado correctamente",
      en: "Message sent successfully",
    },
    error: {
      es: "Por favor, completa todos los campos.",
      en: "Please fill in all fields.",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre?.value.trim();
    const correo = form.correo?.value.trim();
    const mensaje = form.mensaje?.value.trim();

    if (!nombre || !correo || !mensaje) {
      return MySwal.fire({
        icon: "warning",
        title: text.error[language],
      });
    }

    setLoading(true);

    try {
      const formData = new FormData(form);
      await fetch("https://getform.io/f/ayvkxqnb", {
        method: "POST",
        body: formData,
      });

      form.reset();

      MySwal.fire({
        icon: "success",
        title: text.success[language],
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      console.error(err);
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal. Intenta de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 text-[#273c75] font-bold lg:max-w-[12ch]">
            {text.heading[language]}
          </h2>
          <p className="text-[#1a1a1a] mt-3 mb-8 font-medium">
            {text.paragraph[language]}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="mb-4">
              <label className="label text-[#273c75] font-semibold">
                {text.name[language]}
              </label>
              <input
                type="text"
                name="nombre"
                placeholder={text.placeholderName[language]}
                className="text-field bg-white text-black font-medium"
              />
            </div>
            <div className="mb-4">
              <label className="label text-[#273c75] font-semibold">
                {text.email[language]}
              </label>
              <input
                type="email"
                name="correo"
                placeholder={text.placeholderEmail[language]}
                className="text-field bg-white text-black font-medium"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="label text-[#273c75] font-semibold">
              {text.message[language]}
            </label>
            <textarea
              name="mensaje"
              placeholder={text.placeholderMessage[language]}
              className="text-field bg-white text-black font-medium resize-y min-h-32 max-h-80"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full justify-center font-bold text-white bg-[#fbc531] hover:bg-[#d6a800] transition"
          >
            {loading ? (
              <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
            ) : null}
            {text.submit[language]}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
