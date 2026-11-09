import type { Philosopher } from "@/lib/content/schemas";

export const philosophers: Philosopher[] = [
  {
    slug: "socrates",
    name: "Socrates",
    dates: "c. 470–399 BCE",
    era: "Classical Athens",
    traditions: ["ancient-greek"],
    summary:
      "An Athenian citizen who wrote nothing, Socrates made conversation into a method of inquiry and a way of life. He was tried and executed for impiety and corrupting the young.",
    biography: [
      "Socrates lived in Athens during and after the Peloponnesian War. He was not a professional teacher in the later sense: he charged no fees, held no office for most of his life, and left no writings. What we know comes chiefly from Plato, Xenophon, and Aristophanes, whose portraits differ in important ways.",
      "His public life included military service and a brief period presiding over the Athenian assembly. In 399 BCE he was prosecuted on charges of failing to recognise the city's gods, introducing new divinities, and corrupting the young. A jury convicted him; he was sentenced to death and drank hemlock.",
      "The historical Socrates is difficult to recover behind Plato's literary Socrates. Scholars treat the early Platonic dialogues as the closest surviving approach to his method, while recognising that Plato developed his own philosophical agenda.",
    ],
    context: [
      "Fifth-century Athens was a democracy recovering from defeat, with intense debate about rhetoric, expertise, and the authority of tradition. The sophists taught persuasion for a fee; Socrates instead pressed people to examine whether their confident opinions could survive questioning.",
    ],
    ideas: [
      {
        title: "The elenchus",
        description:
          "Socrates typically asked a question such as 'What is justice?' and tested an interlocutor's answer by drawing out consequences the person also accepted, often revealing inconsistency. The aim was not humiliation but aporia: the recognition that one does not yet know.",
      },
      {
        title: "Care for the soul",
        description:
          "Socrates treated the condition of one's character as more important than wealth, reputation, or even survival. Philosophy was a practice of self-examination, not a body of doctrine to be memorised.",
      },
      {
        title: "Virtue and knowledge",
        description:
          "In several early dialogues Socrates explores the idea that virtue is a kind of knowledge. The claim is controversial: it seems to imply that anyone who truly knows what is good will do it, leaving little room for weakness of will.",
      },
      {
        title: "The examined life",
        description:
          "Socrates' defence at his trial presents philosophy as a duty to question oneself and others. The unexamined life, he suggests, is not worth living because it leaves one's values unowned and unimproved.",
      },
    ],
    works: [
      {
        title: "Apology",
        date: "c. 399 BCE",
        note: "Plato's literary account of Socrates' defence, not a transcript.",
      },
      {
        title: "Euthyphro, Crito, Phaedo",
        note: "Platonic dialogues surrounding the trial and death; the Socrates portrayed is also Plato's literary creation.",
      },
    ],
    criticisms: [
      {
        title: "The method can be destructive",
        description:
          "Elenchus is good at exposing inconsistency but does not by itself establish a positive account. Critics ask whether Socrates leaves his interlocutors with anything more than confusion.",
      },
      {
        title: "The 'Socratic problem'",
        description:
          "Because Socrates wrote nothing, every reconstruction depends on sources with their own purposes. The Plato of the middle dialogues is widely thought to speak more for Plato than for the historical Socrates.",
      },
    ],
    concepts: ["virtue", "skepticism"],
    relatedPhilosophers: ["plato", "aristotle", "epictetus"],
    relatedLessons: ["what-is-philosophy", "plato-allegory-cave"],
    furtherReading: [
      {
        label: "Socrates",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/socrates/",
        kind: "reference",
      },
      {
        label: "Apology",
        author: "Plato",
        href: "https://www.gutenberg.org/ebooks/1656",
        kind: "primary",
      },
    ],
  },
  {
    slug: "plato",
    name: "Plato",
    dates: "c. 428–348 BCE",
    era: "Classical Athens",
    traditions: ["ancient-greek"],
    summary:
      "Plato turned philosophy into a systematic enterprise. His dialogues explore knowledge, reality, justice, love, and the good, and his theory of Forms became one of the most influential and contested positions in the history of philosophy.",
    biography: [
      "Plato was born into an aristocratic Athenian family and became a follower of Socrates. After Socrates' execution he travelled, including to Sicily, and later founded the Academy in Athens, an informal but long-lived centre of research and teaching.",
      "He wrote dialogues rather than treatises. In them, Socrates is often the central speaker, but the positions advanced vary across the corpus. The Republic, Phaedo, Symposium, and Phaedrus are among the works that shaped later Platonism and much of Western theology and metaphysics.",
      "Plato's political involvement in Syracuse was unsuccessful. His later works, including the Laws, show a continuing concern with how institutions shape character.",
    ],
    context: [
      "Plato wrote in the aftermath of Athenian defeat and the execution of Socrates. His work asks how knowledge and political order are possible when opinion, rhetoric, and faction dominate public life.",
    ],
    ideas: [
      {
        title: "The theory of Forms",
        description:
          "Plato argues that sensible things are imperfect, changing instances of stable intelligible realities. Justice itself, equality itself, and beauty itself are not merely concepts in our minds but the objects that make particular just, equal, or beautiful things intelligible.",
      },
      {
        title: "Knowledge versus opinion",
        description:
          "For Plato, knowledge must be of what is stable and true, whereas opinion concerns what changes and could be otherwise. This contrast drives his account of education as a turning of the soul rather than the transfer of information.",
      },
      {
        title: "The tripartite soul",
        description:
          "In the Republic, Plato divides the soul into reason, spirit, and appetite. Justice in a person is the condition in which each part performs its proper function under the guidance of reason.",
      },
      {
        title: "The cave",
        description:
          "The allegory of the cave pictures ordinary opinion as imprisonment and education as a difficult ascent toward the light. It also raises the question of what happens to the person who returns to those still in the cave.",
      },
    ],
    works: [
      { title: "Republic", date: "c. 375 BCE", note: "Justice, education, metaphysics, and the ideal city." },
      { title: "Phaedo", note: "The soul, death, and the Forms." },
      { title: "Symposium", note: "Love, beauty, and philosophical ascent." },
      { title: "Meno", note: "Inquiry, recollection, and the possibility of learning." },
    ],
    criticisms: [
      {
        title: "The status of the Forms",
        description:
          "Aristotle and later critics ask how separate, immaterial Forms can explain the changing things we encounter. Plato himself raises difficulties about participation in the Parmenides.",
      },
      {
        title: "Political elitism",
        description:
          "The Republic's proposal that philosophers should rule has been read as a defence of expertise and as a warning about paternalism. Later readers disagree sharply about Plato's intentions.",
      },
    ],
    concepts: ["non-dualism", "the-self", "justice", "virtue", "personal-identity"],
    relatedPhilosophers: ["socrates", "aristotle", "shankaracharya"],
    relatedLessons: ["plato-allegory-cave", "ship-of-theseus", "what-is-philosophy"],
    furtherReading: [
      {
        label: "Plato",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/plato/",
        kind: "reference",
      },
      {
        label: "Republic",
        author: "Plato",
        href: "https://www.gutenberg.org/ebooks/1497",
        kind: "primary",
      },
    ],
  },
  {
    slug: "aristotle",
    name: "Aristotle",
    dates: "384–322 BCE",
    era: "Classical Greece",
    traditions: ["ancient-greek"],
    summary:
      "A student of Plato and teacher of Alexander the Great, Aristotle developed a comprehensive philosophy spanning logic, biology, metaphysics, ethics, and politics. His virtue ethics remains a live alternative to rule- and consequence-based morality.",
    biography: [
      "Aristotle was born in Stagira, in northern Greece. He studied at Plato's Academy for roughly twenty years before travelling and eventually founding his own school, the Lyceum, in Athens. His surviving works are largely lecture notes and treatises rather than polished dialogues.",
      "His range is extraordinary. He wrote on logic, physics, biology, psychology, metaphysics, ethics, politics, rhetoric, and poetics. The medieval Islamic and Christian philosophical traditions received him as 'the Philosopher', and his logic dominated European education for centuries.",
      "After Alexander's death, anti-Macedonian feeling in Athens made his position precarious. He withdrew to Chalcis, where he died the following year.",
    ],
    context: [
      "Aristotle worked after Plato and criticised central features of Platonism while preserving its ambition to explain reality systematically. His biological research gave his philosophy an empirical, classificatory orientation that differs markedly from Plato's mathematical and political focus.",
    ],
    ideas: [
      {
        title: "Eudaimonia and virtue",
        description:
          "Aristotle holds that the highest human good is eudaimonia, often translated as flourishing or living well. It is not a feeling but an activity of the soul in accordance with virtue, sustained across a complete life.",
      },
      {
        title: "The golden mean",
        description:
          "Virtues are dispositions to feel and act in the right way, at the right time, for the right reasons. Courage, for example, sits between cowardice and recklessness, but the mean is relative to the situation and the person.",
      },
      {
        title: "Practical wisdom",
        description:
          "Phronesis, or practical wisdom, is the capacity to perceive what a situation calls for. It cannot be reduced to a rulebook, which is why Aristotle's ethics emphasises judgment, habituation, and experience.",
      },
      {
        title: "Four causes",
        description:
          "Aristotle explains natural things through material, efficient, formal, and final causes. His teleological approach asks what something is for, a mode of explanation that remains influential in biology and ethics.",
      },
    ],
    works: [
      { title: "Nicomachean Ethics", note: "Flourishing, virtue, friendship, and practical wisdom." },
      { title: "Metaphysics", note: "Being, substance, form, and the unmoved mover." },
      { title: "Politics", note: "The polis, citizenship, constitutions, and the best life." },
      { title: "De Anima", note: "Soul, perception, and intellect." },
    ],
    criticisms: [
      {
        title: "Vagueness of the mean",
        description:
          "Critics argue that 'the right amount' is too indeterminate to guide action without additional principles. Defenders reply that this is a feature of ethical judgment, not a bug.",
      },
      {
        title: "Teleology and hierarchy",
        description:
          "Aristotle's natural teleology and his views about natural slavery and the subordination of women have been subjected to severe criticism. His defenders distinguish his historical limitations from his method.",
      },
    ],
    concepts: ["virtue", "eudaimonia", "empiricism"],
    relatedPhilosophers: ["plato", "confucius", "epictetus"],
    relatedLessons: ["aristotle-virtue", "confucian-ethics", "what-is-philosophy"],
    furtherReading: [
      {
        label: "Aristotle's Ethics",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/aristotle-ethics/",
        kind: "reference",
      },
      {
        label: "Nicomachean Ethics",
        author: "Aristotle",
        href: "https://www.gutenberg.org/ebooks/8438",
        kind: "primary",
      },
    ],
  },
  {
    slug: "epicurus",
    name: "Epicurus",
    dates: "341–270 BCE",
    era: "Hellenistic Greece",
    traditions: ["ancient-greek"],
    summary:
      "Epicurus founded a philosophical community in Athens whose aim was tranquillity. His hedonism identifies pleasure with the absence of pain and disturbance, making simplicity, friendship, and understanding central to the good life.",
    biography: [
      "Epicurus was born on Samos and taught in Asia Minor before settling in Athens, where he bought a house and garden. The Garden became the name of his school and community, which included women and enslaved people in a way that was unusual for the period.",
      "He wrote prolifically, but most of his output survives only in fragments and later reports. Three letters preserved by Diogenes Laertius, together with the Principal Doctrines and Vatican Sayings, give the clearest outline of his philosophy.",
      "Epicureanism was a practical philosophy of liberation: from fear of the gods, fear of death, unnecessary desire, and political ambition.",
    ],
    context: [
      "The Hellenistic schools responded to a world in which city-states had lost much of their independence. Epicurus offered a therapeutic philosophy centred on private life, friendship, and the removal of mental disturbance rather than political virtue.",
    ],
    ideas: [
      {
        title: "Pleasure as the absence of disturbance",
        description:
          "Epicurus distinguishes the fleeting pleasures of indulgence from the stable pleasure of living without bodily pain and mental anxiety. The latter is the goal, and it is achieved through limited desires and clear understanding.",
      },
      {
        title: "The classification of desires",
        description:
          "Some desires are natural and necessary, some natural but unnecessary, and some neither. Learning to see which is which frees a person from much of the restlessness that drives consumption and status-seeking.",
      },
      {
        title: "Death is not to be feared",
        description:
          "Epicurus argues that death is not an experience: where death is, we are not, and where we are, death is not. This is meant to dissolve the fear of an afterlife rather than to deny the sadness of loss.",
      },
      {
        title: "Friendship and the Garden",
        description:
          "Friendship is one of the greatest goods of life. The Epicurean community was designed to make trust, shared inquiry, and mutual care possible.",
      },
    ],
    works: [
      { title: "Letter to Menoeceus", note: "Ethics, death, and the nature of pleasure." },
      { title: "Principal Doctrines", note: "Forty short theses summarising Epicurean ethics." },
      { title: "Vatican Sayings", note: "Fragments preserved in later sources." },
    ],
    criticisms: [
      {
        title: "Misreading pleasure",
        description:
          "Epicurus is often caricatured as an advocate of luxury. His actual position is ascetic in its recommendations, though he defends pleasure as the criterion of the good.",
      },
      {
        title: "Quietism",
        description:
          "Critics ask whether withdrawal from public life is defensible when injustice requires political action. Epicureans reply that friendship and justice can be pursued without ambition for power.",
      },
    ],
    concepts: ["hedonism", "eudaimonia", "virtue"],
    relatedPhilosophers: ["epictetus", "seneca", "aristotle"],
    relatedLessons: ["death-and-meaning", "aristotle-virtue"],
    furtherReading: [
      {
        label: "Epicurus",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/epicurus/",
        kind: "reference",
      },
    ],
  },
  {
    slug: "epictetus",
    name: "Epictetus",
    dates: "c. 50–135 CE",
    era: "Roman Greece",
    traditions: ["ancient-greek"],
    summary:
      "A formerly enslaved Stoic teacher, Epictetus argued that freedom lies in how we judge and respond to what happens, not in controlling events. His recorded lectures became a foundational text of practical Stoicism.",
    biography: [
      "Epictetus was born in Phrygia and was enslaved as a young man, serving in Rome. After gaining his freedom he studied Stoicism and eventually taught at Nicopolis in Greece. His lectures were recorded by his student Arrian.",
      "The Discourses preserve a vivid, sometimes abrasive teaching style; the Enchiridion is a short manual of Stoic practice compiled from them. Epictetus did not write a systematic treatise, and the surviving texts are Arrian's literary versions of his teaching.",
      "His central concern was not abstract metaphysics but how to live with equanimity and integrity under conditions one does not control.",
    ],
    context: [
      "Epictetus taught during the early Roman Empire, when Stoicism offered educated people a philosophy of self-command, duty, and cosmic belonging. His own experience of slavery gave his language of freedom a particular force.",
    ],
    ideas: [
      {
        title: "The dichotomy of control",
        description:
          "Some things are up to us, such as our judgments and choices; others are not, such as reputation, health, and the actions of others. Confusion about this distinction is the root of much distress.",
      },
      {
        title: "Judgment and emotion",
        description:
          "Stoics hold that emotions involve evaluative judgments. Fear, for example, depends on judging something as bad in a way that may be mistaken. Changing the judgment can change the emotion.",
      },
      {
        title: "Role ethics",
        description:
          "We occupy multiple roles: child, friend, citizen, professional. Epictetus asks us to act well in each role while recognising that outcomes are not entirely ours.",
      },
      {
        title: "Freedom as inner independence",
        description:
          "For Epictetus, a person who is enslaved to appetite or fear is unfree even if legally free. Philosophy trains the will to want only what is genuinely one's own.",
      },
    ],
    works: [
      { title: "Discourses", note: "Lectures recorded by Arrian." },
      { title: "Enchiridion", note: "A short manual of Stoic practice." },
    ],
    criticisms: [
      {
        title: "Passivity toward injustice",
        description:
          "Critics argue that focusing on inner control can encourage resignation in the face of oppression. Epictetus' defenders point to his insistence on courage and social duty, but the tension is real.",
      },
      {
        title: "Emotional suppression",
        description:
          "The Stoic treatment of emotion is sometimes read as encouraging numbness. Ancient Stoics distinguish healthy emotions from destructive passions, but modern readers often find the ideal difficult to sustain.",
      },
    ],
    concepts: ["free-will", "virtue", "determinism"],
    relatedPhilosophers: ["marcus-aurelius", "seneca", "socrates"],
    relatedLessons: ["stoicism-dichotomy-of-control", "free-will-problem"],
    furtherReading: [
      {
        label: "Epictetus",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/epictetus/",
        kind: "reference",
      },
      {
        label: "Enchiridion",
        author: "Epictetus",
        href: "https://www.gutenberg.org/ebooks/451",
        kind: "primary",
      },
    ],
  },
  {
    slug: "marcus-aurelius",
    name: "Marcus Aurelius",
    dates: "121–180 CE",
    era: "Roman Empire",
    traditions: ["ancient-greek"],
    summary:
      "Roman emperor and Stoic practitioner, Marcus Aurelius left a private notebook of ethical exercises, now known as the Meditations. It is less a treatise than a record of a mind trying to live by its principles.",
    biography: [
      "Marcus Aurelius was adopted into the imperial family and became emperor in 161 CE. His reign was marked by plague, war on the Danube frontier, and political crisis, conditions that give the Meditations their distinctive tone of endurance and duty.",
      "The Meditations were written in Greek and were not intended for publication. They mix reminders, arguments, and self-rebukes: Marcus repeatedly tells himself to focus on what is within his control, to accept impermanence, and to act for the common good.",
      "He was educated in rhetoric and philosophy and was influenced by Epictetus, whose Discourses he knew. His notebook is one of the few surviving texts of Stoic practice by a practising Stoic.",
    ],
    context: [
      "Stoicism under the Roman Empire was closely tied to public service. Marcus' position as emperor makes his repeated emphasis on humility and the limits of power especially striking.",
    ],
    ideas: [
      {
        title: "The view from above",
        description:
          "Marcus frequently widens his perspective, imagining human affairs from a cosmic distance. The exercise is meant to shrink the apparent importance of insults, status, and momentary setbacks.",
      },
      {
        title: "Impermanence",
        description:
          "Everything passes: reputations, cities, and the people who hold them. Meditating on impermanence is not meant to produce despair but to clarify what is worth caring about.",
      },
      {
        title: "Duty and the common good",
        description:
          "A human being is a social animal, and action should serve the whole. Marcus returns repeatedly to the idea that what is good for the hive is good for the bee.",
      },
      {
        title: "The inner citadel",
        description:
          "The mind can find a quiet place within itself. Even when events are chaotic, judgment and intention remain one's own.",
      },
    ],
    works: [
      { title: "Meditations", note: "Private notes, written in Greek, never intended for publication." },
    ],
    criticisms: [
      {
        title: "The emperor's blind spot",
        description:
          "Marcus' Stoic cosmopolitanism coexisted with the realities of imperial power, including persecution and war. Readers must decide how far his philosophy should be judged against his political role.",
      },
      {
        title: "Not a system",
        description:
          "The Meditations are fragmentary and repetitive. They are valuable as practice, not as a complete philosophical argument.",
      },
    ],
    concepts: ["virtue", "determinism", "the-self"],
    relatedPhilosophers: ["epictetus", "seneca", "plato"],
    relatedLessons: ["stoicism-dichotomy-of-control", "death-and-meaning"],
    furtherReading: [
      {
        label: "Marcus Aurelius",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/marcus-aurelius/",
        kind: "reference",
      },
      {
        label: "Meditations",
        author: "Marcus Aurelius",
        href: "https://www.gutenberg.org/ebooks/2680",
        kind: "primary",
      },
    ],
  },
  {
    slug: "seneca",
    name: "Lucius Annaeus Seneca",
    dates: "c. 4 BCE–65 CE",
    era: "Roman Empire",
    traditions: ["ancient-greek"],
    summary:
      "Seneca was a Roman Stoic philosopher, dramatist, and political adviser whose letters and essays translate Stoic ideas into vivid guidance on time, anger, ambition, and mortality.",
    biography: [
      "Seneca was born in Hispania and educated in Rome. He was exiled under Claudius, recalled, and became tutor and later adviser to Nero. His wealth and political involvement made him a controversial figure, and he was forced to commit suicide after being implicated in a conspiracy against Nero.",
      "His philosophical works include the Letters to Lucilius, essays such as On Anger and On the Shortness of Life, and the Consolationes. He also wrote tragedies that explore passion, power, and revenge.",
      "Seneca's Stoicism is practical and rhetorical. He is less interested in technical logic than in helping a reader confront fear, loss, and the misuse of time.",
    ],
    context: [
      "Seneca lived through the turbulent politics of the early Roman Empire. His writing often addresses the gap between philosophical ideals and life at court, and his own career has been used both to illustrate and to question Stoic integrity.",
    ],
    ideas: [
      {
        title: "Time and mortality",
        description:
          "Seneca argues that people guard their money carefully but let others steal their time. Recognising that life is not short if it is used well is central to his ethics.",
      },
      {
        title: "The therapy of anger",
        description:
          "Anger is a destructive passion that can be resisted at its first stirrings. Seneca analyses its causes and recommends delay, self-awareness, and a larger perspective.",
      },
      {
        title: "Premeditation of adversity",
        description:
          "Imagining possible losses in advance can reduce their shock and help one appreciate what one has. This Stoic exercise is a preparation for action, not a demand to be pessimistic.",
      },
      {
        title: "Philosophy as medicine",
        description:
          "For Seneca, philosophy is a practice of healing the mind. Maxims and daily reflection are not decorations but instruments for change.",
      },
    ],
    works: [
      { title: "Letters to Lucilius", note: "Letters on ethics, time, friendship, and death." },
      { title: "On Anger", note: "An analysis and therapy of anger." },
      { title: "On the Shortness of Life", note: "A meditation on time and distraction." },
    ],
    criticisms: [
      {
        title: "The problem of hypocrisy",
        description:
          "Seneca's enormous wealth and proximity to Nero have led critics to question whether his philosophy was lived. Defenders reply that Stoicism is a practice for imperfect people, not a claim to perfection.",
      },
      {
        title: "Rhetorical excess",
        description:
          "Seneca's prose is brilliant but sometimes more persuasive than rigorous. Readers should distinguish his therapeutic aims from systematic argument.",
      },
    ],
    concepts: ["virtue", "hedonism", "determinism"],
    relatedPhilosophers: ["epictetus", "marcus-aurelius", "epicurus"],
    relatedLessons: ["stoicism-dichotomy-of-control", "death-and-meaning"],
    furtherReading: [
      {
        label: "Seneca",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/seneca/",
        kind: "reference",
      },
      {
        label: "Letters to Lucilius",
        author: "Seneca",
        href: "https://www.gutenberg.org/ebooks/56314",
        kind: "primary",
      },
    ],
  },
  {
    slug: "confucius",
    name: "Confucius",
    dates: "551–479 BCE",
    era: "Spring and Autumn period, China",
    traditions: ["confucianism", "chinese-philosophy"],
    summary:
      "A teacher and minor official whose sayings were compiled by later followers into the Analects, Confucius placed humane conduct, ritual propriety, and the cultivation of character at the centre of ethics and politics.",
    biography: [
      "Confucius was born in the state of Lu in what is now Shandong. He held minor administrative posts and spent years travelling with disciples, seeking a ruler who would put his ideas into practice. He eventually returned to Lu, where he taught and edited classical texts according to traditional accounts.",
      "The Analects is a collection of short sayings and anecdotes compiled by several generations of followers. It does not present a systematic theory, and the historical Confucius is known only through this layered textual tradition.",
      "Confucian thought became the basis of imperial education and bureaucracy, but it also developed in many directions, through thinkers such as Mencius and Xunzi and later Neo-Confucians.",
    ],
    context: [
      "Confucius lived during a period of political fragmentation and violence. His response was not withdrawal but the reconstruction of social order through ethical cultivation, ritual, and the example of exemplary persons.",
    ],
    ideas: [
      {
        title: "Ren",
        description:
          "Ren is often translated as humaneness, benevolence, or goodness. It is the disposition to care for others and to treat them with respect, and it is developed through practice rather than innate perfection.",
      },
      {
        title: "Li",
        description:
          "Li refers to ritual propriety: the forms of behaviour, ceremony, and courtesy that give social life shape. For Confucians, rituals are not empty conventions; they train attention and express respect.",
      },
      {
        title: "The junzi",
        description:
          "The exemplary person, or junzi, is someone whose character is cultivated through learning and self-examination. Moral authority rests on conduct rather than birth.",
      },
      {
        title: "Rectification of names",
        description:
          "When names are not correct, social roles and expectations become confused. Confucius connects clear language and proper role-fulfilment to political order.",
      },
    ],
    works: [
      { title: "Analects", note: "Sayings and anecdotes compiled by followers." },
      { title: "The Five Classics", note: "Traditional texts associated with the Confucian curriculum; their dating and authorship are debated." },
    ],
    criticisms: [
      {
        title: "Hierarchy and conformity",
        description:
          "Confucianism has been criticised for reinforcing social hierarchy, deference, and gender inequality. Contemporary Confucians often argue for a more egalitarian reading of ren and reciprocity.",
      },
      {
        title: "Ritual as rigidity",
        description:
          "Critics such as the Daoists questioned whether elaborate ritual obstructs spontaneity. Confucians reply that good ritual is a form of attentiveness, not mechanical rule-following.",
      },
    ],
    concepts: ["ren", "virtue", "social-contract"],
    relatedPhilosophers: ["laozi", "aristotle", "mencius"],
    relatedLessons: ["confucian-ethics", "aristotle-virtue"],
    furtherReading: [
      {
        label: "Confucius",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/confucius/",
        kind: "reference",
      },
      {
        label: "Analects",
        author: "Confucius",
        href: "https://ctext.org/analects",
        kind: "primary",
      },
    ],
  },
  {
    slug: "laozi",
    name: "Laozi",
    dates: "Traditional dates 6th century BCE; text likely later",
    era: "Warring States period, China",
    traditions: ["daoism", "chinese-philosophy"],
    summary:
      "The figure traditionally credited with the Dao De Jing, Laozi is associated with a philosophy of effortless action, naturalness, and the limits of language and deliberate control.",
    biography: [
      "Very little is known about the historical Laozi. Traditional accounts make him a contemporary of Confucius and a keeper of archives, but the Dao De Jing is now generally treated as a composite text compiled over several centuries, with material from the fourth century BCE and later.",
      "The text's authorship and unity are disputed. What matters for philosophy is the body of ideas associated with it: the Dao as an ineffable source and pattern, wu-wei as non-coercive action, and ziran as spontaneity or naturalness.",
      "Daoism developed in many directions, from political thought to alchemy, meditation, and religious practice. The philosophical texts most often studied are the Dao De Jing and the Zhuangzi.",
    ],
    context: [
      "The Dao De Jing responds to the violence and political ambition of the Warring States period. Its frequent advice to rulers is paradoxical: governing well may require less interference, not more.",
    ],
    ideas: [
      {
        title: "The Dao",
        description:
          "The Dao is often translated as 'the way', but the text insists that it cannot be captured fully in language. It is the source and pattern of things, not a personal creator or a simple rule.",
      },
      {
        title: "Wu-wei",
        description:
          "Wu-wei is often translated as non-action or effortless action. It does not mean doing nothing; it means acting without forcing, in accord with the situation and the natural tendencies of things.",
      },
      {
        title: "Ziran",
        description:
          "Ziran means self-so, natural, or spontaneous. The ideal is not primitivism but a kind of unforced authenticity that is not governed by external status or rigid convention.",
      },
      {
        title: "Softness and paradox",
        description:
          "The text repeatedly values the soft, low, and yielding over the hard, high, and forceful. Water is a central image: it yields and yet wears away stone.",
      },
    ],
    works: [
      { title: "Dao De Jing", note: "A composite text traditionally attributed to Laozi." },
      { title: "Zhuangzi", note: "A later Daoist text, not by Laozi, that develops related themes with humour and narrative." },
    ],
    criticisms: [
      {
        title: "Political quietism",
        description:
          "Critics ask whether wu-wei encourages passivity or allows injustice to continue. Defenders distinguish non-coercive action from indifference.",
      },
      {
        title: "Interpretive instability",
        description:
          "The text's brevity and paradoxes have supported mystical, political, and naturalistic readings. There is no single authoritative interpretation.",
      },
    ],
    concepts: ["wu-wei", "non-dualism"],
    relatedPhilosophers: ["confucius", "zhuangzi", "nagarjuna"],
    relatedLessons: ["daoism-wu-wei", "confucian-ethics"],
    furtherReading: [
      {
        label: "Laozi",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/laozi/",
        kind: "reference",
      },
      {
        label: "Dao De Jing",
        author: "Laozi",
        href: "https://ctext.org/dao-de-jing",
        kind: "primary",
      },
    ],
  },
  {
    slug: "buddha",
    name: "The Buddha (Siddhartha Gautama)",
    dates: "c. 5th century BCE",
    era: "Ancient India",
    traditions: ["buddhist-philosophy", "indian-philosophy"],
    summary:
      "The historical Buddha is the teacher associated with the Four Noble Truths and the Eightfold Path. Buddhist philosophy developed from his teachings into a diverse family of traditions, not a single doctrine.",
    biography: [
      "Traditional accounts say that Siddhartha Gautama was born into a princely family and left home to seek liberation from suffering. After years of ascetic practice he experienced awakening and spent the rest of his life teaching.",
      "The earliest surviving Buddhist texts are preserved in Pali and in Chinese and Tibetan translations, but they were transmitted orally for centuries. Scholars use comparative and historical methods to reconstruct early teachings, and the results are often debated.",
      "Buddhism spread across Asia and developed into many schools, including Theravada, Mahayana, and Vajrayana. Philosophical positions on self, causality, consciousness, and liberation differ significantly among them.",
    ],
    context: [
      "The Buddha taught in a milieu of Brahmanical ritual, renunciant movements, and debates about karma, rebirth, and the self. His teaching challenged several assumptions of his time, including the idea of a permanent, unchanging self.",
    ],
    ideas: [
      {
        title: "The Four Noble Truths",
        description:
          "The formula identifies suffering or unsatisfactoriness, its arising, its cessation, and the path to its cessation. It is presented as a diagnosis and a practice rather than a metaphysical creed.",
      },
      {
        title: "Anatta",
        description:
          "The teaching of non-self holds that what we call a person is a changing collection of conditioned processes, not a permanent essence. This is not simply a denial that persons exist.",
      },
      {
        title: "Dependent origination",
        description:
          "Things arise in dependence on conditions and cease when those conditions cease. This principle is used to explain suffering, rebirth, and liberation without appealing to a permanent self.",
      },
      {
        title: "The middle way",
        description:
          "The path avoids both sensual indulgence and extreme asceticism. In later philosophy, the middle way also names a position between eternalism and annihilationism.",
      },
    ],
    works: [
      { title: "Early Buddhist discourses", note: "Preserved in the Pali canon and parallel collections; orally transmitted before being written down." },
      { title: "Dhammapada", note: "A popular anthology of verses, with multiple recensions and translations." },
    ],
    criticisms: [
      {
        title: "Historical reconstruction",
        description:
          "The Buddha left no writings, and the early texts reflect centuries of transmission. Claims about his exact words should be treated with caution.",
      },
      {
        title: "Philosophical disputes",
        description:
          "Buddhist thinkers disagree about rebirth, the status of the external world, and the nature of consciousness. Non-Buddhist critics have questioned the coherence of non-self and the possibility of liberation.",
      },
    ],
    concepts: ["anatta", "dependent-origination", "consciousness", "emptiness"],
    relatedPhilosophers: ["nagarjuna", "shankaracharya", "hume"],
    relatedLessons: ["buddhist-anatta", "dependent-origination", "death-and-meaning"],
    furtherReading: [
      {
        label: "Buddha",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/buddha/",
        kind: "reference",
      },
      {
        label: "Dhammapada",
        author: "Anonymous",
        href: "https://www.gutenberg.org/ebooks/2017",
        kind: "primary",
      },
    ],
  },
  {
    slug: "nagarjuna",
    name: "Nagarjuna",
    dates: "c. 150–250 CE",
    era: "Kushan period, India",
    traditions: ["buddhist-philosophy", "indian-philosophy"],
    summary:
      "Nagarjuna founded the Madhyamaka school of Buddhist philosophy. His analysis of emptiness and dependent origination is one of the most demanding and influential arguments in Asian philosophy.",
    biography: [
      "Nagarjuna is associated with southern India and with the great monastic university at Nalanda, though details of his life are uncertain and later hagiographies are legendary. He is credited with founding the Madhyamaka, or 'middle way', school.",
      "His central work, the Mulamadhyamakakarika, examines causation, motion, the self, and the nature of the Buddha's teaching through a distinctive method of critique. He also wrote or inspired commentaries and devotional works.",
      "Nagarjuna's philosophy was transmitted to Tibet and East Asia, where it shaped later Buddhist thought. His interpreters disagree about whether he is a sceptic, a metaphysical idealist, or a defender of a specific view of emptiness.",
    ],
    context: [
      "Nagarjuna wrote in a period of vigorous debate among Buddhist schools and with Brahmanical philosophers. His target is often the idea that things possess svabhava, an intrinsic nature or essence that makes them what they are independently of other things.",
    ],
    ideas: [
      {
        title: "Emptiness",
        description:
          "Emptiness is not nothingness. To say that things are empty is to say that they lack independent, intrinsic existence and arise dependently.",
      },
      {
        title: "Dependent origination",
        description:
          "Nagarjuna radicalises the Buddha's teaching: if everything arises dependently, nothing possesses an essence. Causation itself becomes a relation without independently existing relata.",
      },
      {
        title: "The two truths",
        description:
          "Conventional truth concerns the world of everyday practice and language; ultimate truth concerns emptiness. The relation between the two is a central interpretive problem.",
      },
      {
        title: "The tetralemma",
        description:
          "Nagarjuna often examines four alternatives: that something exists, does not exist, both, or neither. Refusing all four is not a rejection of logic but a way of exposing conceptual presuppositions.",
      },
    ],
    works: [
      { title: "Mulamadhyamakakarika", note: "The foundational Madhyamaka treatise." },
      { title: "Vigrahavyavartani", note: "A defence of emptiness against objections." },
    ],
    criticisms: [
      {
        title: "The charge of nihilism",
        description:
          "Critics have accused Madhyamaka of denying the reality of the world. Nagarjuna insists that emptiness is itself empty and that conventional truth remains practically authoritative.",
      },
      {
        title: "Logical coherence",
        description:
          "The tetralemma and the critique of causation have led to debate about whether Nagarjuna's method can be made consistent with classical logic.",
      },
    ],
    concepts: ["emptiness", "dependent-origination", "non-dualism"],
    relatedPhilosophers: ["buddha", "shankaracharya", "laozi"],
    relatedLessons: ["dependent-origination", "advaita-vedanta", "buddhist-anatta"],
    furtherReading: [
      {
        label: "Nagarjuna",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/nagarjuna/",
        kind: "reference",
      },
    ],
  },
  {
    slug: "shankaracharya",
    name: "Adi Shankaracharya",
    dates: "c. 788–820 CE (traditional)",
    era: "Early medieval India",
    traditions: ["vedanta", "indian-philosophy"],
    summary:
      "Shankara was the most influential exponent of Advaita Vedanta, arguing that the ultimate reality is non-dual Brahman and that the apparent plurality of selves and world is due to ignorance.",
    biography: [
      "Traditional biographies place Shankara in the eighth century and credit him with an extensive programme of commentary and debate. He is said to have travelled across India establishing monastic centres and engaging rival schools.",
      "His works include commentaries on the principal Upanishads, the Brahma Sutras, and the Bhagavad Gita, as well as independent treatises such as the Upadesasahasri. The authorship of some attributed works is disputed.",
      "Advaita Vedanta was not the only Vedanta school. Ramanuja, Madhva, and others developed qualified non-dualism and dualist alternatives, often in direct criticism of Shankara.",
    ],
    context: [
      "Shankara's philosophy systematises Upanishadic teachings about Brahman and Atman in dialogue with Buddhist and rival Hindu schools. His account of maya and ignorance is meant to explain both the authority of scripture and the ordinary experience of a plural world.",
    ],
    ideas: [
      {
        title: "Brahman and Atman",
        description:
          "Brahman is the ultimate reality; Atman, the innermost self, is not other than Brahman. The apparent distinction between the individual self and the whole is a product of ignorance.",
      },
      {
        title: "Maya",
        description:
          "Maya is often translated as illusion, but it is better understood as the power of misapprehension that makes the world appear as it does. The world is not simply nothing; its status is a matter of intense interpretive dispute.",
      },
      {
        title: "Two levels of truth",
        description:
          "Shankara distinguishes conventional truth, which governs everyday experience and scripture, from ultimate truth, in which non-duality is realised. The distinction is not a licence to ignore the world.",
      },
      {
        title: "Liberation through knowledge",
        description:
          "Bondage is ultimately a matter of ignorance, and liberation is the recognition of one's identity with Brahman. This does not mean that ethical action is irrelevant, but it relocates the final goal beyond action.",
      },
    ],
    works: [
      { title: "Brahma Sutra Bhasya", note: "A commentary on the foundational Vedanta text." },
      { title: "Upadesasahasri", note: "A prose and verse manual of Advaita teaching." },
      { title: "Upanishad commentaries", note: "Commentaries on the principal Upanishads." },
    ],
    criticisms: [
      {
        title: "The status of the world",
        description:
          "Rival Vedantins argue that maya makes the world too unreal and undermines ethics and devotion. Shankara's defenders distinguish empirical reality from ultimate reality.",
      },
      {
        title: "Authorial uncertainty",
        description:
          "The traditional biography is much later than Shankara, and scholars dispute the authorship of several works attributed to him.",
      },
    ],
    concepts: ["non-dualism", "maya", "the-self"],
    relatedPhilosophers: ["plato", "nagarjuna", "buddha"],
    relatedLessons: ["advaita-vedanta", "dependent-origination"],
    furtherReading: [
      {
        label: "Shankara",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/shankara/",
        kind: "reference",
      },
    ],
  },
  {
    slug: "mencius",
    name: "Mencius",
    dates: "c. 372–289 BCE",
    era: "Warring States period, China",
    traditions: ["confucianism", "chinese-philosophy"],
    summary:
      "Mencius developed Confucian ethics through the claim that human beings have natural 'sprouts' of virtue. His dialogues defend the goodness of human nature and the political importance of the people's welfare.",
    biography: [
      "Mencius, or Mengzi, was born in the state of Zou and studied in the Confucian tradition. Like Confucius, he travelled from court to court offering advice to rulers, though with limited success.",
      "The text known as the Mencius records his conversations and debates. It was later canonised as one of the Four Books of Confucianism and became central to the examination curriculum in imperial China.",
      "Mencius argued against rival thinkers, including Mohists and Yangists, and defended a distinctly Confucian account of ethical cultivation and benevolent government.",
    ],
    context: [
      "Mencius wrote during the Warring States period, when rulers competed for power and thinkers proposed competing remedies for disorder. His confidence in human goodness was a direct challenge to views that saw people as naturally self-interested.",
    ],
    ideas: [
      {
        title: "The sprouts of virtue",
        description:
          "Mencius claims that all people have incipient moral feelings: compassion, shame, reverence, and a sense of right and wrong. Ethical education cultivates these sprouts rather than implanting morality from outside.",
      },
      {
        title: "Human nature is good",
        description:
          "His famous claim that human nature is good does not mean that people are always good. It means that the tendencies toward virtue are innate, while bad environments and neglect can distort them.",
      },
      {
        title: "Benevolent government",
        description:
          "A ruler should govern for the welfare of the people. Mencius argues that a ruler who loses the people's support forfeits the mandate of heaven.",
      },
      {
        title: "Cultivating qi",
        description:
          "Mencius describes a practice of nourishing a moral energy or qi that is developed through upright conduct and sustained commitment.",
      },
    ],
    works: [
      { title: "Mencius", note: "Conversations and debates compiled by followers." },
    ],
    criticisms: [
      {
        title: "Optimistic psychology",
        description:
          "Xunzi, a later Confucian, argued that human nature is inclined toward self-interest and requires deliberate ritual training. The disagreement remains one of the great debates in Confucian ethics.",
      },
      {
        title: "Hierarchy",
        description:
          "Mencius defends social roles and filial obligations that modern readers may find hierarchical. Contemporary interpreters debate how far his ethics can be separated from the institutions of his time.",
      },
    ],
    concepts: ["ren", "virtue"],
    relatedPhilosophers: ["confucius", "aristotle", "laozi"],
    relatedLessons: ["confucian-ethics", "aristotle-virtue"],
    furtherReading: [
      {
        label: "Mencius",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/mencius/",
        kind: "reference",
      },
      {
        label: "Mencius",
        author: "Mencius",
        href: "https://ctext.org/mengzi",
        kind: "primary",
      },
    ],
  },
  {
    slug: "zhuangzi",
    name: "Zhuangzi",
    dates: "c. 369–286 BCE",
    era: "Warring States period, China",
    traditions: ["daoism", "chinese-philosophy"],
    summary:
      "The Zhuangzi is one of the most imaginative works of Chinese philosophy. Its stories and arguments undermine fixed distinctions, celebrate transformation, and explore the freedom of wandering without attachment.",
    biography: [
      "The historical Zhuangzi is associated with a small office in the state of Meng and with a refusal of political service. The book bearing his name is a composite text: the 'inner chapters' are generally regarded as the earliest and most distinctive, while later chapters reflect other hands.",
      "The text mixes anecdote, dialogue, paradox, and humour. It is less systematic than the Dao De Jing and more sceptical about the possibility of a single correct perspective.",
      "Zhuangzi's influence extends across Chinese literature, art, and religion. His image of the butterfly dream is one of the most famous thought experiments in world philosophy.",
    ],
    context: [
      "Zhuangzi wrote in the same turbulent period as Mencius. His response to political ambition was not reform but a kind of philosophical wandering that loosens the grip of conventional success and failure.",
    ],
    ideas: [
      {
        title: "The transformation of things",
        description:
          "Zhuangzi emphasises that all things change and that fixed categories are provisional. Death, for example, may be a transformation rather than an absolute end.",
      },
      {
        title: "The butterfly dream",
        description:
          "Zhuangzi dreams he is a butterfly, then wakes unsure whether he is a man who dreamt of being a butterfly or a butterfly now dreaming of being a man. The story questions the boundary between waking and dreaming, self and world.",
      },
      {
        title: "The usefulness of the useless",
        description:
          "A gnarled tree survives because it is useless to carpenters. Zhuangzi repeatedly suggests that conventional utility can be a trap and that apparent uselessness may be a form of freedom.",
      },
      {
        title: "Wandering beyond distinctions",
        description:
          "The ideal is not a doctrine but a way of moving through the world without being fixed by rigid oppositions such as right and wrong, life and death.",
      },
    ],
    works: [
      { title: "Zhuangzi", note: "A composite text; the inner chapters are the most philosophically distinctive." },
    ],
    criticisms: [
      {
        title: "Relativism",
        description:
          "Critics ask whether Zhuangzi's undermining of fixed distinctions leaves any basis for judgment. Defenders argue that his scepticism is therapeutic rather than a denial of all standards.",
      },
      {
        title: "Textual layering",
        description:
          "The Zhuangzi contains material from different periods and voices. Attributing every idea to a single historical author is unsafe.",
      },
    ],
    concepts: ["wu-wei", "non-dualism", "skepticism"],
    relatedPhilosophers: ["laozi", "confucius", "buddha"],
    relatedLessons: ["daoism-wu-wei", "confucian-ethics"],
    furtherReading: [
      {
        label: "Zhuangzi",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/zhuangzi/",
        kind: "reference",
      },
      {
        label: "Zhuangzi",
        author: "Zhuangzi",
        href: "https://ctext.org/zhuangzi",
        kind: "primary",
      },
    ],
  },
  {
    slug: "ibn-sina",
    name: "Ibn Sina (Avicenna)",
    dates: "980–1037 CE",
    era: "Islamic Golden Age",
    traditions: ["islamic-philosophy"],
    summary:
      "A Persian physician and philosopher, Ibn Sina synthesised Aristotelian and Neoplatonic thought in a vast system that shaped Islamic, Jewish, and Christian philosophy for centuries.",
    biography: [
      "Ibn Sina was born near Bukhara and was a prodigy in medicine and philosophy. He served various rulers as a physician and administrator and wrote an enormous corpus, much of which survives.",
      "His philosophical encyclopedia Al-Shifa and the shorter Al-Najat cover logic, natural philosophy, metaphysics, and ethics. The Canon of Medicine was a standard medical text in Europe for centuries.",
      "Ibn Sina's work was central to the transmission of Greek philosophy into the Islamic world and, through Latin translations, into medieval Europe. His distinction between essence and existence and his argument for a necessary being were widely debated.",
    ],
    context: [
      "Ibn Sina wrote within a sophisticated Islamic intellectual culture that had translated and transformed Greek philosophy. His synthesis prompted major critical responses, most famously al-Ghazali's critique of the philosophers.",
    ],
    ideas: [
      {
        title: "Essence and existence",
        description:
          "For Ibn Sina, a thing's essence can be conceived without its existence. Existence is therefore not part of what a contingent thing is; it must be received from something necessary.",
      },
      {
        title: "The necessary being",
        description:
          "The chain of contingent things requires a being whose existence is necessary in itself. This is not simply a temporal first cause but a metaphysical ground of all existence.",
      },
      {
        title: "The flying man",
        description:
          "Ibn Sina asks us to imagine a person created fully formed and floating in the air, deprived of sensory input. The person would still be aware of their own existence, suggesting a kind of self-awareness that is not dependent on the body.",
      },
      {
        title: "Emanation",
        description:
          "Ibn Sina adopts a Neoplatonic scheme in which the world proceeds from the One through a hierarchy of intellects. The details of this emanation are one of the most contested parts of his system.",
      },
    ],
    works: [
      { title: "Al-Shifa", note: "A comprehensive philosophical encyclopedia." },
      { title: "Al-Najat", note: "A shorter summary of his philosophy." },
      { title: "The Canon of Medicine", note: "A major medical encyclopedia." },
    ],
    criticisms: [
      {
        title: "Al-Ghazali's critique",
        description:
          "Al-Ghazali argued that the philosophers could not demonstrate key metaphysical claims and that their necessitarian account of causation left no room for divine action. The debate shaped later Islamic philosophy.",
      },
      {
        title: "Emanation and creation",
        description:
          "The relation between philosophical emanation and Islamic accounts of creation remains a central interpretive issue.",
      },
    ],
    concepts: ["rationalism", "the-self", "consciousness"],
    relatedPhilosophers: ["aristotle", "descartes", "kant"],
    relatedLessons: ["problem-of-other-minds", "what-is-philosophy"],
    furtherReading: [
      {
        label: "Ibn Sina",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/ibn-sina/",
        kind: "reference",
      },
    ],
  },
  {
    slug: "descartes",
    name: "René Descartes",
    dates: "1596–1650",
    era: "Early modern Europe",
    traditions: ["modern-european"],
    summary:
      "Descartes used radical doubt to find an indubitable foundation for knowledge. His cogito, mind-body dualism, and vision of a mathematical science of nature made him a central figure of modern philosophy.",
    biography: [
      "Descartes was born in France, educated by Jesuits, and spent much of his adult life in the Dutch Republic. He was a mathematician and natural philosopher as well as a metaphysician; his coordinate geometry was a major contribution to mathematics.",
      "His Meditations on First Philosophy (1641) presents six days of meditation in which the meditator doubts the senses, dreams, and even mathematics, then discovers that the act of thinking cannot be doubted. From there Descartes argues for the existence of God and the reliability of clear and distinct ideas.",
      "Descartes' philosophy was controversial in his lifetime, especially his account of the Eucharist and his dualism. He died in Stockholm after being invited to tutor Queen Christina.",
    ],
    context: [
      "Descartes wrote during the Scientific Revolution, when traditional Aristotelian natural philosophy was being challenged. He sought a new foundation for knowledge that would secure the possibility of a mathematical physics.",
    ],
    ideas: [
      {
        title: "Methodological doubt",
        description:
          "Descartes doubts whatever can be doubted in order to find something that cannot. The doubt is methodological rather than a permanent scepticism: it is a tool for clearing away prejudice.",
      },
      {
        title: "The cogito",
        description:
          "Even if I am deceived about everything, the fact that I am thinking cannot be doubted. In the Discourse he formulates this as 'I think, therefore I am'.",
      },
      {
        title: "Mind-body dualism",
        description:
          "Descartes holds that mind and body are distinct substances: mind is essentially thinking and unextended, body is extended and non-thinking. Their interaction becomes a central problem for his successors.",
      },
      {
        title: "Clear and distinct ideas",
        description:
          "Descartes treats clarity and distinctness as marks of truth, provided that God exists and is not a deceiver. The argument has been accused of circularity.",
      },
    ],
    works: [
      { title: "Meditations on First Philosophy", date: "1641", note: "Doubt, the cogito, God, and the mind-body relation." },
      { title: "Discourse on the Method", date: "1637", note: "A more accessible presentation of his method and metaphysics." },
      { title: "Principles of Philosophy", date: "1644", note: "A systematic textbook of his philosophy." },
    ],
    criticisms: [
      {
        title: "The Cartesian circle",
        description:
          "Descartes uses clear and distinct ideas to prove God's existence and then relies on God to guarantee clear and distinct ideas. Critics ask whether this is circular.",
      },
      {
        title: "The interaction problem",
        description:
          "If mind and body are distinct substances, how do they causally interact? Princess Elisabeth of Bohemia pressed this objection in correspondence with Descartes.",
      },
    ],
    concepts: ["rationalism", "skepticism", "consciousness", "the-self"],
    relatedPhilosophers: ["plato", "hume", "kant", "ibn-sina"],
    relatedLessons: ["problem-of-other-minds", "problem-of-induction", "what-is-philosophy"],
    furtherReading: [
      {
        label: "Descartes",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/descartes/",
        kind: "reference",
      },
      {
        label: "Meditations",
        author: "René Descartes",
        href: "https://www.gutenberg.org/ebooks/23306",
        kind: "primary",
      },
    ],
  },
  {
    slug: "hume",
    name: "David Hume",
    dates: "1711–1776",
    era: "Scottish Enlightenment",
    traditions: ["modern-european"],
    summary:
      "Hume pushed empiricism to sceptical conclusions about causation, induction, and the self, while developing a naturalistic account of morality and human nature.",
    biography: [
      "Hume was born in Edinburgh and studied there before working in France, where he wrote A Treatise of Human Nature. The book was not well received at first, and he later recast its arguments in the Enquiry Concerning Human Understanding and the Enquiry Concerning the Principles of Morals.",
      "He worked as a librarian, diplomat, and historian, and his History of England was widely read. His philosophical reputation grew after his death, and his sceptical arguments remain central to epistemology and metaphysics.",
      "Hume's writing is elegant and often ironic. He presents his scepticism as a natural result of inquiry, not as a counsel of despair.",
    ],
    context: [
      "Hume wrote in the Scottish Enlightenment, in dialogue with Locke, Berkeley, and Newton. He attempted to apply experimental method to the study of human nature.",
    ],
    ideas: [
      {
        title: "Impressions and ideas",
        description:
          "All simple ideas are derived from impressions, the livelier perceptions of experience. This empiricist principle leads Hume to reject ideas that cannot be traced to experience.",
      },
      {
        title: "Causation as custom",
        description:
          "We never perceive a necessary connection between cause and effect, only constant conjunction and expectation. The idea of causal necessity arises from habit, not from reason.",
      },
      {
        title: "The problem of induction",
        description:
          "No argument can justify our confidence that the future will resemble the past without already assuming that uniformity. This remains one of the deepest problems in the philosophy of science.",
      },
      {
        title: "The bundle theory of the self",
        description:
          "Introspection reveals only particular perceptions, never a simple, unchanging self. Hume concludes that the self is a bundle of perceptions to which we attach a fiction of identity.",
      },
    ],
    works: [
      { title: "A Treatise of Human Nature", date: "1739–1740", note: "His most systematic work." },
      { title: "An Enquiry Concerning Human Understanding", date: "1748", note: "Causation, induction, and scepticism." },
      { title: "An Enquiry Concerning the Principles of Morals", date: "1751", note: "Moral sentiment and the foundations of ethics." },
    ],
    criticisms: [
      {
        title: "Scepticism and practice",
        description:
          "Hume's sceptical conclusions seem to undermine the very reasoning we cannot avoid using. He responds that nature compels us to live by custom, but critics ask whether this is a philosophical answer.",
      },
      {
        title: "The is-ought gap",
        description:
          "Hume notes that writers often move from descriptive claims to moral conclusions without explanation. Whether this is a strict logical gap is still debated.",
      },
    ],
    concepts: ["empiricism", "skepticism", "induction", "the-self", "free-will"],
    relatedPhilosophers: ["descartes", "kant", "buddha"],
    relatedLessons: ["problem-of-induction", "buddhist-anatta", "problem-of-other-minds"],
    furtherReading: [
      {
        label: "Hume",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/hume/",
        kind: "reference",
      },
      {
        label: "An Enquiry Concerning Human Understanding",
        author: "David Hume",
        href: "https://www.gutenberg.org/ebooks/9662",
        kind: "primary",
      },
    ],
  },
  {
    slug: "kant",
    name: "Immanuel Kant",
    dates: "1724–1804",
    era: "Enlightenment Germany",
    traditions: ["modern-european"],
    summary:
      "Kant attempted to reconcile rationalism and empiricism by arguing that the mind actively structures experience. His moral philosophy grounds duty in reason and autonomy.",
    biography: [
      "Kant spent almost his entire life in Königsberg, where he taught at the university and wrote a series of works that transformed philosophy. He was known for his punctual habits and his wide-ranging lectures on logic, metaphysics, ethics, geography, and anthropology.",
      "The Critique of Pure Reason (1781) responds to Hume's scepticism by arguing that space, time, and the categories are conditions of possible experience rather than features of things in themselves. The Groundwork (1785) and Critique of Practical Reason (1788) develop his ethics.",
      "Kant's later work includes the Critique of Judgment (1790), on aesthetics and teleology, and political essays on enlightenment, perpetual peace, and cosmopolitan right.",
    ],
    context: [
      "Kant wrote during the Enlightenment and was influenced by Newtonian physics and Rousseau's moral thought. His project was to secure the authority of science while preserving room for freedom, morality, and faith.",
    ],
    ideas: [
      {
        title: "The Copernican revolution",
        description:
          "Kant proposes that we should think of objects conforming to our cognition rather than our cognition conforming to objects. The mind contributes the forms through which experience is possible.",
      },
      {
        title: "Synthetic a priori knowledge",
        description:
          "Some judgments are both informative and independent of experience, such as mathematical truths and the principle that every event has a cause. Kant asks how such judgments are possible.",
      },
      {
        title: "The categorical imperative",
        description:
          "Morality requires acting on maxims that can be willed as universal laws, and treating humanity always as an end and never merely as a means. Moral worth lies in acting from duty, not merely in accordance with duty.",
      },
      {
        title: "Autonomy and freedom",
        description:
          "A free will is a will that gives itself the moral law. Kant locates human dignity in this capacity for self-legislation, while acknowledging that freedom cannot be demonstrated theoretically.",
      },
    ],
    works: [
      { title: "Critique of Pure Reason", date: "1781/1787", note: "Knowledge, experience, and the limits of metaphysics." },
      { title: "Groundwork of the Metaphysics of Morals", date: "1785", note: "The categorical imperative and autonomy." },
      { title: "Critique of Practical Reason", date: "1788", note: "Freedom, moral law, and the highest good." },
      { title: "Critique of Judgment", date: "1790", note: "Aesthetics and teleology." },
    ],
    criticisms: [
      {
        title: "Idealism and the thing in itself",
        description:
          "Kant's distinction between appearances and things in themselves has been criticised as incoherent: if we cannot know things in themselves, how can we know that they exist?",
      },
      {
        title: "Formalism in ethics",
        description:
          "Critics such as Hegel and later virtue ethicists argue that the categorical imperative is too abstract to guide action and neglects character and context.",
      },
    ],
    concepts: ["categorical-imperative", "rationalism", "empiricism", "free-will", "justice"],
    relatedPhilosophers: ["hume", "descartes", "nietzsche", "simone-de-beauvoir"],
    relatedLessons: ["veil-of-ignorance", "free-will-problem", "what-is-philosophy"],
    furtherReading: [
      {
        label: "Kant",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/kant/",
        kind: "reference",
      },
      {
        label: "Groundwork of the Metaphysics of Morals",
        author: "Immanuel Kant",
        href: "https://www.gutenberg.org/ebooks/5682",
        kind: "primary",
      },
    ],
  },
  {
    slug: "schopenhauer",
    name: "Arthur Schopenhauer",
    dates: "1788–1860",
    era: "19th-century Germany",
    traditions: ["modern-european"],
    summary:
      "Schopenhauer argued that reality is fundamentally will, a blind striving that produces suffering. His pessimism, aesthetics, and ethics of compassion influenced Nietzsche, Wagner, and later existentialism.",
    biography: [
      "Schopenhauer studied in Göttingen and Berlin and was deeply influenced by Kant and by classical Indian thought, especially the Upanishads. His major work, The World as Will and Representation, appeared in 1818 and attracted little attention at first.",
      "He taught at Berlin but failed to compete with Hegel's popularity and eventually retired to Frankfurt, where he lived as a recluse. His reputation grew in the final decade of his life.",
      "Schopenhauer's prose is combative and aphoristic. He wrote on ethics, aesthetics, sexuality, and the suffering of existence, and his work helped shape the pessimistic strand of modern European philosophy.",
    ],
    context: [
      "Schopenhauer developed Kant's distinction between appearance and thing in itself but identified the thing in itself with will. He was also one of the first European philosophers to engage seriously with Indian philosophical texts, though his reading was selective.",
    ],
    ideas: [
      {
        title: "The world as will and representation",
        description:
          "The world we experience is representation, structured by the mind. Beneath it, Schopenhauer argues, is will: a blind, striving force that manifests in nature and in human desire.",
      },
      {
        title: "Suffering and desire",
        description:
          "Because will is endless striving, satisfaction is temporary and boredom follows. Life oscillates between pain and boredom, a claim that grounds his pessimism.",
      },
      {
        title: "Aesthetic contemplation",
        description:
          "In aesthetic experience, especially music, we can temporarily escape the demands of will. Art offers a disinterested contemplation of ideas rather than a satisfaction of desire.",
      },
      {
        title: "Compassion",
        description:
          "Schopenhauer argues that morality rests on compassion, the recognition that the distinction between self and other is metaphysically shallow. This is one of his most attractive ethical ideas.",
      },
    ],
    works: [
      { title: "The World as Will and Representation", date: "1818/1844", note: "His central philosophical work." },
      { title: "On the Basis of Morality", date: "1840", note: "An essay on compassion and ethics." },
      { title: "Parerga and Paralipomena", date: "1851", note: "Essays and aphorisms that brought him late fame." },
    ],
    criticisms: [
      {
        title: "Pessimism as a philosophical claim",
        description:
          "Critics ask whether Schopenhauer's pessimism is an argument or a temperament. His claim that life contains more suffering than happiness is difficult to quantify or justify.",
      },
      {
        title: "The metaphysics of will",
        description:
          "The identification of the thing in itself with will is speculative and has been criticised as an unwarranted extension of human psychology to reality as a whole.",
      },
    ],
    concepts: ["pessimism", "the-self", "hedonism"],
    relatedPhilosophers: ["kant", "nietzsche", "buddha"],
    relatedLessons: ["nietzsche-nihilism", "death-and-meaning", "buddhist-anatta"],
    furtherReading: [
      {
        label: "Schopenhauer",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/schopenhauer/",
        kind: "reference",
      },
    ],
  },
  {
    slug: "nietzsche",
    name: "Friedrich Nietzsche",
    dates: "1844–1900",
    era: "19th-century Germany",
    traditions: ["modern-european"],
    summary:
      "Nietzsche diagnosed the collapse of traditional values and demanded their revaluation. His aphoristic philosophy of will to power, perspectivism, and self-overcoming remains provocative and widely misread.",
    biography: [
      "Nietzsche was born in Prussia, became professor of classical philology at Basel at twenty-four, and resigned in 1879 because of ill health. He spent the following decade writing in Switzerland and Italy, often in isolation.",
      "His major works include The Gay Science, Thus Spoke Zarathustra, Beyond Good and Evil, On the Genealogy of Morality, and Twilight of the Idols. In 1889 he suffered a mental collapse and spent the rest of his life in care.",
      "Nietzsche's sister Elisabeth Förster-Nietzsche edited his unpublished notes after his death and promoted a distorted image of his thought. Readers must be careful with the posthumously assembled 'Will to Power' and with Nazi appropriations of his work.",
    ],
    context: [
      "Nietzsche wrote after Darwin, in a Europe increasingly shaped by secular science and nationalism. He saw the death of God as a cultural event whose consequences had not yet been understood.",
    ],
    ideas: [
      {
        title: "The death of God",
        description:
          "The phrase names the collapse of the metaphysical and moral framework that had sustained European values. Nietzsche does not celebrate this as simple liberation; he asks what will replace it and what damage the transition will cause.",
      },
      {
        title: "Nihilism and revaluation",
        description:
          "Nihilism is the condition in which the highest values devalue themselves. Nietzsche seeks not to escape valuing but to create values that affirm life rather than deny it.",
      },
      {
        title: "Will to power",
        description:
          "Will to power is not simply the desire to dominate others. It names a tendency toward growth, expansion, and self-overcoming that Nietzsche sees in life and culture. Its interpretation is disputed.",
      },
      {
        title: "Master and slave morality",
        description:
          "In the Genealogy, Nietzsche contrasts an aristocratic valuation of strength and nobility with a reactive morality that revalues weakness as goodness. The account is a genealogy, not a simple endorsement of domination.",
      },
    ],
    works: [
      { title: "The Gay Science", date: "1882/1887", note: "Includes the parable of the madman and the death of God." },
      { title: "Thus Spoke Zarathustra", date: "1883–1885", note: "A philosophical narrative of self-overcoming." },
      { title: "Beyond Good and Evil", date: "1886", note: "A critique of modern morality and philosophy." },
      { title: "On the Genealogy of Morality", date: "1887", note: "A genealogy of moral concepts." },
    ],
    criticisms: [
      {
        title: "Political misappropriation",
        description:
          "Nietzsche's ideas were used by Nazi ideologues, despite his explicit contempt for antisemitism and nationalism. His sister's editing contributed to the distortion.",
      },
      {
        title: "Elitism and cruelty",
        description:
          "Nietzsche's praise of strength and his criticisms of compassion raise the question of whether his philosophy can support a humane ethics. Defenders argue that will to power is primarily a psychological and cultural thesis.",
      },
    ],
    concepts: ["nihilism", "will-to-power", "existentialism", "pessimism"],
    relatedPhilosophers: ["schopenhauer", "camus", "sartre", "buddha"],
    relatedLessons: ["nietzsche-nihilism", "camus-absurd", "death-and-meaning"],
    furtherReading: [
      {
        label: "Nietzsche",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/nietzsche/",
        kind: "reference",
      },
      {
        label: "The Gay Science",
        author: "Friedrich Nietzsche",
        href: "https://www.gutenberg.org/ebooks/72026",
        kind: "primary",
      },
    ],
  },
  {
    slug: "camus",
    name: "Albert Camus",
    dates: "1913–1960",
    era: "20th-century France",
    traditions: ["modern-european", "contemporary-philosophy"],
    summary:
      "Camus described the absurd as the confrontation between our demand for meaning and an indifferent universe. His response was not despair but revolt, freedom, and solidarity.",
    biography: [
      "Camus was born in Algeria to a French settler family and grew up in poverty. He studied philosophy, worked as a journalist, and was active in the French Resistance during the Second World War.",
      "His novels, plays, and essays include The Stranger, The Myth of Sisyphus, The Plague, and The Rebel. He won the Nobel Prize in Literature in 1957 and died in a car accident in 1960.",
      "Camus rejected the label 'existentialist', although his work is often grouped with existentialism. He insisted on the importance of limits, solidarity, and the refusal of both despair and political terror.",
    ],
    context: [
      "Camus wrote in the shadow of two world wars and the ideological conflicts of the twentieth century. His work asks how to live without appeals to transcendent meaning and without succumbing to nihilism or violence.",
    ],
    ideas: [
      {
        title: "The absurd",
        description:
          "The absurd is not the world itself but the relation between the human demand for meaning and the world's silence. It arises when we refuse to abandon either term.",
      },
      {
        title: "Revolt",
        description:
          "The absurd person does not escape through suicide or faith. Revolt is the lucid refusal to be reconciled to meaninglessness, accompanied by the insistence on living with dignity.",
      },
      {
        title: "Sisyphus",
        description:
          "Camus reads the myth of Sisyphus as an image of human labour: the task is endless, yet the struggle itself can be sufficient. The essay ends by imagining Sisyphus happy.",
      },
      {
        title: "Solidarity and limits",
        description:
          "In The Rebel, Camus argues that revolt must recognise limits and the humanity of others. Rebellion that becomes unlimited terror betrays its own origins.",
      },
    ],
    works: [
      { title: "The Myth of Sisyphus", date: "1942", note: "The absurd, suicide, and revolt." },
      { title: "The Stranger", date: "1942", note: "A novel of alienation and absurdity." },
      { title: "The Plague", date: "1947", note: "Solidarity in the face of catastrophe." },
      { title: "The Rebel", date: "1951", note: "Revolt, limits, and political violence." },
    ],
    criticisms: [
      {
        title: "The coherence of revolt",
        description:
          "Critics ask whether Camus can justify revolt without covertly relying on the values he claims the absurd undermines. His later work develops a more positive ethics of solidarity.",
      },
      {
        title: "Political ambiguity",
        description:
          "Camus' position on Algeria and his dispute with Sartre have made him a contested political figure. His commitment to limits did not resolve the dilemmas of decolonisation.",
      },
    ],
    concepts: ["absurdism", "the-absurd", "existentialism", "nihilism"],
    relatedPhilosophers: ["nietzsche", "sartre", "simone-de-beauvoir"],
    relatedLessons: ["camus-absurd", "nietzsche-nihilism", "death-and-meaning"],
    furtherReading: [
      {
        label: "Camus",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/camus/",
        kind: "reference",
      },
      {
        label: "The Myth of Sisyphus",
        author: "Albert Camus",
        note: "Recommended translation: Justin O'Brien.",
        kind: "primary",
      },
    ],
  },
  {
    slug: "sartre",
    name: "Jean-Paul Sartre",
    dates: "1905–1980",
    era: "20th-century France",
    traditions: ["modern-european", "contemporary-philosophy"],
    summary:
      "Sartre argued that existence precedes essence: human beings are radically free, responsible for what they make of themselves, and prone to bad faith.",
    biography: [
      "Sartre was born in Paris, studied at the École Normale Supérieure, and became a central figure of French existentialism. He was a novelist, playwright, and political activist as well as a philosopher.",
      "His major philosophical work, Being and Nothingness (1943), analyses consciousness, freedom, and the gaze of others. Existentialism Is a Humanism (1946) popularised his ideas, though Sartre later regretted its simplifications.",
      "Sartre refused the Nobel Prize in Literature in 1964. His later work engaged with Marxism, colonialism, and political commitment, and his relationship with Simone de Beauvoir was intellectually formative for both.",
    ],
    context: [
      "Sartre wrote during the Occupation of France and the postwar ideological conflicts of the Cold War. His philosophy of freedom was inseparable from questions of political responsibility.",
    ],
    ideas: [
      {
        title: "Existence precedes essence",
        description:
          "For human beings, there is no fixed nature or purpose given in advance. We first exist and then define ourselves through choices, although those choices are made under conditions we did not choose.",
      },
      {
        title: "Radical freedom",
        description:
          "Sartre holds that consciousness is not a thing but a activity of transcendence. Even in constraint, we remain free in how we interpret and respond to our situation.",
      },
      {
        title: "Bad faith",
        description:
          "Bad faith is the attempt to deny one's freedom by identifying with a role, a desire, or a social expectation. It is a form of self-deception rather than a simple mistake.",
      },
      {
        title: "The look of the other",
        description:
          "In Being and Nothingness, Sartre analyses how being seen by another person objectifies us and reveals our dependence on others for our sense of self.",
      },
    ],
    works: [
      { title: "Being and Nothingness", date: "1943", note: "Consciousness, freedom, and the other." },
      { title: "Existentialism Is a Humanism", date: "1946", note: "A popular lecture, later qualified by Sartre." },
      { title: "Nausea", date: "1938", note: "A novel of contingency and existential unease." },
      { title: "Critique of Dialectical Reason", date: "1960", note: "His later engagement with Marxism." },
    ],
    criticisms: [
      {
        title: "The limits of freedom",
        description:
          "Critics argue that Sartre overstates individual freedom and underestimates structural constraints such as class, race, and gender. Beauvoir's work develops a more situated account.",
      },
      {
        title: "Dualism and consciousness",
        description:
          "Sartre's sharp distinction between being-in-itself and being-for-itself has been criticised as a residual dualism that creates problems for his account of embodiment.",
      },
    ],
    concepts: ["existentialism", "free-will", "bad-faith", "the-self"],
    relatedPhilosophers: ["camus", "simone-de-beauvoir", "nietzsche"],
    relatedLessons: ["camus-absurd", "free-will-problem"],
    furtherReading: [
      {
        label: "Sartre",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/sartre/",
        kind: "reference",
      },
    ],
  },
  {
    slug: "simone-de-beauvoir",
    name: "Simone de Beauvoir",
    dates: "1908–1986",
    era: "20th-century France",
    traditions: ["modern-european", "contemporary-philosophy"],
    summary:
      "Beauvoir developed an existentialist ethics of ambiguity and a landmark analysis of gender. Her work shows how freedom is always situated, embodied, and shaped by social structures.",
    biography: [
      "Beauvoir was born in Paris, studied philosophy at the Sorbonne, and became a teacher and writer. She was a lifelong intellectual partner of Sartre, though her own philosophical contribution is increasingly recognised as independent and distinctive.",
      "The Second Sex (1949) analysed the social construction of womanhood and became a foundational text of feminist thought. The Ethics of Ambiguity (1947) developed an existentialist ethics grounded in freedom and responsibility.",
      "Her memoirs, novels, and political writings address aging, death, colonialism, and the situation of women. She remains one of the most important philosophers of the twentieth century.",
    ],
    context: [
      "Beauvoir wrote within French existentialism but criticised its tendency to treat freedom abstractly. Her work foregrounds embodiment, social conditioning, and the lived experience of oppression.",
    ],
    ideas: [
      {
        title: "The ethics of ambiguity",
        description:
          "Human existence is ambiguous: we are both free subjects and objects in a world we did not create. Ethics must acknowledge this tension rather than pretending to resolve it.",
      },
      {
        title: "Situated freedom",
        description:
          "Freedom is not unconditional. It is exercised within a situation shaped by body, history, and social structures. Oppression can diminish the concrete possibilities of freedom without eliminating it entirely.",
      },
      {
        title: "Woman as the Other",
        description:
          "The Second Sex argues that woman has been defined as the negative counterpart of man, the Other against which the male subject defines himself. Liberation requires both structural change and the refusal of internalised otherness.",
      },
      {
        title: "Becoming",
        description:
          "Her famous formulation that one is not born but becomes a woman expresses the idea that gender is socially produced through practices, expectations, and institutions.",
      },
    ],
    works: [
      { title: "The Ethics of Ambiguity", date: "1947", note: "An existentialist ethics of freedom and responsibility." },
      { title: "The Second Sex", date: "1949", note: "A landmark analysis of gender and oppression." },
      { title: "The Coming of Age", date: "1970", note: "A study of aging and social marginalisation." },
    ],
    criticisms: [
      {
        title: "Universalism and difference",
        description:
          "Later feminists have questioned whether Beauvoir's ideal of freedom implicitly takes a male or Western subject as the norm. Her account of gender has also been criticised for heteronormative assumptions.",
      },
      {
        title: "Existentialist vocabulary",
        description:
          "Some readers find the language of authenticity and freedom too individualistic for analysing structural injustice, though Beauvoir's later work increasingly addresses material conditions.",
      },
    ],
    concepts: ["existentialism", "free-will", "the-self", "justice"],
    relatedPhilosophers: ["sartre", "camus", "kant"],
    relatedLessons: ["free-will-problem", "camus-absurd"],
    furtherReading: [
      {
        label: "Simone de Beauvoir",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/beauvoir/",
        kind: "reference",
      },
    ],
  },
  {
    slug: "hobbes",
    name: "Thomas Hobbes",
    dates: "1588–1679",
    era: "17th-century England",
    traditions: ["modern-european"],
    summary:
      "Hobbes grounded political authority in a sober account of human conflict. His Leviathan argues that without a sovereign, social life collapses into fear and violence.",
    biography: [
      "Hobbes was born in Wiltshire and educated at Oxford. He worked as a tutor and secretary to aristocratic families, travelled in Europe, and was influenced by the new mechanical philosophy and by the English Civil War.",
      "Leviathan (1651) is his masterpiece. It combines a materialist account of human nature, a social contract theory, and a defence of absolute sovereignty. Hobbes argued that the alternative to strong government is the 'war of every man against every man'.",
      "His political theory was controversial in his own time and remains a reference point for debates about security, consent, and the limits of state power.",
    ],
    context: [
      "Hobbes wrote during a period of civil war and regicide. His fear of disorder shaped a political philosophy that prioritises peace and security, even at the cost of extensive sovereign authority.",
    ],
    ideas: [
      {
        title: "The state of nature",
        description:
          "Hobbes imagines life without political authority. Because people are roughly equal in capacity and driven by self-preservation, competition and distrust produce a condition of war.",
      },
      {
        title: "The social contract",
        description:
          "To escape the state of nature, people authorise a sovereign to act on their behalf. The sovereign's authority is justified by the security it provides.",
      },
      {
        title: "The laws of nature",
        description:
          "Hobbes identifies rational precepts that recommend peace and mutual restraint. They bind in foro interno but require a sovereign to be effective in practice.",
      },
      {
        title: "Materialism",
        description:
          "Hobbes treats mental life as motion in the body. His materialism was radical for his time and shaped his account of sensation, imagination, and motivation.",
      },
    ],
    works: [
      { title: "Leviathan", date: "1651", note: "His major work of political philosophy." },
      { title: "De Cive", date: "1642", note: "An earlier statement of his political theory." },
    ],
    criticisms: [
      {
        title: "Absolutism",
        description:
          "Hobbes' sovereign is largely unaccountable. Critics argue that his theory provides too little protection against tyranny.",
      },
      {
        title: "Pessimistic psychology",
        description:
          "The state of nature may be a rhetorical device rather than a plausible historical condition. Anthropological evidence does not clearly support Hobbes' picture.",
      },
    ],
    concepts: ["social-contract", "justice", "free-will"],
    relatedPhilosophers: ["locke", "kant", "plato"],
    relatedLessons: ["veil-of-ignorance", "free-will-problem"],
    furtherReading: [
      {
        label: "Hobbes",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/hobbes/",
        kind: "reference",
      },
      {
        label: "Leviathan",
        author: "Thomas Hobbes",
        href: "https://www.gutenberg.org/ebooks/3207",
        kind: "primary",
      },
    ],
  },
  {
    slug: "locke",
    name: "John Locke",
    dates: "1632–1704",
    era: "17th-century England",
    traditions: ["modern-european"],
    summary:
      "Locke defended empiricism, natural rights, religious toleration, and government by consent. His account of personal identity as continuity of consciousness remains foundational.",
    biography: [
      "Locke studied at Oxford, trained in medicine, and worked for the Earl of Shaftesbury. His political activities led to exile in the Netherlands, and he returned to England after the Glorious Revolution.",
      "An Essay Concerning Human Understanding (1690) argues that the mind begins as a blank slate and that ideas derive from experience. Two Treatises of Government (1689) defends natural rights and the right of resistance to tyranny.",
      "Locke's writings on toleration and education were widely influential. His political thought shaped liberal constitutionalism, though his involvement in colonial affairs and the Carolina constitution complicates his legacy.",
    ],
    context: [
      "Locke wrote amid religious conflict and the consolidation of parliamentary government. His epistemology and politics both emphasise limits on arbitrary authority, whether of kings or of innate ideas.",
    ],
    ideas: [
      {
        title: "The blank slate",
        description:
          "At birth the mind is like white paper. Simple ideas come from sensation and reflection; complex ideas are built from them. Locke uses this account to critique innate ideas.",
      },
      {
        title: "Personal identity",
        description:
          "Locke argues that personal identity consists in continuity of consciousness, especially memory, rather than in sameness of body or soul. This makes identity a psychological rather than a biological matter.",
      },
      {
        title: "Natural rights",
        description:
          "People have rights to life, liberty, and property that precede government. Government exists to protect these rights and can be resisted when it fails.",
      },
      {
        title: "Toleration",
        description:
          "Locke argues for religious toleration on the grounds that coercion cannot produce genuine belief. His position excluded some groups, and its boundaries remain debated.",
      },
    ],
    works: [
      { title: "An Essay Concerning Human Understanding", date: "1690", note: "Empiricism and personal identity." },
      { title: "Two Treatises of Government", date: "1689", note: "Natural rights and government by consent." },
      { title: "A Letter Concerning Toleration", date: "1689", note: "Religious toleration." },
    ],
    criticisms: [
      {
        title: "The limits of toleration",
        description:
          "Locke's toleration was not universal: he excluded Catholics and atheists from his proposed settlement. The consistency of his liberalism has been questioned.",
      },
      {
        title: "Memory and identity",
        description:
          "Locke's memory criterion faces problems with forgetting and with changes in character. Later thinkers developed broader psychological continuity accounts.",
      },
    ],
    concepts: ["empiricism", "personal-identity", "social-contract", "justice"],
    relatedPhilosophers: ["hobbes", "hume", "descartes"],
    relatedLessons: ["ship-of-theseus", "problem-of-induction", "veil-of-ignorance"],
    furtherReading: [
      {
        label: "Locke",
        author: "Stanford Encyclopedia of Philosophy",
        href: "https://plato.stanford.edu/entries/locke/",
        kind: "reference",
      },
      {
        label: "Two Treatises of Government",
        author: "John Locke",
        href: "https://www.gutenberg.org/ebooks/7370",
        kind: "primary",
      },
    ],
  },
];
