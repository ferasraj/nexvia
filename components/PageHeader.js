export default function PageHeader({ title, description }) {
  return (
    <section className="p-6 text-start">
      <h1 className="text-3xl font-bold text-blue-500">{title}</h1>
      <p className="mt-2 max-w-2xl text-lg text-gray-400">{description}</p>
    </section>
  );
}
