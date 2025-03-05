# FSNodeJs

Utilitaire Node.js pour la gestion et la génération de données JSON structurées dans un système de fichiers.

## 📋 Description

Ce projet démontre l'utilisation du module `fs` (File System) de Node.js pour:
- Générer des données fictives structurées
- Organiser ces données dans un système de répertoires hiérarchique
- Parcourir et lire récursivement des structures de répertoires

## ✨ Fonctionnalités

- **Génération de données** - Création de données fictives avec faker.js
- **Structure hiérarchique** - Organisation des données en arborescence clients/produits
- **Opérations de fichiers** - Création, lecture et analyse de fichiers JSON
- **Parcours récursif** - Exploration complète d'une structure de répertoires

## 🛠️ Structure du projet

```
FSNodeJs/
├── index.js           # Script principal pour la lecture des fichiers
├── seed.js            # Script de génération de données
├── dataset.js         # Exemple de structure de données
├── package.json       # Configuration du projet
└── src/
    └── data/
        ├── clients/   # Données des clients générées
        └── products/  # Données des produits générées
```

## 💡 Concepts techniques

```javascript
function readFilesInDirectory(directoryPath, callback) {
  fs.readdir(directoryPath, (err, files) => {
    // Parcours récursif de l'arborescence
    // Gestion des callbacks asynchrones
  });
}
```

## 🚀 Installation

1. Clonez ce dépôt
```bash
git clone git@github.com:techmefr/FSnodeJs.git
cd FSnodeJs
```

2. Installez les dépendances
```bash
npm install
```

3. Générez les données d'exemple
```bash
npm run seed
```

4. Exécutez le script principal
```bash
node index.js
```

## 📊 Exemples de données générées

**Client**:
```json
{
  "id": "819925eb-1180-46fa-ba85-6a201f9f77e8",
  "name": "Lowell Mayer",
  "email": "Walker89@gmail.com"
}
```

**Produit**:
```json
{
  "id": "1640fe99-545e-4736-90f0-9ba6ee7a5b55",
  "name": "Generic Soft Soap",
  "description": "The Football Is Good For Training And Recreational Purposes",
  "price": "654.00"
}
```

## 📝 Licence

[MIT](https://choosealicense.com/licenses/mit/)

---

Créé par [Gaëtan Compigni](https://github.com/techmefr)
