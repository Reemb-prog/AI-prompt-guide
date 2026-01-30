const langBtn = document.getElementById('langToggle');
let currentLang = 'en';

const translations = {
    en: {
        title: "AI PROMPT ENGINEERING GUIDE",
        subtitle: "Hands-on templates for turning vague requests into precise results • v2026.1",
        blueprint: "1. The Prompt Blueprint",
        ingredients: "Key Ingredients",
        roles: [
            "ROLE: Who is the AI? (e.g., \"You are a Chemist\")",
            "TASK: What is the specific action? (e.g., \"Explain...\")",
            "CONTEXT: Who is it for? (e.g., \"For 8th graders\")",
            "CONSTRAINTS: Length, tone, or rules? (e.g., \"No jargon\")",
            "OUTPUT: What format? (e.g., \"A 3-column table\")"
        ],
        checklistTitle: "Quick Recipe Checklist",
        checklist: ["Audience & Goal specified?", "Length & Tone limited?", "Output format defined?", "Verification step requested?"],
        objectives: "2. Objective-Based Templates",
        categories: ["Academic & Study", "Writing & Communication", "Brainstorm & Fun", "Language Learning", "Tech & Coding", "Personal Plan"],
        templateRows: [
            { title: "Explain Concept", prompt: '"Explain [concept] like I\'m [age]. Use an analogy and a real-world example."' },
            { title: "Step-by-Step Guide", prompt: '"Show me how to solve [problem] step-by-step. Explain the logic of each step."' },
            { title: "Improve Vocabulary", prompt: '"Replace common words in this [paragraph] with more academic, precise terms."' },
            { title: "Rewrite / Summarize", prompt: '"Summarize [text] for [audience] in [length]. Focus on [key points]."' },
            { title: "Writing Assistant", prompt: '"Act as an editor. Review my [essay/draft] for flow and clarity. Suggest 3 specific edits."' },
            { title: "Professional Email", prompt: '"Write a [tone] email to [recipient] regarding [subject]. Goal: [ask/decline/thank]."' },
            { title: "Entertainment / Games", prompt: '"Create a text-based adventure game set in [setting]. Give me 3 choices per turn."' },
            { title: "Gift Ideas", prompt: '"Suggest 5 gift ideas for a [age/gender] who likes [interests]. Budget: $[amount]."' },
            { title: "Brainstorming", prompt: '"Generate 10 \'wild\' ideas for [project/theme]. No idea is too crazy. Format: Bullet list."' },
            { title: "Partner Roleplay", prompt: '"Act as a native [language] speaker. Let\'s talk about [topic]. Ask one question at a time."' },
            { title: "Level-Specific Essay", prompt: '"Write a 200-word essay on [topic] using [CEFR Level] vocabulary in [language]."' },
            { title: "Grammar & Punctuation", prompt: '"Analyze this sentence for grammar errors. Explain why they are wrong and show the fix."' },
            { title: "Generate Website", prompt: '"Write a single HTML file with Tailwind CSS for a [type of site]. Include a hero and a footer."' },
            { title: "Debug Code", prompt: '"Identify the bug in this [language] code: [paste code]. Explain how to fix it."' },
            { title: "Study Schedule", prompt: '"Create a [timeframe] study schedule for [subject]. Focus on [weak area]. Max 1 hour/day."' },
            { title: "Diet & Workout", prompt: '"Design a 3-day meal plan and workout for [goal]. Constraints: [allergies/no equipment]."' }
        ],
        debugTitle: "The 'Bad Answer' Fixes",
        debugFixes: [
            { title: "Force a Plan", text: '"Outline your approach in 5 bullets first. Then answer."' },
            { title: "Remove Ambiguity", text: '"Ask me 3 clarifying questions before you generate the response."' },
            { title: "Ask for Reasoning", text: '"List your assumptions and explain 2 ways this could be wrong."' }
        ],
        scoreTitle: "Prompt Quality Score",
        scoreRows: ["Audience/Goal is explicit", "Constraints (length/tone) set", "Output format is specific", "Role/Persona is defined", "Few-shot (examples) provided"],
        total: "TOTAL:"
    },
    fr: {
        title: "GUIDE D'INGÉNIERIE DE PROMPT IA",
        subtitle: "Modèles pratiques pour transformer des demandes vagues en résultats précis • v2026.1",
        blueprint: "1. Le Schéma du Prompt",
        ingredients: "Ingrédients Clés",
        roles: [
            "RÔLE : Qui est l'IA ? (ex. \"Tu es un chimiste\")",
            "TÂCHE : Quelle est l'action spécifique ? (ex. \"Explique...\")",
            "CONTEXTE : Pour qui est-ce ? (ex. \"Pour des élèves de 4ème\")",
            "CONTRAINTES : Longueur, ton ou règles ? (ex. \"Sans jargon\")",
            "RÉSULTAT : Quel format ? (ex. \"Un tableau à 3 colonnes\")"
        ],
        checklistTitle: "Liste de Contrôle Rapide",
        checklist: ["Public et objectif spécifiés ?", "Longueur et ton limités ?", "Format de sortie défini ?", "Étape de vérification demandée ?"],
        objectives: "2. Modèles par Objectifs",
        categories: ["Académique & Étude", "Rédaction & Communication", "Brainstorming & Fun", "Apprentissage des Langues", "Tech & Codage", "Plan Personnel"],
        templateRows: [
            { title: "Expliquer un Concept", prompt: '"Explique [concept] comme si j\'avais [âge]. Utilise une analogie et un exemple concret."' },
            { title: "Guide Étape par Étape", prompt: '"Montre-moi comment résoudre [problème] étape par étape. Explique la logique de chaque étape."' },
            { title: "Améliorer le Vocabulaire", prompt: '"Remplace les mots courants de ce [paragraphe] par des termes plus académiques et précis."' },
            { title: "Réécrire / Résumer", prompt: '"Résume [texte] pour [public] en [longueur]. Concentre-toi sur [points clés]."' },
            { title: "Assistant de Rédaction", prompt: '"Agis en tant qu\'éditeur. Révise mon [essai/brouillon] pour la fluidité et la clarté. Suggère 3 modifications spécifiques."' },
            { title: "E-mail Professionnel", prompt: '"Rédige un e-mail au ton [ton] à [destinataire] concernant [sujet]. Objectif : [demander/refuser/remercier]."' },
            { title: "Divertissement / Jeux", prompt: '"Crée un jeu d\'aventure textuel se déroulant dans [cadre]. Donne-moi 3 choix par tour."' },
            { title: "Idées de Cadeaux", prompt: '"Suggère 5 idées de cadeaux pour un(e) [âge/sexe] qui aime [intérêts]. Budget : [montant]."' },
            { title: "Brainstorming", prompt: '"Génère 10 idées \'folles\' pour [projet/thème]. Aucune idée n\'est trop farfelue. Format : Liste à puces."' },
            { title: "Partenaire de Jeu de Rôle", prompt: '"Agis comme un locuteur natif [langue]. Parlons de [sujet]. Pose une question à la fois."' },
            { title: "Rédaction par Niveau", prompt: '"Rédige une rédaction de 200 mots sur [sujet] en utilisant un vocabulaire de niveau [CEFR] en [langue]."' },
            { title: "Grammaire & Ponctuation", prompt: '"Analyse les erreurs de grammaire dans cette phrase. Explique pourquoi elles sont fausses et montre la correction."' },
            { title: "Générer un Site Web", prompt: '"Rédige un fichier HTML unique avec Tailwind CSS pour un [type de site]. Inclue un héros et un pied de page."' },
            { title: "Déboguer du Code", prompt: '"Identifie le bug dans ce code [langue] : [coller le code]. Explique comment le corriger."' },
            { title: "Planning d'Étude", prompt: '"Crée un programme d\'étude [durée] pour [sujet]. Concentre-toi sur [point faible]. Max 1h/jour."' },
            { title: "Régime & Sport", prompt: '"Conçois un plan de repas et un entraînement de 3 jours pour [objectif]. Contraintes : [allergies/sans équipement]."' }
        ],
        debugTitle: "Corrections 'Mauvaise Réponse'",
        debugFixes: [
            { title: "Forcer un Plan", text: '"Ébauchez votre approche en 5 points d\'abord. Puis répondez."' },
            { title: "Éliminer l\'Ambiguïté", text: '"Posez-moi 3 questions de clarification avant de générer la réponse."' },
            { title: "Demander le Raisonnement", text: '"Listez vos hypothèses et expliquez 2 raisons pour lesquelles cela pourrait être faux."' }
        ],
        scoreTitle: "Score de Qualité du Prompt",
        scoreRows: ["Public/Objectif explicite", "Contraintes (longueur/ton) fixées", "Format de sortie spécifique", "Rôle/Persona défini", "Exemples (few-shot) fournis"],
        total: "TOTAL :"
    }
};

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    // 1. Headers & Main Text
    document.querySelector('h1').innerText = t.title;
    document.querySelector('p.text-blue-100').innerText = t.subtitle;
    document.querySelectorAll('h2')[0].innerText = t.blueprint;
    document.querySelectorAll('h2')[1].innerText = t.objectives;

    // 2. Blueprint Box (Roles)
    document.querySelector('.blueprint-box h3').lastChild.textContent = " " + t.ingredients;
    document.querySelectorAll('.blueprint-box ul li').forEach((li, i) => {
        const parts = t.roles[i].split(':');
        li.innerHTML = `<strong>${parts[0]}:</strong>${parts[1]}`;
    });

    // 3. Checklist
    document.querySelector('.border-dashed h3').innerText = t.checklistTitle;
    document.querySelectorAll('.border-dashed label').forEach((label, i) => {
        const input = label.querySelector('input');
        label.innerText = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + t.checklist[i]));
    });

    // 4. Categories & Template Rows
    document.querySelectorAll('.template-card h3').forEach((h3, i) => {
        h3.innerText = t.categories[i];
    });
    document.querySelectorAll('.template-row').forEach((row, i) => {
        row.querySelector('.font-bold').innerText = t.templateRows[i].title;
        row.querySelector('.text-sm').innerText = t.templateRows[i].prompt;
    });

    // 5. Debugging Section
    document.querySelector('.bg-gray-900 h3').lastChild.textContent = " " + t.debugTitle;
    document.querySelectorAll('.bg-gray-900 .border-l-2').forEach((box, i) => {
        box.querySelector('.font-bold').innerText = t.debugFixes[i].title;
        box.querySelectorAll('p')[1].innerText = t.debugFixes[i].text;
    });

    // 6. Quality Score Table
    document.querySelector('.border-blue-600 h3').innerText = t.scoreTitle;
    document.querySelectorAll('.border-blue-600 tbody tr').forEach((tr, i) => {
        tr.querySelector('td').innerText = t.scoreRows[i];
    });
    document.querySelector('.border-blue-600 .text-xs').innerText = t.total;
});
