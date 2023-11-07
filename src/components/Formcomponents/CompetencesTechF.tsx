export const CompetencesTechF = () => {
    return (
        <section className="mb-4 bg-gray-700 p-3.5 border rounded p-2">
            <h2 className="text-center text-xl font-bold mb-2">Compétences techniques</h2>
            <label className="block mb-2">
              <input type="checkbox" name="comp" id="pro" className="inline messageCheckbox" value="Maîtrise de langages tels que Python, C, JavaScript, etc." />
              <b>Programmation:</b> Maîtrise de langages tels que Python, C, JavaScript, etc.
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="comp" id="dev" className="inline messageCheckbox" value="Compétence dans HTML5, CSS3, JavaScript, et React." />
              <b>Développement web:</b> Compétence dans HTML5, CSS3, JavaScript, et React.
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="comp" id="bd" className="inline messageCheckbox" value="Connaissance des systèmes relationnels (SQL)." />
              <b>Bases de données:</b> Connaissance des systèmes relationnels (SQL).
            </label>
          </section>
          );
}