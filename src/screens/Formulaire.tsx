import { PresentationPersF } from "../components/Formcomponents/PresentationPersF";
import { FormationsF } from "../components/Formcomponents/FormationsF";
import { CompetencesTechF } from "../components/Formcomponents/CompetencesTechF";
import { CompetencesLingF } from "../components/Formcomponents/CompetencesLingF";
import { AutresF } from "../components/Formcomponents/AutresF";
import { FooterF } from "../components/Formcomponents/FooterF";
import { HeaderF } from "../components/Formcomponents/HeaderF";

export const Formulaire = () => {
    return (
        <div className="font-sans w-90 max-w-screen-md min-w-1/6 mx-auto p-4">
            <HeaderF />
            <form>
                <PresentationPersF />
                <div>
                    <FormationsF />
                    <CompetencesTechF />
                    <CompetencesLingF />
                    <AutresF />
                    <input type="submit" name="submit_button" className="bg-blue-500 text-white p-2 rounded mx-auto block" />
                </div>
            </form>
            <FooterF />
        </div>   
                    );
}