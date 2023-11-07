export const AutresF = () => {
    return (
        <section id="lastsection" className="mb-4 bg-gray-700 p-3.5 border rounded p-2">
            <h2 className="text-center text-xl font-bold mb-2">Autres</h2>
            <h3>Centres d'intérêt</h3>
            <select multiple className="border rounded p-2 w-full">
              <option>Jeux vidéo, jouer et développer</option>
              <option>Musique</option>
              <option>Sport</option>
              <option>Informatique en général</option>
            </select>
          </section>
    );
}