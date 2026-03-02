import Weather from "./Weather";

const Country = ({ country }) => {
  const languages = Object.values(country.languages);

  return (
    <>
      <h1>{country.name.common}</h1>
      <div>Capital {country.capital}</div>
      <div>Area {country.area}</div>

      <h2>Languages</h2>

      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        with="200"
      />

      <Weather country={country} />
    </>
  );
};

export default Country;
