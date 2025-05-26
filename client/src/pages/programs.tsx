import { useEffect, useState } from "react";

interface ProgramType {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Program() {
  const [programs, setPrograms] = useState<ProgramType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrograms(data);
      });
  }, []);

  return (
    <>
      {programs.map((program) => (
        <section key={program.id}>
          <h1>{program.title}</h1>
          <p>{program.synopsis}</p>
          <img
            className="w-[10rem]"
            src={program.poster}
            alt="affiche du film"
          />
          <p>Pays : {program.country}</p>
          <p>Année : {program.year}</p>
        </section>
      ))}
    </>
  );
}

export default Program;
