import React, { useState } from "react";

export const PresentationPersF = () => {

  return (
    <div className="bg-gray-700 p-3.5 border rounded mb-3.5">
      <label className="block mb-2">Entrer votre nom:
        <input
          type="text"
          name="nom"
          placeholder="Entrer votre nom"
          required
          className="border rounded p-2 w-full"

        />
      </label>
      <label className="block mb-2">Entrer votre prénom:
        <input type="text" name="prenom" placeholder="Entrer votre prénom" required className="border rounded p-2 w-full" />
      </label>
      <label className="block mb-2">Entrer votre âge:
        <input type="number" name="age" placeholder="Entrer votre âge" required className="border rounded p-2 w-full" />
      </label>
      <label className="block mb-2">Entrer votre numéro de téléphone:
        <input type="number" name="numero" placeholder="Entrer votre numéro de téléphone" required className="border rounded p-2 w-full" />
      </label>
      <label className="block mb-2">Entrer votre adresse email:
        <input type="email" name="email" placeholder="Entrer votre adresse email" required className="border rounded p-2 w-full" />
      </label>
      <label className="block mb-2">Entrer votre adresse:
        <input type="text" name="adresse" placeholder="Donner votre adresse" required className="border rounded p-2 w-full" />
      </label>
      <label className="block mb-2">Description de l'objectif professionnel:
        <textarea name="objpro" placeholder="Décrire votre objectif personnel" required className="border rounded p-2 w-full" ></textarea>
      </label>
      {/* ...other input fields */}

      <label className="block mb-2">Ajoutez votre image:
        <input
          type="file"
          name="img"
          className="border rounded p-2"

        />
      </label>

    </div>
  );
}

