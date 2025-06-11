"use client";
import { useEffect } from "react";
import { useState } from "react";

interface Fact {
  id: string;
  text: string;
  source: string;
  source_url: string;
  language: string;
  permalink: string;
}

const UselessFacts = () => {
  const [fact, setFact] = useState<Fact>({
    id: "",
    text: "",
    source: "",
    source_url: "",
    language: "",
    permalink: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((res) => res.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setFact(parsedData);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <p className={``}>
      {loading && <i className="text-gray-400">Loading...</i>}
      {fact?.text && fact?.text}
      {error && (
        <i className="text-gray-400">
          Oops! something went wrong
          <br />
          Check your connection and try again :)
        </i>
      )}
    </p>
  );
};

export default UselessFacts;
