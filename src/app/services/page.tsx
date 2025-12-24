export default function Services() {
  const services = [
    { title: "Développement Web", desc: "Sites modernes, rapides & sécurisés." },
    { title: "Design Graphique", desc: "Logos, affiches, cartes professionnelles." },
    { title: "Marketing Digital", desc: "Stratégie pour augmenter votre visibilité." },
  ];

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">Nos Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
