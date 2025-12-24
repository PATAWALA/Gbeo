export default function Contact() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>

      <form className="grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Votre nom"
          className="p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="p-3 border rounded"
        />
        <textarea
          placeholder="Votre message"
          className="p-3 border rounded h-32"
        />
        <button className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Envoyer
        </button>
      </form>
    </div>
  );
}
