import React from "react";
import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

export const App = () => {
  const [people, setPeople] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="p-4 flex flex-col space-y-10 bg-gray-200">
      <h1 className="text-center text-xl">Github Users</h1>
      <main className="grid grid-cols-1 gap-y-10 px-4 sm:grid-cols-2 gap-x-10 lg:grid-cols-4">
        {people.map((person) => {
          const { id, avatar_url, html_url, login } = person;
          return (
            <article
              key={id}
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="flex p-2 rounded-md space-x-5 bg-white"
            >
              <img
                src={avatar_url}
                alt={login}
                className="w-16 h-16 rounded-full"
              ></img>
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold">{login}</h2>
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400"
                >
                  profile
                </a>
              </div>
            </article>
          );
        })}
      </main>
    </section>
  );
};
