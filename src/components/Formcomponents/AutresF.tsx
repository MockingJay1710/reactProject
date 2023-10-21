export const AutresF = () => {
    return (
        <section id="lastsection" className="mb-4">
            <h2 className="text-center text-xl font-bold mb-2">Autres</h2>
            <h3>Centres d'intérêt</h3>
            <select multiple className="border rounded p-2 w-full">
              <option className="font-gray">Jeux vidéo, jouer et développer</option>
              <option>Musique</option>
              <option>Sport</option>
              <option>Informatique en général</option>
            </select>
          </section>
    );
}