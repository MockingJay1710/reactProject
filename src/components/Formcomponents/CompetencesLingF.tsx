export const CompetencesLingF = () => {
    return (
        <section className="mb-4 bg-gray-700 p-3.5 border rounded p-2">
            <h2 className="text-center text-xl font-bold mb-2">Compétences linguistiques</h2>
            <h3 className="font-bold mb-2">Langues :</h3>
            <label className="block mb-2">
              <input type="checkbox" name="lang" className="inline messageCheckbox2" id="fr" value="french" />
              Français
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="lang" className="inline messageCheckbox2" id="ang" value="english" />
              Anglais
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="lang" className="inline messageCheckbox2" id="ar" value="arabic" />
              Arabe
            </label>
            <label className="block mb-2">Autres langues:
              <textarea id="autre" name="otherLang" placeholder="Ajouter d'autres langues" className="border rounded p-2 w-full"></textarea>
            </label>
          </section>
    );
}