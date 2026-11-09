import type { Branch } from "@/lib/content/schemas";

export const branches: Branch[] = [
  {
    slug: "metaphysics",
    name: "Metaphysics",
    tagline: "What is real, and why?",
    description:
      "Metaphysics asks the most general questions about reality: what exists, what it means to exist, and how different kinds of things relate. It includes the study of being, substance, causation, time, possibility, and personal identity.",
    centralQuestions: [
      "What is ultimately real?",
      "What is the nature of causation?",
      "What makes a person the same person over time?",
      "Is the world deterministic?",
      "What is the relation between mind and matter?",
    ],
    subfields: ["Ontology", "Philosophy of time", "Philosophy of mind", "Philosophy of religion"],
    relatedLessons: [
      "ship-of-theseus",
      "buddhist-anatta",
      "dependent-origination",
      "advaita-vedanta",
      "free-will-problem",
    ],
    relatedConcepts: ["the-self", "personal-identity", "determinism", "non-dualism", "emptiness"],
  },
  {
    slug: "epistemology",
    name: "Epistemology",
    tagline: "How do you know?",
    description:
      "Epistemology studies knowledge, belief, justification, and truth. It asks what distinguishes knowledge from mere opinion, whether certainty is possible, and how testimony, perception, and reason contribute to understanding.",
    centralQuestions: [
      "What is knowledge?",
      "Can we know anything for certain?",
      "What justifies a belief?",
      "How should we respond to disagreement?",
      "What are the limits of reason?",
    ],
    subfields: ["Scepticism", "Philosophy of science", "Social epistemology", "Philosophy of language"],
    relatedLessons: [
      "problem-of-other-minds",
      "problem-of-induction",
      "plato-allegory-cave",
      "what-is-philosophy",
    ],
    relatedConcepts: ["skepticism", "rationalism", "empiricism", "induction"],
  },
  {
    slug: "ethics",
    name: "Ethics",
    tagline: "How should we live?",
    description:
      "Ethics examines right and wrong, good and bad, virtue and vice. It includes normative questions about what we ought to do, metaethical questions about the status of moral claims, and applied questions about particular practices.",
    centralQuestions: [
      "What makes an action right or wrong?",
      "What is a good life?",
      "Are moral facts objective?",
      "How should we treat other people?",
      "What do we owe to strangers and future generations?",
    ],
    subfields: ["Normative ethics", "Metaethics", "Applied ethics", "Moral psychology"],
    relatedLessons: [
      "experience-machine",
      "veil-of-ignorance",
      "aristotle-virtue",
      "confucian-ethics",
      "problem-of-evil",
    ],
    relatedConcepts: ["virtue", "eudaimonia", "hedonism", "categorical-imperative", "justice", "ren"],
  },
  {
    slug: "logic",
    name: "Logic",
    tagline: "What follows from what?",
    description:
      "Logic studies valid inference and the structure of arguments. It provides tools for distinguishing good reasoning from bad, analysing arguments, and understanding formal systems.",
    centralQuestions: [
      "What makes an argument valid?",
      "What is the difference between validity and soundness?",
      "How should we reason about uncertainty?",
      "Can logical truths be known independently of experience?",
    ],
    subfields: ["Formal logic", "Modal logic", "Philosophy of mathematics", "Argumentation theory"],
    relatedLessons: ["what-is-philosophy", "problem-of-induction", "dependent-origination"],
    relatedConcepts: ["rationalism", "skepticism", "induction", "emptiness"],
  },
  {
    slug: "political-philosophy",
    name: "Political Philosophy",
    tagline: "How should we live together?",
    description:
      "Political philosophy examines the nature of political authority, justice, freedom, equality, rights, and the legitimate use of power. It asks how institutions should be arranged and what citizens owe one another.",
    centralQuestions: [
      "What makes political authority legitimate?",
      "What does justice require?",
      "How should resources be distributed?",
      "What is the proper scope of individual freedom?",
      "When is resistance or revolution justified?",
    ],
    subfields: ["Justice", "Rights", "Democracy", "Feminist political theory", "Decolonial theory"],
    relatedLessons: ["veil-of-ignorance", "plato-allegory-cave", "confucian-ethics"],
    relatedConcepts: ["justice", "social-contract", "categorical-imperative", "free-will"],
  },
  {
    slug: "aesthetics",
    name: "Aesthetics",
    tagline: "What is beauty, and why does art matter?",
    description:
      "Aesthetics studies art, beauty, taste, and aesthetic experience. It asks what makes something beautiful or meaningful, how art should be interpreted, and what role aesthetic value plays in life.",
    centralQuestions: [
      "What is art?",
      "Is beauty objective or subjective?",
      "What makes an interpretation of a work valid?",
      "Can art be morally troubling and aesthetically valuable?",
    ],
    subfields: ["Philosophy of art", "Philosophy of music", "Aesthetics of nature", "Everyday aesthetics"],
    relatedLessons: ["plato-allegory-cave", "nietzsche-nihilism", "daoism-wu-wei"],
    relatedConcepts: ["virtue", "eudaimonia", "non-dualism"],
  },
  {
    slug: "philosophy-of-mind",
    name: "Philosophy of Mind",
    tagline: "What is consciousness?",
    description:
      "Philosophy of mind investigates the nature of mental states, consciousness, intentionality, and the relation between mind and body. It draws on philosophy, psychology, and neuroscience.",
    centralQuestions: [
      "What is consciousness?",
      "Can machines think?",
      "What is the relation between brain and mind?",
      "How do we know other minds exist?",
      "What is the self?",
    ],
    subfields: ["Consciousness studies", "Philosophy of cognitive science", "Philosophy of AI"],
    relatedLessons: ["problem-of-other-minds", "chinese-room", "buddhist-anatta", "ship-of-theseus"],
    relatedConcepts: ["consciousness", "qualia", "the-self", "anatta"],
  },
  {
    slug: "philosophy-of-language",
    name: "Philosophy of Language",
    tagline: "How do words mean?",
    description:
      "Philosophy of language examines meaning, reference, truth, speech acts, and the relation between language and reality. It is closely connected to logic, epistemology, and metaphysics.",
    centralQuestions: [
      "What is meaning?",
      "How do words refer to things?",
      "Does language shape thought?",
      "What is the difference between saying and doing?",
    ],
    subfields: ["Semantics", "Pragmatics", "Philosophy of linguistics", "Hermeneutics"],
    relatedLessons: ["chinese-room", "problem-of-other-minds", "daoism-wu-wei"],
    relatedConcepts: ["consciousness", "skepticism", "emptiness"],
  },
  {
    slug: "philosophy-of-science",
    name: "Philosophy of Science",
    tagline: "What makes science reliable?",
    description:
      "Philosophy of science examines the methods, concepts, and assumptions of scientific inquiry. It asks what distinguishes science from pseudoscience, how theories are confirmed, and what scientific explanation consists in.",
    centralQuestions: [
      "What is the scientific method?",
      "How do theories relate to evidence?",
      "Is scientific progress real?",
      "What is the role of values in science?",
    ],
    subfields: ["Confirmation theory", "Philosophy of physics", "Philosophy of biology", "Social epistemology of science"],
    relatedLessons: ["problem-of-induction", "chinese-room", "problem-of-other-minds"],
    relatedConcepts: ["induction", "empiricism", "rationalism", "skepticism"],
  },
  {
    slug: "philosophy-of-religion",
    name: "Philosophy of Religion",
    tagline: "What can reason say about the divine?",
    description:
      "Philosophy of religion examines arguments for and against religious belief, the nature of God, the problem of evil, religious experience, and the relation between faith and reason.",
    centralQuestions: [
      "Can God's existence be proved?",
      "Why does evil exist if God is good and all-powerful?",
      "What is faith?",
      "Can religious experience justify belief?",
    ],
    subfields: ["Natural theology", "Problem of evil", "Religious epistemology", "Comparative philosophy of religion"],
    relatedLessons: ["problem-of-evil", "advaita-vedanta", "what-is-philosophy"],
    relatedConcepts: ["skepticism", "rationalism", "pessimism", "non-dualism"],
  },
];
