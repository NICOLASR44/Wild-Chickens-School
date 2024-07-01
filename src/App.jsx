import React from "react";
import "./App.css";
import ChickenCard from "./components/Chickencard";
import Chikendatas from "../chickenTab.json";

function App() {
  const teachers = Chikendatas.chickenTab.filter((chicken) => chicken.position === "Teacher");
  const students = Chikendatas.chickenTab.filter((chicken) => chicken.position === "Student");

  return (
    <div className="App">
      <section>
        <h2>Equipe pédagogique</h2>
        {teachers.map((chicken) => (
          <ChickenCard
            key={chicken.id}
            imgSrc={chicken.imgSrc}
            name={chicken.name}
            position={chicken.position}
            biography={chicken.biography}
          />
        ))}
      </section>
      <section>
        <h2>Camarades</h2>
        {students.map((chicken) => (
          <ChickenCard
            key={chicken.id}
            imgSrc={chicken.imgSrc}
            name={chicken.name}
            position={chicken.position}
            biography={chicken.biography}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
