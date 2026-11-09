import type { Practice } from "@/lib/content/schemas";

export const practices: Practice[] = [
  {
    slug: "stoic-evening-reflection",
    title: "The Stoic Evening Review",
    description:
      "A short end-of-day examination of what you did, what you avoided, and what you could do better tomorrow, inspired by Stoic practice.",
    sourceType: "historical",
    sourceNote:
      "The practice of reviewing one's day is attested in Stoic sources, notably Seneca's On Anger (3.36), where he describes a nightly examination of his actions. Modern versions often add structure and prompts that are not in the ancient texts.",
    philosophicalSource: [
      { name: "Seneca", slug: "seneca" },
      { name: "Epictetus", slug: "epictetus" },
      { name: "Marcus Aurelius", slug: "marcus-aurelius" },
    ],
    origin:
      "Stoic ethics treats philosophy as a daily discipline. Seneca describes retiring at night and reviewing the day's words and deeds before sleep; Marcus Aurelius' Meditations are themselves a record of such self-examination.",
    historicalContext:
      "Roman Stoics practised philosophy as a set of exercises for managing judgment and conduct. The evening review was one exercise among many, embedded in a broader metaphysical and ethical system that modern readers may not share.",
    principle:
      "Examining one's actions without self-punishment makes it possible to notice patterns and adjust conduct. The aim is improvement, not a verdict on one's worth.",
    instructions: [
      "Set aside five to ten minutes at the end of the day, away from screens if possible.",
      "Review the day in sequence. Name one action you are glad you took and one you regret or would handle differently.",
      "Ask what judgment or desire led to the action you regret. Was the situation within your control?",
      "Identify one specific adjustment for tomorrow. Keep it small and behavioural.",
      "End by acknowledging that the day is complete. Avoid turning the review into rumination.",
    ],
    frequency: "daily",
    timeCommitment: "5–10 minutes",
    reflectionPrompts: [
      "Where did I act from habit rather than judgment today?",
      "What did I avoid because of fear, and was the fear proportionate?",
      "What would I do differently if I could repeat one moment?",
    ],
    limitations: [
      "This is not a treatment for anxiety, depression, or other medical conditions.",
      "Self-examination can become harsh self-monitoring. The Stoic aim is correction, not self-punishment.",
      "Ancient Stoicism assumes a metaphysical framework that many modern practitioners do not accept. The exercise can be adapted, but the adaptation should be acknowledged.",
    ],
    relatedLessons: ["stoicism-dichotomy-of-control", "aristotle-virtue", "death-and-meaning"],
    relatedConcepts: ["virtue", "free-will", "determinism"],
    relatedPhilosophers: ["seneca", "epictetus", "marcus-aurelius"],
    relatedTopics: ["overthinking-and-attention", "character-and-virtue", "failure-and-setbacks"],
  },
  {
    slug: "socratic-self-examination",
    title: "Socratic Self-Examination",
    description:
      "Test one of your confident beliefs by asking what it means, what supports it, and what would count against it.",
    sourceType: "historical",
    sourceNote:
      "The elenchus is the questioning method portrayed in Plato's early dialogues. It is historically attested as a philosophical practice, though the dialogues are literary works and the historical Socrates remains difficult to recover.",
    philosophicalSource: [
      { name: "Socrates", slug: "socrates" },
      { name: "Plato", slug: "plato" },
    ],
    origin:
      "In Plato's Apology, Socrates describes his life as a mission of questioning himself and others. The elenchus proceeds by testing a proposed definition against examples and consequences until inconsistency appears.",
    historicalContext:
      "Socratic questioning took place in public spaces and symposia, often in front of an audience. It was not a private journaling technique, and it could be socially disruptive.",
    principle:
      "A belief is better understood when its implications are examined. Contradiction is not a failure but a signal that something needs revision.",
    instructions: [
      "Choose a belief you hold with confidence but have not examined recently, such as 'People should always be honest'.",
      "Write the belief as a precise claim. Define its key terms.",
      "Generate two or three counterexamples or difficult cases. Ask whether you still accept the claim.",
      "Look for a hidden assumption that explains your answers. State it explicitly.",
      "Revise the belief or mark the question as unresolved. Notice what further evidence or argument you would need.",
    ],
    frequency: "weekly",
    timeCommitment: "15–25 minutes",
    reflectionPrompts: [
      "Which of my beliefs would I be embarrassed to defend in public?",
      "Where do I rely on authority rather than reasons?",
      "What would change my mind?",
    ],
    limitations: [
      "The method exposes inconsistency but does not by itself establish the correct answer.",
      "Socratic questioning can be used to humiliate or manipulate. It should be practised with intellectual honesty and care.",
      "Not every question has a Socratic answer, and some disagreements are about values rather than definitions.",
    ],
    relatedLessons: ["what-is-philosophy", "plato-allegory-cave", "problem-of-other-minds"],
    relatedConcepts: ["skepticism", "virtue", "rationalism"],
    relatedPhilosophers: ["socrates", "plato"],
    relatedTopics: ["overthinking-and-attention", "decisions-and-uncertainty", "character-and-virtue"],
  },
  {
    slug: "buddhist-observation-of-desire",
    title: "Observing Desire Without Obeying It",
    description:
      "A contemplative exercise in noticing craving as it arises, without immediately acting on it or suppressing it.",
    sourceType: "historical",
    sourceNote:
      "Buddhist teachings analyse feeling tone (vedana) and craving (tanha) as links in dependent origination. The exercise below is a simplified modern presentation of themes found in early Buddhist practice; it is not a complete Buddhist path.",
    philosophicalSource: [
      { name: "The Buddha", slug: "buddha" },
      { name: "Nagarjuna", slug: "nagarjuna" },
    ],
    origin:
      "Early Buddhist practice includes mindful attention to the arising and passing of feelings and desires. The goal is not to eliminate all preference but to understand how craving conditions suffering.",
    historicalContext:
      "Buddhist monastic and lay practice developed within a soteriological framework of karma, rebirth, and liberation. Modern secular mindfulness often extracts techniques from this framework, which changes their meaning.",
    principle:
      "Craving often operates below deliberate choice. Noticing it creates a gap between impulse and action, making a more considered response possible.",
    instructions: [
      "When you notice a strong urge, pause and name it: 'wanting', 'avoiding', 'checking', 'buying'.",
      "Locate the feeling in the body. Notice tension, restlessness, or heat without trying to make it disappear.",
      "Ask: is this a natural and necessary desire, a natural but unnecessary one, or neither? Borrow the Epicurean classification if it helps.",
      "Wait for one minute before acting. Notice whether the intensity changes.",
      "Choose an action deliberately. Sometimes the answer is yes; the point is to see the choice.",
    ],
    frequency: "situational",
    timeCommitment: "1–5 minutes per observation",
    reflectionPrompts: [
      "What was I hoping the desire would give me?",
      "Did acting on it produce the feeling I expected?",
      "What would change if I let the feeling pass without acting?",
    ],
    limitations: [
      "This is not a treatment for addiction, anxiety, or other medical conditions. Seek professional support when needed.",
      "Buddhist practice aims at liberation, not productivity or self-optimisation. Extracting one technique can distort the larger context.",
      "Observation can become suppression if it is driven by aversion. The instruction is to notice, not to reject experience.",
    ],
    relatedLessons: ["buddhist-anatta", "dependent-origination", "experience-machine"],
    relatedConcepts: ["anatta", "dependent-origination", "hedonism"],
    relatedPhilosophers: ["buddha", "epicurus"],
    relatedTopics: ["desire-and-attachment", "overthinking-and-attention", "happiness-and-contentment"],
  },
  {
    slug: "aristotelian-virtue-reflection",
    title: "The Virtue Mean Reflection",
    description:
      "A weekly review of one situation through the lens of Aristotle's doctrine of the mean and practical wisdom.",
    sourceType: "modern-adaptation",
    sourceNote:
      "Aristotle recommends habituation and practical wisdom, but he does not provide a structured weekly journal. The format below is a modern adaptation of his ethical framework.",
    philosophicalSource: [
      { name: "Aristotle", slug: "aristotle" },
    ],
    origin:
      "In the Nicomachean Ethics, Aristotle argues that virtues are dispositions to act and feel in the right way, relative to the situation. Practical wisdom perceives what a particular situation calls for.",
    historicalContext:
      "Aristotle's ethics is embedded in a teleological account of human nature and the polis. Modern virtue ethics often retains the emphasis on character while revising the metaphysics and politics.",
    principle:
      "Virtue is not a rulebook. It requires judgment about the right amount, the right time, and the right reason.",
    instructions: [
      "Choose one virtue you want to understand better, such as courage, generosity, or patience.",
      "Recall a recent situation in which that virtue was relevant.",
      "Describe the extremes: what would excess and deficiency have looked like?",
      "Ask what a person with practical wisdom might have noticed that you missed.",
      "Write one sentence about what you will try to notice next time.",
    ],
    frequency: "weekly",
    timeCommitment: "15 minutes",
    reflectionPrompts: [
      "Where was I pulled toward excess or avoidance?",
      "What did the situation ask of me that a rule could not capture?",
      "Whose example of this virtue do I admire, and why?",
    ],
    limitations: [
      "The doctrine of the mean is not a formula. It can be used to rationalise moderation when courage or anger is required.",
      "Aristotle's ethical ideal is shaped by his own historical context, including hierarchies that modern readers should not simply adopt.",
      "This reflection is educational, not a substitute for therapy or professional advice.",
    ],
    relatedLessons: ["aristotle-virtue", "confucian-ethics", "stoicism-dichotomy-of-control"],
    relatedConcepts: ["virtue", "eudaimonia", "ren"],
    relatedPhilosophers: ["aristotle", "confucius", "mencius"],
    relatedTopics: ["character-and-virtue", "relationships-and-friendship", "anger-and-conflict"],
  },
  {
    slug: "epicurean-desire-audit",
    title: "The Epicurean Desire Audit",
    description:
      "Sort your current desires into natural and necessary, natural but unnecessary, and neither, then examine what is driving them.",
    sourceType: "historical",
    sourceNote:
      "Epicurus explicitly recommends analysing desires in this way in his Letter to Menoeceus and the Principal Doctrines. The written audit format is a modern presentation of the exercise.",
    philosophicalSource: [
      { name: "Epicurus", slug: "epicurus" },
    ],
    origin:
      "Epicurus argues that many desires are acquired and unnecessary, and that recognising this frees us from disturbance. Natural and necessary desires, such as food and friendship, are easier to satisfy.",
    historicalContext:
      "Epicurean practice took place in a philosophical community, the Garden, where friendship and shared inquiry were central. The goal was tranquillity, not maximal consumption.",
    principle:
      "Unnecessary desires create unnecessary dependence. Clarifying what a desire is for can reduce its hold.",
    instructions: [
      "List five to ten things you currently want, from small purchases to long-term ambitions.",
      "Mark each as natural and necessary, natural but unnecessary, or neither.",
      "For each, ask: what discomfort am I trying to remove? What would satisfaction actually feel like?",
      "Choose one unnecessary desire to leave unsatisfied this week and observe what happens.",
      "Notice any fear or social comparison underneath the desire.",
    ],
    frequency: "weekly",
    timeCommitment: "20 minutes",
    reflectionPrompts: [
      "Which desires are mine, and which did I absorb from others?",
      "What am I afraid would happen if I stopped wanting this?",
      "Which simple pleasure have I been overlooking?",
    ],
    limitations: [
      "Epicurean ethics is embedded in a hedonistic metaphysics that not everyone accepts.",
      "The audit can become a way of judging oneself for having desires. The aim is clarity, not purity.",
      "Withdrawal from social and political life was a feature of Epicurus' context; modern readers should consider whether the same advice applies.",
    ],
    relatedLessons: ["experience-machine", "death-and-meaning", "aristotle-virtue"],
    relatedConcepts: ["hedonism", "eudaimonia", "pessimism"],
    relatedPhilosophers: ["epicurus", "seneca", "buddha"],
    relatedTopics: ["desire-and-attachment", "ambition-and-success", "happiness-and-contentment"],
  },
  {
    slug: "confucian-daily-examination",
    title: "The Confucian Daily Examination",
    description:
      "A short daily review of conduct in relationships, inspired by the practice attributed to Zengzi in the Analects.",
    sourceType: "historical",
    sourceNote:
      "Analects 1.4 records Zengzi examining himself on three points each day. The questions below adapt the structure to contemporary relationships; the adaptation is editorial.",
    philosophicalSource: [
      { name: "Confucius", slug: "confucius" },
      { name: "Mencius", slug: "mencius" },
    ],
    origin:
      "The Analects reports that Zengzi asked himself whether he had been loyal in others' affairs, trustworthy with friends, and diligent in practising what he had been taught.",
    historicalContext:
      "Confucian self-examination was embedded in a relational ethics of family, friendship, and public service. The categories reflect the social world of the Warring States period.",
    principle:
      "Ethical improvement happens through relationships. Examining one's conduct toward others is more useful than abstract self-assessment.",
    instructions: [
      "At the end of the day, recall one interaction with a family member, friend, or colleague.",
      "Ask: was I attentive to what this relationship required?",
      "Ask: did I keep my word, and where did I fall short?",
      "Ask: did I act on what I claim to value, or merely talk about it?",
      "Choose one relationship to repair or strengthen tomorrow.",
    ],
    frequency: "daily",
    timeCommitment: "5 minutes",
    reflectionPrompts: [
      "Where did I treat someone as a role rather than a person?",
      "What obligation have I been avoiding?",
      "Who has shown me an example of good conduct recently?",
    ],
    limitations: [
      "Confucian ethics developed in a hierarchical society. Its emphasis on deference should be examined critically rather than adopted wholesale.",
      "The practice can become scrupulosity if it turns into constant self-monitoring.",
      "This is not a therapeutic protocol or a replacement for professional care.",
    ],
    relatedLessons: ["confucian-ethics", "aristotle-virtue", "daoism-wu-wei"],
    relatedConcepts: ["ren", "virtue", "eudaimonia"],
    relatedPhilosophers: ["confucius", "mencius", "aristotle"],
    relatedTopics: ["relationships-and-friendship", "character-and-virtue", "anger-and-conflict"],
  },
  {
    slug: "camusian-revolt-journal",
    title: "The Revolt Journal",
    description:
      "A weekly writing practice for naming absurdity, refusing false consolation, and choosing lucid engagement.",
    sourceType: "modern-adaptation",
    sourceNote:
      "Camus did not prescribe a journaling exercise. This practice is an editorial adaptation of themes from The Myth of Sisyphus and The Rebel, not a historical practice.",
    philosophicalSource: [
      { name: "Albert Camus", slug: "camus" },
    ],
    origin:
      "Camus describes the absurd as the confrontation between human longing and a silent world. His response is revolt: lucid refusal, freedom, and solidarity without consolation.",
    historicalContext:
      "Camus wrote in the context of war, occupation, and ideological violence. His insistence on limits was a response to political terror as well as metaphysical despair.",
    principle:
      "Meaning need not be guaranteed to be worth pursuing. Revolt is the decision to live attentively without pretending that the universe owes us a justification.",
    instructions: [
      "Once a week, write down one moment when life felt absurd or pointless.",
      "Describe it without reaching for a solution. Notice any temptation to escape into distraction, certainty, or despair.",
      "Write one sentence of refusal: what false consolation will you not accept?",
      "Name one act of engagement you chose anyway: a conversation, a piece of work, a walk, a kindness.",
      "Close by noting one example of solidarity or shared struggle.",
    ],
    frequency: "weekly",
    timeCommitment: "20 minutes",
    reflectionPrompts: [
      "Where am I demanding a guarantee before I am willing to live?",
      "What would revolt look like in this situation without becoming cruelty?",
      "Who is living through something similar, and how might solidarity change the experience?",
    ],
    limitations: [
      "This is not a treatment for depression or suicidal thoughts. If you are in crisis, seek professional help immediately.",
      "Camus' aesthetics of revolt can glamorise suffering. The practice should not turn pain into a performance.",
      "The political limits of revolt are contested. Camus' own positions on Algeria remain debated.",
    ],
    relatedLessons: ["camus-absurd", "nietzsche-nihilism", "death-and-meaning"],
    relatedConcepts: ["absurdism", "the-absurd", "nihilism"],
    relatedPhilosophers: ["camus", "nietzsche", "sartre"],
    relatedTopics: ["meaning-and-purpose", "death-and-mortality", "failure-and-setbacks"],
  },
  {
    slug: "nietzschean-self-overcoming",
    title: "The Value Genealogy Exercise",
    description:
      "Trace one of your values to its origins and ask whether it affirms life or expresses resentment.",
    sourceType: "editorial-interpretation",
    sourceNote:
      "Nietzsche offers no step-by-step exercise. This is an editorial interpretation of his genealogical method and his call for revaluation, not a practice he prescribed.",
    philosophicalSource: [
      { name: "Friedrich Nietzsche", slug: "nietzsche" },
    ],
    origin:
      "In On the Genealogy of Morality, Nietzsche asks how moral values developed and what psychological needs they serve. He distinguishes values that enhance life from those born of ressentiment.",
    historicalContext:
      "Nietzsche wrote as a critic of Christian morality and modern egalitarianism. His work has been misused politically, and his rhetorical excess makes careful reading essential.",
    principle:
      "Values are not self-justifying. Understanding where they came from can reveal whether they are still worth holding.",
    instructions: [
      "Choose a value you hold strongly, such as humility, ambition, loyalty, or independence.",
      "Ask where you learned it. Whose interests did it serve in that context?",
      "Notice whether the value expresses gratitude, creativity, and strength, or fear, resentment, and the desire to diminish others.",
      "Ask what a life that embodied this value would look like at its best and at its worst.",
      "Decide whether to keep, revise, or abandon the value. Write a sentence explaining why.",
    ],
    frequency: "weekly",
    timeCommitment: "25 minutes",
    reflectionPrompts: [
      "Which of my values would I struggle to defend without appealing to tradition or authority?",
      "Where am I secretly motivated by resentment?",
      "What would I create if I were not afraid of being judged?",
    ],
    limitations: [
      "Nietzsche's distinction between life-affirming and life-denying values is not a precise criterion.",
      "The exercise can encourage arrogance or contempt for ordinary morality. That is a risk Nietzsche himself diagnosed.",
      "Nietzsche's political reception is dangerous; the exercise should not be used to justify domination or cruelty.",
    ],
    relatedLessons: ["nietzsche-nihilism", "camus-absurd", "aristotle-virtue"],
    relatedConcepts: ["nihilism", "will-to-power", "existentialism", "pessimism"],
    relatedPhilosophers: ["nietzsche", "schopenhauer", "sartre"],
    relatedTopics: ["meaning-and-purpose", "ambition-and-success", "character-and-virtue"],
  },
  {
    slug: "daoist-wu-wei-practice",
    title: "The Wu-wei Pause",
    description:
      "A situational practice for noticing over-control and choosing a less forced response.",
    sourceType: "modern-adaptation",
    sourceNote:
      "Wu-wei is a classical Daoist concept, but the structured pause below is a modern adaptation. The Dao De Jing and Zhuangzi do not offer a step-by-step modern exercise.",
    philosophicalSource: [
      { name: "Laozi", slug: "laozi" },
      { name: "Zhuangzi", slug: "zhuangzi" },
    ],
    origin:
      "Daoist texts describe the sage as acting without forcing, in accord with the situation. Water is a recurring image: it yields, flows, and yet shapes the landscape.",
    historicalContext:
      "Daoist ideas about non-action were addressed to rulers, artisans, and wandering sages in a period of political violence. They are not a productivity technique.",
    principle:
      "Not every problem is solved by more effort. Sometimes the most effective action is to stop pushing and respond to what the situation actually requires.",
    instructions: [
      "When you notice yourself forcing a conversation, task, or decision, stop for ten seconds.",
      "Ask: what am I trying to control that is not mine to control?",
      "Describe the situation without evaluation. What is actually happening?",
      "Choose the smallest effective action, or wait if waiting is appropriate.",
      "Afterward, notice whether the result depended more on your effort or on conditions you did not control.",
    ],
    frequency: "situational",
    timeCommitment: "10 seconds to 5 minutes",
    reflectionPrompts: [
      "Where am I confusing effort with effectiveness?",
      "What would it mean to respond rather than react?",
      "What am I afraid would happen if I stopped pushing?",
    ],
    limitations: [
      "Wu-wei is not passivity or indifference. It does not justify neglecting responsibilities or tolerating injustice.",
      "The concept is interpreted differently across Daoist texts and traditions.",
      "Modern 'flow' psychology is not identical with the classical concept.",
    ],
    relatedLessons: ["daoism-wu-wei", "confucian-ethics", "stoicism-dichotomy-of-control"],
    relatedConcepts: ["wu-wei", "non-dualism", "ren"],
    relatedPhilosophers: ["laozi", "zhuangzi", "confucius"],
    relatedTopics: ["overthinking-and-attention", "anger-and-conflict", "decisions-and-uncertainty"],
  },
  {
    slug: "memento-mori-reflection",
    title: "Memento Mori Reflection",
    description:
      "A brief meditation on mortality used to clarify what matters and what does not.",
    sourceType: "modern-adaptation",
    sourceNote:
      "Stoics such as Seneca and Marcus Aurelius reflect on death, but the phrase memento mori and the structured exercise below belong to later traditions and modern practice. This is an adaptation, not a recovered ancient ritual.",
    philosophicalSource: [
      { name: "Seneca", slug: "seneca" },
      { name: "Marcus Aurelius", slug: "marcus-aurelius" },
      { name: "Epicurus", slug: "epicurus" },
    ],
    origin:
      "Ancient philosophy often used the thought of death as a way to focus on the present. Epicurus argues that death is not an experience to fear; Stoics use mortality to relativise status and delay.",
    historicalContext:
      "Mortality meditation appears in many traditions, including Buddhist and Christian practices. The version here draws loosely on Stoic and Epicurean themes without claiming to reproduce a single historical ritual.",
    principle:
      "Awareness of finitude can clarify priorities. The point is not to be morbid but to stop postponing what matters.",
    instructions: [
      "Sit quietly for a few minutes. Bring to mind the fact that your life will end, without dwelling on the details.",
      "Ask: if this year were my last, what would I stop doing? What would I start?",
      "Notice which worries shrink and which relationships or projects grow in importance.",
      "Choose one small action that reflects the clarified priority.",
      "Return to the day. Do not use the reflection to demand productivity from yourself.",
    ],
    frequency: "weekly",
    timeCommitment: "10 minutes",
    reflectionPrompts: [
      "What am I postponing because I assume there will be time?",
      "Which of my current worries will matter in a year?",
      "Who would I want to speak to, and what would I say?",
    ],
    limitations: [
      "Mortality reflection can increase anxiety for some people. Stop if it becomes distressing.",
      "It is not a treatment for grief, depression, or existential crisis.",
      "The practice can be used to justify overwork or urgency. That is a misuse of the exercise.",
    ],
    relatedLessons: ["death-and-meaning", "stoicism-dichotomy-of-control", "camus-absurd"],
    relatedConcepts: ["pessimism", "eudaimonia", "the-absurd"],
    relatedPhilosophers: ["seneca", "marcus-aurelius", "epicurus", "camus"],
    relatedTopics: ["death-and-mortality", "meaning-and-purpose", "happiness-and-contentment"],
  },
  {
    slug: "premeditatio-malorum",
    title: "Premeditation of Adversity",
    description:
      "A Stoic-inspired exercise in imagining a possible loss so that it is less destabilising if it occurs.",
    sourceType: "historical",
    sourceNote:
      "The exercise of rehearsing possible adversities is attested in Seneca's Letters and Epictetus' Discourses. The Latin phrase premeditatio malorum is a later label, and modern versions often add structure.",
    philosophicalSource: [
      { name: "Seneca", slug: "seneca" },
      { name: "Epictetus", slug: "epictetus" },
    ],
    origin:
      "Stoics practised imagining loss, exile, and death to reduce the shock of future events and to appreciate what is present. Seneca describes the exercise in his consolations and letters.",
    historicalContext:
      "Roman Stoics lived with political instability and sudden loss. The exercise was part of a broader training in judgment and emotional resilience, not a manifestation technique.",
    principle:
      "Rehearsing a difficulty in advance can separate the event from our judgment about it. What we fear is often compounded by surprise and catastrophic imagination.",
    instructions: [
      "Choose one realistic adversity, such as a setback at work or a disagreement with a friend.",
      "Imagine it happening in concrete detail. Notice the first reaction you would have.",
      "Ask: which parts would be within my control? What resources would I actually have?",
      "Rehearse a response that reflects your values. Keep it realistic rather than heroic.",
      "Return to the present and notice what you currently have that you were taking for granted.",
    ],
    frequency: "situational",
    timeCommitment: "10–15 minutes",
    reflectionPrompts: [
      "What am I afraid of, and what exactly would happen if it occurred?",
      "Which part of the fear is a judgment rather than a fact?",
      "What would I want to have done before this happened?",
    ],
    limitations: [
      "The exercise can turn into rumination or catastrophic thinking. Keep it bounded and return to the present.",
      "It is not a way to prevent bad things from happening, and it should not be presented as one.",
      "Stoic metaphysics and its account of emotion are contested. The exercise can be used without accepting the whole system, but the adaptation should be acknowledged.",
    ],
    relatedLessons: ["stoicism-dichotomy-of-control", "death-and-meaning", "free-will-problem"],
    relatedConcepts: ["determinism", "virtue", "free-will"],
    relatedPhilosophers: ["seneca", "epictetus", "marcus-aurelius"],
    relatedTopics: ["fear-and-uncertainty", "failure-and-setbacks", "decisions-and-uncertainty"],
  },
  {
    slug: "philosophical-question-walk",
    title: "The Philosophical Question Walk",
    description:
      "A solitary walk organised around one question, with no input and no destination beyond the question itself.",
    sourceType: "editorial-interpretation",
    sourceNote:
      "Walking and thinking have a long association in philosophy, from the Peripatetic school to Nietzsche and Rousseau. The structured walk below is an editorial invention, not a historical practice.",
    philosophicalSource: [
      { name: "Aristotle", slug: "aristotle" },
      { name: "Friedrich Nietzsche", slug: "nietzsche" },
    ],
    origin:
      "Aristotle's school is traditionally associated with walking while discussing philosophy, and Nietzsche wrote about the importance of walking for thought. These are loose inspirations for a contemporary exercise.",
    historicalContext:
      "The Peripatetic label is ancient, but the evidence for a formal walking curriculum is limited. The association between walking and thinking is real but often romanticised.",
    principle:
      "Attention is shaped by movement and environment. A walk without inputs can create space for a question to develop beyond its first formulation.",
    instructions: [
      "Choose one philosophical question you want to think about. Write it down before you leave.",
      "Walk for twenty to thirty minutes without headphones, social media, or a destination.",
      "Hold the question loosely. Notice when your mind drifts to practical matters, then return.",
      "At the midpoint, try to state the question in a different way or from an opposing perspective.",
      "When you return, write three sentences: what changed, what remains unclear, and what you want to read next.",
    ],
    frequency: "weekly",
    timeCommitment: "30–40 minutes",
    reflectionPrompts: [
      "What did I assume when I first formulated the question?",
      "Which answer made me uncomfortable, and why?",
      "What would I need to read or discuss to go further?",
    ],
    limitations: [
      "Walking is not a substitute for reading, argument, or conversation.",
      "Not everyone can walk comfortably. The exercise can be adapted to any sustained, unplugged movement or stillness.",
      "The association between walking and creativity is suggestive, not a guaranteed method.",
    ],
    relatedLessons: ["what-is-philosophy", "problem-of-other-minds", "plato-allegory-cave"],
    relatedConcepts: ["skepticism", "virtue", "wu-wei"],
    relatedPhilosophers: ["aristotle", "nietzsche", "socrates"],
    relatedTopics: ["overthinking-and-attention", "meaning-and-purpose", "decisions-and-uncertainty"],
  },
];
