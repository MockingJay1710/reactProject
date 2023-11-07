export const FormationsF = () => {
    return(
        <section className="mb-4 bg-gray-700 p-3.5 border rounded">
            <h2 className="text-xl font-bold mb-2 text-center">Formations et Diplômes</h2>
            <label className="block mb-2">
              <input type="radio" name="formation_et_dip" className="inline" value="Bac + 2 en informatique" id="r1" />
              Bac + 2 en informatique
            </label>
            <label className="block mb-2">
              <input type="radio" name="formation_et_dip" className="inline" value="Bac +3 en informatique, licence professionnelle" id="r2" />
              Bac +3 en informatique, licence professionnelle
            </label>
            <label className="block mb-2">
              <input type="radio" name="formation_et_dip" className="inline" value="Bac + 5, un master en informatique" id="r3" />
              Bac + 5, un master en informatique
            </label>
          </section>
    );
}