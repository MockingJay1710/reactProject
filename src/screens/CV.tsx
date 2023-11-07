import { Presentation } from "../components/CVcomponents/Presentation";
import { TitreCV } from "../components/CVcomponents/TitreCV";
import { DescriptionObjPro } from "../components/CVcomponents/DecriptionObjPro";
import { FormationsEtDip } from "../components/CVcomponents/FormationsEtDip";
import { CompetencesTech } from "../components/CVcomponents/CompetencesTech";
import { CompetencesLing } from "../components/CVcomponents/CompetencesLing";
import { Autres } from "../components/CVcomponents/Autres";
import { Footer } from "../components/CVcomponents/Footer";
import { Photo } from "../components/CVcomponents/Photo";

export const CV = () => {
    return (
        <div className="font-sans w-90 max-w-screen-md min-w-1/6 mx-auto p-4 bg-gray-700 p-3.5 border rounded mb-3.5">
            <header className="text-center font-bold m-8">
                <TitreCV />
                <Photo />
                <Presentation />
            </header>
            <DescriptionObjPro />
            <FormationsEtDip />
            <CompetencesTech />
            <CompetencesLing />
            <Autres />
            <Footer />
        </div>
    );
}