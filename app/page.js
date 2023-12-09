import Title from "./ui/title";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 min-h-screen overflow-y-scroll">
      <Title>Small Library</Title>
      <section
        id="books"
        className="flex items-center justify-center gap-x-24 mx-auto w-11/12 mt-4 border-2 border-calypso rounded-md"
      >
        <div
          id="availableBooks"
          className="w-5/12 border border-burningSand/80 rounded-md my-4"
        ></div>
        <div
          id="availableBooks"
          className="w-5/12 border border-burningSand/80 rounded-md my-4"
        ></div>
      </section>
    </main>
  );
}
