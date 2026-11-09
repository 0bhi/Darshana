import type { PracticalTopic } from "@/lib/content/schemas";

export const practicalTopics: PracticalTopic[] = [
  {
    slug: "overthinking-and-attention",
    title: "Overthinking and Attention",
    subtitle: "When reflection becomes rumination",
    description:
      "Philosophy values reflection, but not every kind of thinking is useful. This topic distinguishes inquiry from rumination and explores practices that redirect attention.",
    intro: [
      "Philosophy is often described as thinking carefully about difficult questions. That can be liberating. It can also become a loop in which the same worry is rehearsed without resolution.",
      "The traditions gathered here do not offer a cure for anxiety. They offer ways of noticing the difference between examining a question and being captured by it.",
    ],
    sections: [
      {
        title: "The difference between inquiry and rumination",
        body: [
          "Inquiry has a direction: it seeks a distinction, an argument, or a decision. Rumination circles. It may feel like problem-solving while producing no new understanding and no action.",
          "The Stoics were attentive to this difference. Their practice of judging impressions asks not only whether a thought is true but whether it is useful and within our control. A thought can be true and still be a trap.",
        ],
      },
      {
        title: "Attention as a philosophical discipline",
        body: [
          "Buddhist practice analyses how attention moves from sensation to feeling to craving to story. Daoist texts describe the value of not forcing. Socratic questioning asks whether a belief can survive examination.",
          "These are different traditions with different aims, but they share an interest in the quality of attention rather than the quantity of thought.",
        ],
      },
      {
        title: "A modest approach",
        body: [
          "If overthinking is a persistent source of distress, philosophical practice is not a substitute for professional care. What philosophy can do is offer concepts for noticing the pattern and exercises for interrupting it.",
          "Start small. Choose one moment of rumination, name it, and decide whether it is a question to pursue or a loop to leave.",
        ],
      },
    ],
    practices: ["socratic-self-examination", "stoic-evening-reflection", "daoist-wu-wei-practice", "buddhist-observation-of-desire"],
    lessons: ["what-is-philosophy", "stoicism-dichotomy-of-control", "daoism-wu-wei"],
    philosophers: ["socrates", "epictetus", "laozi", "buddha"],
    concepts: ["skepticism", "wu-wei", "virtue"],
    reflectionPrompts: [
      "Which of my recurring thoughts are questions I am actually trying to answer?",
      "What would it look like to leave a thought alone without suppressing it?",
      "Where does my thinking become a way of avoiding a decision?",
    ],
    relatedTopics: ["fear-and-uncertainty", "decisions-and-uncertainty", "happiness-and-contentment"],
  },
  {
    slug: "fear-and-uncertainty",
    title: "Fear and Uncertainty",
    subtitle: "Living without guarantees",
    description:
      "Uncertainty is not a temporary malfunction of life; it is a condition of action. Philosophy offers ways to act well without certainty and to distinguish realistic caution from fear.",
    intro: [
      "Much of human life is conducted without knowing the outcome. We make decisions about work, love, health, and the future while the information remains incomplete.",
      "The question is not how to eliminate uncertainty but how to relate to it. The traditions below disagree about the answer, and the disagreement is useful.",
    ],
    sections: [
      {
        title: "The Stoic distinction",
        body: [
          "Epictetus begins with the distinction between what is up to us and what is not. Our judgments and choices are ours; outcomes, reputation, and the actions of others are not.",
          "This distinction is not a promise of control. It is a way of redirecting effort from what cannot be guaranteed to what can be shaped.",
        ],
      },
      {
        title: "The existential response",
        body: [
          "Existentialists argue that uncertainty is inseparable from freedom. If the future were guaranteed, there would be nothing to choose. Anxiety is the price of agency.",
          "Camus adds that the absence of cosmic guarantees does not make action meaningless. Revolt is the decision to act without consolation.",
        ],
      },
      {
        title: "Practical caution",
        body: [
          "Philosophical acceptance is not the same as recklessness. Fear can carry information. The task is to ask what the fear is tracking and whether the response is proportionate.",
          "If fear is persistent or disabling, professional support is appropriate. Philosophy is an educational resource, not a clinical treatment.",
        ],
      },
    ],
    practices: ["premeditatio-malorum", "stoic-evening-reflection", "camusian-revolt-journal"],
    lessons: ["stoicism-dichotomy-of-control", "free-will-problem", "camus-absurd"],
    philosophers: ["epictetus", "seneca", "camus", "sartre"],
    concepts: ["free-will", "determinism", "the-absurd"],
    reflectionPrompts: [
      "What part of this situation is actually within my control?",
      "What would I do if I accepted that I cannot guarantee the outcome?",
      "Is my fear pointing to a real risk or to a story about one?",
    ],
    relatedTopics: ["decisions-and-uncertainty", "death-and-mortality", "overthinking-and-attention"],
  },
  {
    slug: "death-and-mortality",
    title: "Death and Mortality",
    subtitle: "Finitude as a philosophical problem",
    description:
      "Death is not only an event at the end of life. It shapes how we understand time, meaning, and what matters now.",
    intro: [
      "Philosophy has approached death from several directions: as a metaphysical question about whether it is bad, an ethical question about how it should shape conduct, and an existential question about meaning.",
      "No single tradition has the final word. What they offer is a set of distinctions that can make the question more precise.",
    ],
    sections: [
      {
        title: "Is death bad for the one who dies?",
        body: [
          "Epicurus argues that death is not an experience: when death is present, we are not. If something can only be bad for a subject who experiences it, death may not be bad in itself.",
          "Critics reply that death deprives a person of goods they would otherwise have enjoyed. The debate turns on whether deprivation can be bad without being experienced.",
        ],
      },
      {
        title: "Finitude and meaning",
        body: [
          "Some thinkers argue that immortality would make life meaningless by removing urgency and shape. Others argue that death makes life meaningless by cutting off projects.",
          "Camus and the existentialists treat finitude as a condition of choice rather than a refutation of meaning. The Stoics use mortality to clarify priorities.",
        ],
      },
      {
        title: "Living with the question",
        body: [
          "Mortality reflection can be clarifying, but it can also intensify anxiety. The aim is not to become obsessed with death but to let the fact of finitude inform attention.",
          "If thoughts of death are overwhelming, this is a matter for professional support, not a philosophical exercise.",
        ],
      },
    ],
    practices: ["memento-mori-reflection", "stoic-evening-reflection", "camusian-revolt-journal"],
    lessons: ["death-and-meaning", "camus-absurd", "stoicism-dichotomy-of-control"],
    philosophers: ["epicurus", "seneca", "marcus-aurelius", "camus", "schopenhauer"],
    concepts: ["pessimism", "the-absurd", "eudaimonia"],
    reflectionPrompts: [
      "What am I postponing because I assume there will be time?",
      "Does the thought of finitude make anything clearer?",
      "What would I regret not having attended to?",
    ],
    relatedTopics: ["meaning-and-purpose", "fear-and-uncertainty", "happiness-and-contentment"],
  },
  {
    slug: "meaning-and-purpose",
    title: "Meaning and Purpose",
    subtitle: "After the guarantees are gone",
    description:
      "Can life be meaningful without a cosmic purpose? Philosophy explores the sources of meaning available to finite, secular beings.",
    intro: [
      "The question of meaning can mean several things: Does the universe have a purpose? Is my life worthwhile? What makes a project worth pursuing?",
      "These questions are related but distinct. Much confusion comes from treating them as one.",
    ],
    sections: [
      {
        title: "Nihilism and its discontents",
        body: [
          "Nihilism denies that life has inherent meaning or objective value. Nietzsche treats it as a historical condition produced by the collapse of traditional foundations, not simply as a mood.",
          "The important question is what follows. If meaning is not given, is it invented, discovered, or relational?",
        ],
      },
      {
        title: "The absurd",
        body: [
          "Camus locates meaning in the confrontation between human longing and a silent world. He refuses both suicide and the leap to transcendent consolation.",
          "Critics ask whether revolt can sustain a life without covertly relying on values it denies. Camus' later work develops a more positive ethic of solidarity.",
        ],
      },
      {
        title: "Sources of meaning",
        body: [
          "Philosophy is not the only source of meaning, but it can clarify what makes a project or relationship worth valuing. Love, work, inquiry, and care for others are not interchangeable, and their value is not exhausted by pleasure.",
          "The question is not only 'What is meaningful?' but 'What am I willing to give my attention to, even without a guarantee?'",
        ],
      },
    ],
    practices: ["camusian-revolt-journal", "nietzschean-self-overcoming", "philosophical-question-walk"],
    lessons: ["camus-absurd", "nietzsche-nihilism", "death-and-meaning", "experience-machine"],
    philosophers: ["camus", "nietzsche", "sartre", "schopenhauer"],
    concepts: ["nihilism", "absurdism", "the-absurd", "existentialism"],
    reflectionPrompts: [
      "What would I do differently if I stopped waiting for a guarantee?",
      "Which of my commitments are genuinely mine?",
      "Where do I confuse pleasure with meaning?",
    ],
    relatedTopics: ["death-and-mortality", "ambition-and-success", "happiness-and-contentment"],
  },
  {
    slug: "desire-and-attachment",
    title: "Desire and Attachment",
    subtitle: "Wanting less, wanting better",
    description:
      "Desire is not the enemy of a good life, but unexamined desire can become a source of dependence. Epicurean, Stoic, and Buddhist traditions offer different analyses.",
    intro: [
      "We are told to follow our desires and also to resist them. Neither instruction is precise enough. The philosophical question is which desires are worth cultivating and how to relate to the rest.",
      "The traditions below disagree about the metaphysics and the goal, but they share an interest in making desire intelligible.",
    ],
    sections: [
      {
        title: "Epicurus: classify the desire",
        body: [
          "Epicurus distinguishes natural and necessary desires from natural but unnecessary ones and from desires that are neither. The point is not to eliminate pleasure but to remove the disturbance caused by unnecessary dependence.",
          "His ideal is tranquillity, supported by friendship, simplicity, and understanding. It is more austere than the popular meaning of Epicureanism suggests.",
        ],
      },
      {
        title: "Buddhism: observe the craving",
        body: [
          "Buddhist analysis treats craving as a condition of suffering. The aim is not to suppress desire but to understand its arising and passing.",
          "This analysis is embedded in a soteriological framework that modern secular readers may not share. The practice can be adapted, but the adaptation should be honest about what is being left out.",
        ],
      },
      {
        title: "Stoicism: judge the impression",
        body: [
          "For the Stoics, the problem is not desire itself but the judgment that external things are necessary for happiness. Virtue is sufficient; preferred indifferents are not worth sacrificing integrity for.",
        ],
      },
    ],
    practices: ["epicurean-desire-audit", "buddhist-observation-of-desire", "stoic-evening-reflection"],
    lessons: ["experience-machine", "buddhist-anatta", "aristotle-virtue"],
    philosophers: ["epicurus", "buddha", "epictetus", "seneca"],
    concepts: ["hedonism", "anatta", "dependent-origination", "virtue"],
    reflectionPrompts: [
      "Which of my desires are natural and necessary, and which are acquired?",
      "What am I hoping this desire will remove?",
      "What would contentment look like in this area of my life?",
    ],
    relatedTopics: ["happiness-and-contentment", "ambition-and-success", "overthinking-and-attention"],
  },
  {
    slug: "ambition-and-success",
    title: "Ambition and Success",
    subtitle: "What are you actually pursuing?",
    description:
      "Ambition can be a source of meaning and a source of bondage. Philosophy asks what success is for and whether the pursuit is consistent with the life you want.",
    intro: [
      "Modern culture often treats ambition as self-justifying. Philosophy asks a prior question: what is success for, and what will you have to become to achieve it?",
      "The answers range from Aristotelian flourishing to Stoic indifference, Epicurean simplicity, and Nietzschean self-overcoming.",
    ],
    sections: [
      {
        title: "The Stoic critique of status",
        body: [
          "Stoics treat reputation and wealth as preferred indifferents: they may be useful, but they are not necessary for a good life. What matters is virtue and the quality of one's choices.",
          "This does not require abandoning work or ambition. It requires asking whether the pursuit is governed by fear, comparison, or a genuine commitment.",
        ],
      },
      {
        title: "Aristotle and activity",
        body: [
          "Aristotle's eudaimonia is an activity, not a state of achievement. Success that prevents the exercise of virtue may be a failure by his standards.",
          "His account includes external goods, so it is not a simple rejection of material conditions. The question is how those goods serve or distort flourishing.",
        ],
      },
      {
        title: "Nietzsche and self-overcoming",
        body: [
          "Nietzsche's will to power is often misread as a licence for domination. A more defensible reading concerns self-overcoming and the creation of values.",
          "The concept remains dangerous and ambiguous. It should be handled with care, especially in discussions of work and ambition.",
        ],
      },
    ],
    practices: ["epicurean-desire-audit", "nietzschean-self-overcoming", "stoic-evening-reflection"],
    lessons: ["aristotle-virtue", "nietzsche-nihilism", "stoicism-dichotomy-of-control"],
    philosophers: ["aristotle", "epictetus", "nietzsche", "seneca"],
    concepts: ["eudaimonia", "virtue", "will-to-power", "hedonism"],
    reflectionPrompts: [
      "What does success mean to me, and where did that definition come from?",
      "What am I sacrificing for this goal, and is the trade worth it?",
      "Would I pursue this if no one knew about it?",
    ],
    relatedTopics: ["meaning-and-purpose", "failure-and-setbacks", "character-and-virtue"],
  },
  {
    slug: "failure-and-setbacks",
    title: "Failure and Setbacks",
    subtitle: "What philosophy can and cannot console",
    description:
      "Philosophy cannot remove failure, but it can change how failure is interpreted and what it is allowed to mean about a person's worth.",
    intro: [
      "Failure is not only an external event. It is also an interpretation: a judgment about what the event says about us, our abilities, and our future.",
      "Philosophical traditions differ in how much they think we should care about outcomes. That disagreement is practically relevant.",
    ],
    sections: [
      {
        title: "Stoic judgment",
        body: [
          "For the Stoics, failure is not in itself a moral evil. What matters is how one responds and whether one's judgment adds a second injury to the first.",
          "This can be liberating, but it can also become a demand to be unaffected. Stoicism is a practice, not a requirement to feel nothing.",
        ],
      },
      {
        title: "Aristotelian habituation",
        body: [
          "Aristotle treats virtue as acquired through practice, which means failure is part of learning. A person becomes courageous by acting courageously, often after acting badly.",
          "The point is not to celebrate failure but to treat it as information about what still needs cultivation.",
        ],
      },
      {
        title: "The limits of consolation",
        body: [
          "Some failures involve real loss, injustice, or grief. Philosophy should not pretend otherwise. A framework that cannot acknowledge tragedy is not adequate to human life.",
          "The aim is not to make failure painless but to prevent it from becoming the final word on one's worth.",
        ],
      },
    ],
    practices: ["stoic-evening-reflection", "aristotelian-virtue-reflection", "camusian-revolt-journal"],
    lessons: ["stoicism-dichotomy-of-control", "aristotle-virtue", "camus-absurd"],
    philosophers: ["epictetus", "aristotle", "camus", "seneca"],
    concepts: ["virtue", "determinism", "the-absurd"],
    reflectionPrompts: [
      "What is the actual event, and what is my interpretation of it?",
      "What would I do differently next time?",
      "What would it mean to fail without making failure my identity?",
    ],
    relatedTopics: ["ambition-and-success", "character-and-virtue", "fear-and-uncertainty"],
  },
  {
    slug: "relationships-and-friendship",
    title: "Relationships and Friendship",
    subtitle: "The ethics of being with others",
    description:
      "Friendship is one of the most philosophically interesting relationships: voluntary, reciprocal, and often essential to a good life. Confucian and Aristotelian traditions offer rich accounts.",
    intro: [
      "We often think of friendship as a private matter of feeling. Philosophy asks what makes a friendship good, what we owe friends, and how friendship relates to character.",
      "The answers are not merely academic. They shape how we choose, maintain, and end relationships.",
    ],
    sections: [
      {
        title: "Aristotle's three kinds of friendship",
        body: [
          "Aristotle distinguishes friendships of utility, pleasure, and virtue. The first two are fragile because they depend on changing circumstances; the third is grounded in shared goodness and is the fullest form.",
          "This does not mean instrumental friendships are worthless. It means they are not the whole of what friendship can be.",
        ],
      },
      {
        title: "Confucian relational ethics",
        body: [
          "Confucian thought treats persons as constituted by relationships. Ethical cultivation happens through family, friendship, and civic roles rather than in isolation.",
          "The tradition's emphasis on hierarchy and deference has been criticised, but its insight that care is learned through particular relationships remains influential.",
        ],
      },
      {
        title: "The limits of philosophy",
        body: [
          "Philosophy can clarify ideals, but relationships involve emotion, history, and power that no theory fully captures. The point is not to manage people by theory.",
          "If a relationship is harmful, philosophical ideals of loyalty should not be used to keep someone in it.",
        ],
      },
    ],
    practices: ["confucian-daily-examination", "aristotelian-virtue-reflection", "socratic-self-examination"],
    lessons: ["confucian-ethics", "aristotle-virtue", "experience-machine"],
    philosophers: ["aristotle", "confucius", "mencius", "simone-de-beauvoir"],
    concepts: ["ren", "virtue", "eudaimonia", "justice"],
    reflectionPrompts: [
      "What kind of friend am I, and what kind of friendship do I want?",
      "Where am I treating a person as a function rather than a person?",
      "What do I owe to the people closest to me?",
    ],
    relatedTopics: ["anger-and-conflict", "character-and-virtue", "happiness-and-contentment"],
  },
  {
    slug: "anger-and-conflict",
    title: "Anger and Conflict",
    subtitle: "The uses and dangers of a difficult emotion",
    description:
      "Anger can signal injustice and motivate change. It can also distort judgment and cause harm. Stoic and Confucian traditions offer different perspectives on its management.",
    intro: [
      "Anger is not simply an irrational eruption. It often contains a judgment: that something has been violated, that a boundary has been crossed, that someone is treating us unfairly.",
      "The philosophical question is whether anger should be eliminated, moderated, or cultivated as a response to injustice.",
    ],
    sections: [
      {
        title: "Seneca's therapy of anger",
        body: [
          "Seneca treats anger as a destructive passion that can be resisted at its first stirrings. He recommends delay, self-awareness, and a larger perspective.",
          "Critics argue that the Stoic ideal can suppress legitimate anger at injustice. Seneca's own position is more nuanced than simple suppression, but the risk is real.",
        ],
      },
      {
        title: "Confucian harmony",
        body: [
          "Confucian ethics values harmony but does not recommend passivity. The exemplary person is expected to remonstrate with those in power when necessary, though with care and propriety.",
          "The emphasis is on restoring relationships and fulfilling roles, not on winning or humiliating an opponent.",
        ],
      },
      {
        title: "When anger is justified",
        body: [
          "Anger can be a signal that something matters. The task is to distinguish the signal from the action it suggests.",
          "Philosophy cannot resolve every conflict. In situations of abuse or danger, the priority is safety, not philosophical equanimity.",
        ],
      },
    ],
    practices: ["stoic-evening-reflection", "confucian-daily-examination", "daoist-wu-wei-practice"],
    lessons: ["stoicism-dichotomy-of-control", "confucian-ethics", "daoism-wu-wei"],
    philosophers: ["seneca", "epictetus", "confucius", "laozi"],
    concepts: ["virtue", "ren", "wu-wei"],
    reflectionPrompts: [
      "What judgment is underneath my anger?",
      "What outcome do I actually want, and will this action produce it?",
      "Where is my anger pointing to a real injustice that needs a response?",
    ],
    relatedTopics: ["relationships-and-friendship", "overthinking-and-attention", "character-and-virtue"],
  },
  {
    slug: "decisions-and-uncertainty",
    title: "Decisions and Uncertainty",
    subtitle: "How to choose without a guarantee",
    description:
      "Every significant decision is made with incomplete information. Philosophy offers frameworks for acting well under uncertainty without pretending that uncertainty can be eliminated.",
    intro: [
      "We often delay decisions in the hope of more information, or make them impulsively to escape the discomfort of not knowing. Both responses can become habits.",
      "The question is not how to make perfect decisions but how to make decisions that are reasonable, revisable, and consistent with one's values.",
    ],
    sections: [
      {
        title: "Stoic agency",
        body: [
          "The Stoic dichotomy of control separates the decision from its outcome. You can deliberate carefully and still fail. The quality of the deliberation is what is up to you.",
          "This does not mean outcomes do not matter. It means they are not the whole measure of a good decision.",
        ],
      },
      {
        title: "Existential responsibility",
        body: [
          "Sartre argues that choice is unavoidable. Even refusing to choose is a choice, and responsibility cannot be outsourced to a rule or an authority.",
          "His account can overstate freedom, but it captures something important: deliberation is not a way of escaping agency.",
        ],
      },
      {
        title: "A practical test",
        body: [
          "Ask what you would advise a friend in the same situation. Ask which option you would choose if you knew you might regret it. Ask what your values require, not what your fear prefers.",
          "None of these tests guarantees the right answer. They can, however, make the decision more legible.",
        ],
      },
    ],
    practices: ["socratic-self-examination", "stoic-evening-reflection", "philosophical-question-walk"],
    lessons: ["free-will-problem", "stoicism-dichotomy-of-control", "camus-absurd"],
    philosophers: ["epictetus", "sartre", "camus", "aristotle"],
    concepts: ["free-will", "determinism", "compatibilism"],
    reflectionPrompts: [
      "What information would actually change my mind?",
      "Am I delaying because I need more evidence or because I fear the outcome?",
      "Which option is most consistent with the person I want to become?",
    ],
    relatedTopics: ["fear-and-uncertainty", "overthinking-and-attention", "ambition-and-success"],
  },
  {
    slug: "happiness-and-contentment",
    title: "Happiness and Contentment",
    subtitle: "Beyond the feeling of the moment",
    description:
      "Happiness can mean a pleasant feeling, a satisfied life, or a life well lived. Philosophy helps distinguish these and asks which one is worth pursuing.",
    intro: [
      "Modern discussions of happiness often treat it as a measurable feeling. Ancient philosophy generally treated it as a way of living, not merely a state of mind.",
      "The difference matters. If happiness is a feeling, it can be pursued directly. If it is a life, it requires cultivation and conditions.",
    ],
    sections: [
      {
        title: "Eudaimonia",
        body: [
          "Aristotle's eudaimonia is activity in accordance with virtue over a complete life, supported by external goods. It is not identical with pleasure, though a flourishing life will contain pleasures.",
          "This account is demanding and somewhat objective. It asks not 'How do I feel?' but 'How am I living?'",
        ],
      },
      {
        title: "Tranquillity",
        body: [
          "Epicurus identifies the good life with the absence of pain and mental disturbance. Stoics identify it with virtue, which is sufficient for happiness.",
          "Both traditions are more austere than modern hedonism, and both take friendship and understanding seriously.",
        ],
      },
      {
        title: "The limits of the question",
        body: [
          "No philosophical theory can guarantee happiness. Loss, illness, and injustice are real. A philosophy that cannot acknowledge this is not adequate.",
          "The value of these traditions lies in the questions they give us, not in a promise of permanent contentment.",
        ],
      },
    ],
    practices: ["epicurean-desire-audit", "stoic-evening-reflection", "aristotelian-virtue-reflection"],
    lessons: ["aristotle-virtue", "experience-machine", "death-and-meaning"],
    philosophers: ["aristotle", "epicurus", "epictetus", "seneca"],
    concepts: ["eudaimonia", "hedonism", "virtue", "pessimism"],
    reflectionPrompts: [
      "Am I pursuing a feeling or a way of living?",
      "What would contentment look like in my actual circumstances?",
      "Which pleasures are worth the cost they impose?",
    ],
    relatedTopics: ["desire-and-attachment", "meaning-and-purpose", "character-and-virtue"],
  },
  {
    slug: "character-and-virtue",
    title: "Character and Virtue",
    subtitle: "Who are you becoming?",
    description:
      "Virtue ethics asks what kind of person to become, not only what to do. This topic explores how character is formed through habit, relationship, and reflection.",
    intro: [
      "Most ethical decisions are not dramatic dilemmas. They are small repetitions: how we speak to colleagues, whether we keep promises, what we do when no one is watching.",
      "Virtue ethics takes these repetitions seriously. Character is not a fixed essence; it is a set of dispositions shaped over time.",
    ],
    sections: [
      {
        title: "Aristotle: habituation",
        body: [
          "Aristotle argues that virtues are acquired through practice. We become just by doing just things, courageous by acting courageously, and so on.",
          "This raises the question of how one can act virtuously before having the virtue. Aristotle's answer involves education, imitation, and the guidance of practical wisdom.",
        ],
      },
      {
        title: "Confucius: relationships and ritual",
        body: [
          "Confucian ethics locates character in relationships and ritual practice. The exemplary person is not isolated but acts well in family, community, and political life.",
          "The emphasis on ritual can seem conservative to modern readers. Confucians reply that good ritual is a form of attention, not mere conformity.",
        ],
      },
      {
        title: "The unity of character",
        body: [
          "Can someone be courageous but cruel, or generous but dishonest? Ancient thinkers often argued that the virtues are interconnected.",
          "Modern psychology suggests that character is more situational than we like to think. The philosophical question is how to cultivate stable dispositions without ignoring context.",
        ],
      },
    ],
    practices: ["aristotelian-virtue-reflection", "confucian-daily-examination", "socratic-self-examination"],
    lessons: ["aristotle-virtue", "confucian-ethics", "what-is-philosophy"],
    philosophers: ["aristotle", "confucius", "mencius", "socrates"],
    concepts: ["virtue", "eudaimonia", "ren"],
    reflectionPrompts: [
      "What kind of person am I becoming through my daily habits?",
      "Which virtue do I most need to cultivate, and what would practising it look like?",
      "Where do my stated values and my actions diverge?",
    ],
    relatedTopics: ["relationships-and-friendship", "ambition-and-success", "anger-and-conflict"],
  },
];
