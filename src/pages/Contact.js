const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Contato</h1>
      <p className="text-lg text-neutral-300 mb-4">
        Se você tiver alguma dúvida, sugestão ou feedback, não hesite em entrar em contato conosco. Estamos aqui para ajudar e adoraríamos ouvir sua opinião!
      </p>
      <form className="bg-neutral-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-neutral-300 mb-2" htmlFor="name">Nome</label>
          <input className="w-full p-2 rounded bg-neutral-700 text-neutral-300" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-neutral-300 mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 rounded bg-neutral-700 text-neutral-300" type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-neutral-300 mb-2" htmlFor="message">Mensagem</label>
          <textarea className="w-full p-2 rounded bg-neutral-700 text-neutral-300" id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;