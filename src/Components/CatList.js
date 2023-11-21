import React from "react";

export default function CatList() {
  const cats = [
    { id: 1, name: "Whiskers" },
    { id: 2, name: "Fluffy" },
    { id: 3, name: "Mittens" },
    // Add more cat data as needed
  ];

  return (
    <div className="container">
      <h2>Cats List</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <a href={`/cats/${cat.id}`}>{cat.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}


