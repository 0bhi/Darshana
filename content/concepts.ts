import type { Concept } from "@/lib/content/schemas";

export const concepts: Concept[] = [
  {
    slug: "nihilism",
    name: "Nihilism",
    shortDefinition:
      "The view that life, values, or knowledge lack the objective foundation or meaning they are commonly assumed to have.",
    significance:
      "Nihilism names a crisis as much as a doctrine. It asks what remains of ethics and meaning when traditional metaphysical guarantees are removed, and whether new values can be created without illusion.",
    origins:
      "The term is often associated with nineteenth-century Russian radicalism and with Nietzsche's diagnosis of European culture, though earlier forms of scepticism and pessimism anticipate the problem. Nietzsche did not simply advocate nihilism; he described it as a historical condition to be overcome.",
    interpretations: [
      {
        label: "Metaphysical nihilism",
        description:
          "There are no objective values, purposes, or facts of the matter about meaning. This is a claim about reality, not merely a mood.",
      },
      {
        label: "Existential nihilism",
        description:
          "Human life has no inherent meaning or purpose. The response may be despair, defiance, or the construction of meaning.",
      },
      {
        label: "Nietzsche's diagnosis",
        description:
          "Nihilism is the result of the highest values devaluing themselves, especially through the collapse of religious and metaphysical foundations. Nietzsche seeks a revaluation that affirms life.",
      },
    ],
    arguments: [
      {
        title: "The argument from the death of God",
        description:
          "If moral values depended on a divine order that no longer commands belief, then those values may lack the authority they were thought to have. Nietzsche explores this consequence rather than celebrating it.",
      },
      {
        title: "The argument from disagreement",
        description:
          "Persistent, apparently irresolvable moral disagreement is sometimes offered as evidence that there are no objective moral facts. The inference is controversial.",
      },
    ],
    criticisms: [
      {
        title: "Nihilism is not the only option",
        description:
          "Secular philosophers have developed robust accounts of objective morality and meaning without God. The collapse of one foundation does not prove that no foundation is possible.",
      },
      {
        title: "Self-undermining",
        description:
          "If there are no values, it is unclear why nihilism itself should be valued or why its diagnosis should be accepted as true.",
      },
    ],
    philosophers: ["nietzsche", "camus", "schopenhauer"],
    traditions: ["modern-european"],
    relatedConcepts: ["absurdism", "existentialism", "the-absurd", "pessimism"],
    relatedLessons: ["nietzsche-nihilism", "camus-absurd", "death-and-meaning"],
    practicalRelevance:
      "Nihilism can function as a provocation to examine which values one actually has reasons to hold, rather than as a licence for indifference.",
  },
  {
    slug: "absurdism",
    name: "Absurdism",
    shortDefinition:
      "The view that human beings demand meaning while the universe offers none, and that this tension should be confronted rather than resolved.",
    significance:
      "Absurdism offers a distinctive response to meaninglessness: neither suicide nor faith nor despair, but lucid revolt and the embrace of life without consolation.",
    origins:
      "The term is especially associated with Albert Camus, though related themes appear in Kierkegaard, Dostoevsky, and twentieth-century existentialism. Camus explicitly distinguished the absurd from simple nihilism.",
    interpretations: [
      {
        label: "Camus' absurd",
        description:
          "The absurd is a relation between the human demand for meaning and the world's silence. It cannot be eliminated without abandoning either the demand or the silence.",
      },
      {
        label: "Revolt",
        description:
          "The absurd person refuses both suicide and appeals to transcendent meaning, choosing instead to live with lucidity and defiance.",
      },
      {
        label: "Limits of revolt",
        description:
          "In The Rebel, Camus argues that revolt must recognise limits and the humanity of others, resisting the slide into terror.",
      },
    ],
    arguments: [
      {
        title: "The confrontation argument",
        description:
          "The experience of absurdity arises when our expectation of intelligibility meets an indifferent world. The experience is not proof of meaninglessness, but it is the starting point for Camus' inquiry.",
      },
    ],
    criticisms: [
      {
        title: "Can revolt be justified?",
        description:
          "Critics ask whether Camus covertly relies on values such as dignity and solidarity that his absurd starting point cannot ground.",
      },
      {
        title: "Is the absurd universal?",
        description:
          "Not everyone experiences the world as silent or meaningless. The claim may describe a particular cultural and psychological situation rather than the human condition as such.",
      },
    ],
    philosophers: ["camus", "nietzsche", "sartre"],
    traditions: ["modern-european", "contemporary-philosophy"],
    relatedConcepts: ["the-absurd", "nihilism", "existentialism"],
    relatedLessons: ["camus-absurd", "nietzsche-nihilism", "death-and-meaning"],
    practicalRelevance:
      "Absurdism suggests attending to the quality of attention and engagement in daily life rather than waiting for a cosmic justification.",
  },
  {
    slug: "existentialism",
    name: "Existentialism",
    shortDefinition:
      "A family of philosophies emphasising human freedom, choice, responsibility, and the absence of a fixed human essence.",
    significance:
      "Existentialism shifted philosophy's focus from abstract systems to lived experience: anxiety, alienation, authenticity, and the burden of choice.",
    origins:
      "The term emerged in the mid-twentieth century around Sartre, Beauvoir, and Camus, but its roots are often traced to Kierkegaard, Nietzsche, and Dostoevsky. The label was rejected by some of the thinkers associated with it.",
    interpretations: [
      {
        label: "Sartrean existentialism",
        description:
          "Existence precedes essence: we are radically free and responsible for creating ourselves, though we often flee this freedom through bad faith.",
      },
      {
        label: "Beauvoir's situated freedom",
        description:
          "Freedom is always embodied and socially situated. Oppression shapes the concrete possibilities available to a person without eliminating agency entirely.",
      },
      {
        label: "Religious existentialism",
        description:
          "Kierkegaard and later religious thinkers explore faith, anxiety, and the individual's relation to God in terms that anticipate existentialist themes.",
      },
    ],
    arguments: [
      {
        title: "The argument from no fixed essence",
        description:
          "If human beings have no predetermined nature, then their choices and projects are not merely expressions of an essence but constitute who they become.",
      },
      {
        title: "The argument from anxiety",
        description:
          "The experience of anxiety reveals freedom: we are not simply determined by our roles or desires, but must decide how to live.",
      },
    ],
    criticisms: [
      {
        title: "Overstated freedom",
        description:
          "Structural injustice, material deprivation, and psychological constraint can severely limit freedom. Existentialism has been criticised for treating freedom too individualistically.",
      },
      {
        title: "Philosophical vagueness",
        description:
          "The language of authenticity and bad faith can be evocative without being precise. Analytic critics ask for clearer criteria and arguments.",
      },
    ],
    philosophers: ["sartre", "simone-de-beauvoir", "camus", "nietzsche"],
    traditions: ["modern-european", "contemporary-philosophy"],
    relatedConcepts: ["bad-faith", "free-will", "the-self", "nihilism"],
    relatedLessons: ["camus-absurd", "free-will-problem", "nietzsche-nihilism"],
  },
  {
    slug: "the-absurd",
    name: "The Absurd",
    shortDefinition:
      "The conflict between the human need for meaning and the apparent meaninglessness of the world.",
    significance:
      "The absurd is not simply a claim that life is meaningless. It is a relational concept: meaninglessness matters only because we demand meaning.",
    origins:
      "The concept is central to Camus' The Myth of Sisyphus and is anticipated in existentialist and religious thought. It differs from nihilism in its emphasis on the confrontation rather than the absence of value.",
    interpretations: [
      {
        label: "Camus",
        description:
          "The absurd arises from the collision between human longing and the world's silence. It should be kept alive rather than resolved.",
      },
      {
        label: "Religious readings",
        description:
          "Some thinkers treat the absurd as a stage on the way to faith, as in Kierkegaard's account of the leap. Camus rejects this as a form of escape.",
      },
    ],
    arguments: [
      {
        title: "The experience of absurdity",
        description:
          "The routine of daily life can suddenly appear pointless: we ask why we do what we do, and no final answer is forthcoming. Camus treats this experience as philosophically significant.",
      },
    ],
    criticisms: [
      {
        title: "From experience to metaphysics",
        description:
          "An experience of meaninglessness does not establish that the world is meaningless. The absurd may be a psychological state rather than a fundamental feature of reality.",
      },
    ],
    philosophers: ["camus", "nietzsche", "sartre"],
    traditions: ["modern-european", "contemporary-philosophy"],
    relatedConcepts: ["absurdism", "nihilism", "existentialism"],
    relatedLessons: ["camus-absurd", "death-and-meaning"],
  },
  {
    slug: "free-will",
    name: "Free Will",
    shortDefinition:
      "The capacity to choose and act in a way that is genuinely one's own, and the metaphysical status of that capacity.",
    significance:
      "Free will is central to moral responsibility, punishment, praise, and self-understanding. If our actions are wholly determined, it is unclear whether we deserve credit or blame for them.",
    origins:
      "The problem is ancient: Stoics and Epicureans debated fate and agency, and Augustine and Boethius formulated influential Christian accounts. Modern debates were reshaped by determinism and the scientific image of nature.",
    interpretations: [
      {
        label: "Libertarianism",
        description:
          "Free will requires a genuine ability to do otherwise, and determinism is false. Some libertarians posit agent causation or indeterministic processes.",
      },
      {
        label: "Compatibilism",
        description:
          "Free will is compatible with determinism if actions flow from one's own desires and deliberations without external coercion.",
      },
      {
        label: "Hard determinism",
        description:
          "Determinism is true and incompatible with free will, so free will does not exist. Moral responsibility may need to be reconceived.",
      },
    ],
    arguments: [
      {
        title: "The consequence argument",
        description:
          "If the past and the laws of nature determine our actions, then we cannot do otherwise. If free will requires the ability to do otherwise, determinism rules it out.",
      },
      {
        title: "The experience of deliberation",
        description:
          "Compatibilists argue that the experience of weighing reasons and acting on them is exactly what free will should mean, regardless of deeper determinism.",
      },
    ],
    criticisms: [
      {
        title: "What is 'could have done otherwise'?",
        description:
          "The phrase can mean different things: physical possibility, rational capacity, or counterfactual dependence on one's character. Much of the debate turns on this ambiguity.",
      },
      {
        title: "Moral responsibility without free will",
        description:
          "Some philosophers argue that responsibility practices can be justified pragmatically even if libertarian free will is illusory. Others insist that blame requires genuine desert.",
      },
    ],
    philosophers: ["epictetus", "hume", "kant", "sartre", "simone-de-beauvoir"],
    traditions: ["ancient-greek", "modern-european", "contemporary-philosophy"],
    relatedConcepts: ["determinism", "compatibilism", "bad-faith", "the-self"],
    relatedLessons: ["free-will-problem", "stoicism-dichotomy-of-control", "camus-absurd"],
    practicalRelevance:
      "Stoic practice focuses on the quality of agency available within constraints rather than on controlling outcomes.",
  },
  {
    slug: "determinism",
    name: "Determinism",
    shortDefinition:
      "The thesis that every event, including every human action, is causally determined by prior conditions and laws of nature.",
    significance:
      "Determinism challenges the idea that we could have done otherwise and raises questions about responsibility, punishment, and the meaning of deliberation.",
    origins:
      "Ancient atomists and Stoics developed early forms of determinism and fatalism. The modern scientific worldview made the thesis especially pressing, though quantum mechanics has complicated the picture.",
    interpretations: [
      {
        label: "Causal determinism",
        description:
          "Every event is necessitated by prior events and laws. This is the standard formulation in the free will debate.",
      },
      {
        label: "Theological determinism",
        description:
          "God's foreknowledge or decree determines all things, raising problems about human freedom and evil.",
      },
      {
        label: "Physical indeterminism",
        description:
          "Quantum theory may show that some events are not fully determined. Whether this helps free will is disputed.",
      },
    ],
    arguments: [
      {
        title: "The success of causal explanation",
        description:
          "Science has repeatedly explained events through prior causes. Determinism generalises this success into a universal thesis, though the generalisation is not itself a scientific result.",
      },
    ],
    criticisms: [
      {
        title: "Quantum indeterminacy",
        description:
          "If fundamental physical events are indeterministic, strict determinism is false. But indeterminacy alone does not give us control.",
      },
      {
        title: "Determinism as unfalsifiable",
        description:
          "Some critics argue that determinism functions as a metaphysical assumption rather than an empirical hypothesis, especially if it is defended by redefining causation.",
      },
    ],
    philosophers: ["epictetus", "hume", "kant", "schopenhauer"],
    traditions: ["ancient-greek", "modern-european"],
    relatedConcepts: ["free-will", "compatibilism"],
    relatedLessons: ["free-will-problem", "stoicism-dichotomy-of-control"],
  },
  {
    slug: "compatibilism",
    name: "Compatibilism",
    shortDefinition:
      "The view that free will and moral responsibility are compatible with determinism.",
    significance:
      "Compatibilism attempts to preserve responsibility without libertarian metaphysics. It is probably the majority position among contemporary philosophers working on free will.",
    origins:
      "Hume and Hobbes developed early compatibilist accounts. Contemporary versions include Harry Frankfurt's hierarchical model and Peter Strawson's account of reactive attitudes.",
    interpretations: [
      {
        label: "Humean compatibilism",
        description:
          "Freedom consists in acting according to one's own desires without external constraint. Determinism does not threaten this kind of freedom.",
      },
      {
        label: "Frankfurt's hierarchical account",
        description:
          "A person acts freely when their effective desire aligns with a higher-order desire about which desires they want to govern their action.",
      },
      {
        label: "Strawsonian naturalism",
        description:
          "Responsibility is grounded in our reactive attitudes, such as resentment and gratitude, rather than in metaphysical desert.",
      },
    ],
    arguments: [
      {
        title: "The absence of coercion",
        description:
          "What matters for freedom is not whether determinism is true but whether one's action is coerced or compelled. A determined action can still be voluntary.",
      },
    ],
    criticisms: [
      {
        title: "The manipulation worry",
        description:
          "If a person's desires were implanted by a manipulator, we hesitate to call them free even if they act on those desires. Compatibilists must explain what distinguishes manipulation from ordinary causation.",
      },
      {
        title: "Responsibility without desert",
        description:
          "Compatibilism may justify managing behaviour without justifying the idea that people deserve punishment in a deep sense.",
      },
    ],
    philosophers: ["hume", "kant", "sartre"],
    traditions: ["modern-european", "contemporary-philosophy"],
    relatedConcepts: ["free-will", "determinism"],
    relatedLessons: ["free-will-problem"],
  },
  {
    slug: "non-dualism",
    name: "Non-dualism",
    shortDefinition:
      "A family of views denying a fundamental separation between self and world, mind and matter, or subject and object.",
    significance:
      "Non-dualism challenges the assumption that reality is composed of separate substances. It appears in Advaita Vedanta, Buddhist philosophy, Daoism, and some Western metaphysics.",
    origins:
      "The term covers diverse traditions. Advaita Vedanta's claim that Atman is Brahman is one form; Madhyamaka's emptiness is another; Daoist and process philosophies offer further variants.",
    interpretations: [
      {
        label: "Advaita Vedanta",
        description:
          "The individual self is ultimately identical with Brahman, the single reality. Plurality is explained through ignorance and maya.",
      },
      {
        label: "Buddhist non-dualism",
        description:
          "Madhyamaka denies independent essence but does not posit a single underlying substance. Its non-dualism is often described as a middle way between unity and plurality.",
      },
      {
        label: "Western monism",
        description:
          "Philosophers such as Spinoza argue that there is only one substance, with mind and matter as attributes. This is a different project from Advaita.",
      },
    ],
    arguments: [
      {
        title: "The argument from interdependence",
        description:
          "If everything exists only in relation to other things, then the notion of independently existing separate substances is incoherent.",
      },
      {
        title: "The argument from consciousness",
        description:
          "Advaita appeals to the immediacy of self-awareness and the inability of objectifying thought to capture the subject.",
      },
    ],
    criticisms: [
      {
        title: "The reality of plurality",
        description:
          "Critics argue that non-dualism cannot adequately explain the stubborn reality of distinct persons, suffering, and moral responsibility.",
      },
      {
        title: "Conceptual diversity",
        description:
          "Grouping Advaita, Madhyamaka, and Western monism under one label can obscure deep disagreements about substance, causality, and liberation.",
      },
    ],
    philosophers: ["shankaracharya", "nagarjuna", "laozi", "plato"],
    traditions: ["vedanta", "buddhist-philosophy", "daoism", "ancient-greek"],
    relatedConcepts: ["maya", "emptiness", "the-self", "dependent-origination"],
    relatedLessons: ["advaita-vedanta", "dependent-origination", "buddhist-anatta"],
  },
  {
    slug: "maya",
    name: "Maya",
    shortDefinition:
      "In Advaita Vedanta, the power of ignorance that makes the world appear as a plurality of separate things.",
    significance:
      "Maya explains how non-dual Brahman appears as a world of distinct selves and objects without making that world simply unreal.",
    origins:
      "The term appears in the Upanishads and is developed systematically by Shankara and later Advaita thinkers. It also has earlier meanings of magical power or illusion in Indian literature.",
    interpretations: [
      {
        label: "Shankara's maya",
        description:
          "Maya is beginningless ignorance that projects plurality onto Brahman. It is neither real nor unreal in the ordinary sense, a status that has generated centuries of debate.",
      },
      {
        label: "Popular illusionism",
        description:
          "A common but imprecise reading treats the world as a dream or pure illusion. Shankara's position is more subtle: the world is empirically real even if ultimately non-dual.",
      },
      {
        label: "Rival Vedanta",
        description:
          "Ramanuja and Madhva reject Shankara's maya, arguing that the world and individual souls are real, though dependent on Brahman.",
      },
    ],
    arguments: [
      {
        title: "The argument from ignorance",
        description:
          "If the self is truly Brahman, why do we experience separation? Maya provides an explanatory device for beginningless misapprehension.",
      },
    ],
    criticisms: [
      {
        title: "Explaining illusion with illusion",
        description:
          "Critics ask whether maya is a genuine explanation or a label for the problem. If maya is itself inexplicable, the theory may not illuminate much.",
      },
      {
        title: "Ethical consequences",
        description:
          "If the world is ultimately unreal, why should suffering and injustice matter? Advaita responds that they matter at the conventional level, but the tension remains.",
      },
    ],
    philosophers: ["shankaracharya", "nagarjuna", "plato"],
    traditions: ["vedanta", "indian-philosophy"],
    relatedConcepts: ["non-dualism", "the-self", "emptiness"],
    relatedLessons: ["advaita-vedanta", "plato-allegory-cave"],
  },
  {
    slug: "anatta",
    name: "Anatta",
    shortDefinition:
      "The Buddhist teaching of non-self: there is no permanent, unchanging essence underlying a person's experiences.",
    significance:
      "Anatta challenges the intuition that each of us has a core self. It reframes personal identity as a process rather than a substance and connects directly to the Buddhist analysis of suffering.",
    origins:
      "The teaching appears in early Buddhist discourses, especially the Anattalakkhana Sutta, and is developed differently in later Abhidharma, Madhyamaka, and Chan/Zen traditions.",
    interpretations: [
      {
        label: "Early Buddhist non-self",
        description:
          "The five aggregates that make up a person are impermanent and not-self. Clinging to them as 'me' or 'mine' produces suffering.",
      },
      {
        label: "Madhyamaka",
        description:
          "Nagarjuna extends the analysis: all phenomena, not only persons, lack intrinsic nature. Emptiness is not a new self but the absence of essence.",
      },
      {
        label: "Conventional persons",
        description:
          "Most Buddhist traditions accept that persons exist conventionally. Anatta denies a permanent essence, not the practical reality of agency and responsibility.",
      },
    ],
    arguments: [
      {
        title: "The impermanence argument",
        description:
          "Whatever is impermanent is unsatisfactory to cling to, and whatever is impermanent cannot be a permanent self. The five aggregates are impermanent; therefore they are not self.",
      },
      {
        title: "The control argument",
        description:
          "If the body or mind were truly self, we could command it to be a certain way. Since we cannot, these processes are not an unchanging self.",
      },
    ],
    criticisms: [
      {
        title: "Who is liberated?",
        description:
          "If there is no self, it is unclear who experiences rebirth, accumulates karma, or attains liberation. Buddhist schools offer different answers, often involving causal continuity without a substance.",
      },
      {
        title: "The reality of agency",
        description:
          "Some philosophers argue that non-self undermines moral responsibility. Buddhists generally distinguish conventional agency from metaphysical selfhood.",
      },
    ],
    philosophers: ["buddha", "nagarjuna", "hume"],
    traditions: ["buddhist-philosophy", "indian-philosophy"],
    relatedConcepts: ["the-self", "dependent-origination", "emptiness", "personal-identity"],
    relatedLessons: ["buddhist-anatta", "dependent-origination", "ship-of-theseus"],
    practicalRelevance:
      "Observing thoughts and sensations as changing processes can loosen identification with them, though this is not a substitute for clinical care.",
  },
  {
    slug: "dependent-origination",
    name: "Dependent Origination",
    shortDefinition:
      "The Buddhist principle that things arise and cease in dependence on conditions rather than from independent, intrinsic natures.",
    significance:
      "Dependent origination is the metaphysical core of Buddhist philosophy. It explains suffering, rebirth, and liberation without positing a permanent self or uncaused events.",
    origins:
      "The principle appears in early Buddhist teachings and is developed by Nagarjuna and the Madhyamaka school into a radical critique of essence.",
    interpretations: [
      {
        label: "Causal conditionality",
        description:
          "The twelve links of dependent origination describe how ignorance conditions craving, clinging, becoming, birth, and suffering.",
      },
      {
        label: "Madhyamaka emptiness",
        description:
          "Nagarjuna argues that if things arise dependently, they lack svabhava. Emptiness and dependent origination are two descriptions of the same insight.",
      },
      {
        label: "Process philosophy",
        description:
          "Some interpreters compare dependent origination to process metaphysics, though the comparison can obscure specifically Buddhist soteriological aims.",
      },
    ],
    arguments: [
      {
        title: "The argument from change",
        description:
          "If things had fixed essences, change would be inexplicable. Dependence on conditions explains both stability and transformation.",
      },
      {
        title: "The argument from suffering",
        description:
          "Suffering arises from conditions, especially craving and ignorance. Understanding the chain makes it possible to interrupt it.",
      },
    ],
    criticisms: [
      {
        title: "Causation without relata",
        description:
          "If everything is dependently arisen, what are the relata of dependence? Nagarjuna's critics argue that the view threatens to dissolve causation altogether.",
      },
      {
        title: "Nihilism charge",
        description:
          "Critics worry that emptiness denies the reality of the world. Madhyamaka replies that emptiness is itself empty and conventional truth remains authoritative.",
      },
    ],
    philosophers: ["buddha", "nagarjuna"],
    traditions: ["buddhist-philosophy", "indian-philosophy"],
    relatedConcepts: ["emptiness", "anatta", "non-dualism"],
    relatedLessons: ["dependent-origination", "buddhist-anatta", "advaita-vedanta"],
  },
  {
    slug: "emptiness",
    name: "Emptiness (Sunyata)",
    shortDefinition:
      "In Madhyamaka Buddhism, the absence of intrinsic nature or independent existence in all phenomena.",
    significance:
      "Emptiness is not nothingness. It is the claim that things exist only dependently, a view that reshaped Buddhist metaphysics and has parallels with some Western anti-essentialism.",
    origins:
      "The concept is developed in the Prajnaparamita literature and systematically analysed by Nagarjuna. It became central to Tibetan and East Asian Buddhism.",
    interpretations: [
      {
        label: "Madhyamaka",
        description:
          "All phenomena are empty of svabhava because they arise dependently. Emptiness itself is empty, preventing the view from becoming a new metaphysical absolute.",
      },
      {
        label: "Yogacara",
        description:
          "Yogacara thinkers emphasise consciousness and the constructed nature of subject-object duality, though their relation to Madhyamaka is debated.",
      },
      {
        label: "Misreading as nihilism",
        description:
          "Emptiness is often mistaken for the claim that nothing exists. Madhyamaka insists on conventional reality and the efficacy of practice.",
      },
    ],
    arguments: [
      {
        title: "The tetralemma",
        description:
          "Nagarjuna examines whether things arise from themselves, from others, from both, or without cause, and rejects each option. The analysis aims to expose conceptual assumptions rather than establish a new thesis.",
      },
    ],
    criticisms: [
      {
        title: "Coherence",
        description:
          "If emptiness is itself empty, what is the status of the claim? Critics ask whether Madhyamaka can avoid self-refutation.",
      },
      {
        title: "Practical implications",
        description:
          "Does emptiness support compassion, as Buddhists claim, or does it undermine the reality of suffering? The answer depends on how conventional truth is understood.",
      },
    ],
    philosophers: ["nagarjuna", "buddha", "shankaracharya"],
    traditions: ["buddhist-philosophy", "indian-philosophy"],
    relatedConcepts: ["dependent-origination", "anatta", "non-dualism", "maya"],
    relatedLessons: ["dependent-origination", "buddhist-anatta"],
  },
  {
    slug: "consciousness",
    name: "Consciousness",
    shortDefinition:
      "The subjective, first-person character of experience: what it is like to feel, perceive, think, or be aware.",
    significance:
      "Consciousness is the central puzzle of philosophy of mind. Physical science describes brain processes, but it is unclear how or why those processes are accompanied by subjective experience.",
    origins:
      "The modern problem crystallised with Descartes' dualism and was transformed by empirical psychology and neuroscience. Ancient traditions also developed sophisticated analyses of awareness and self-consciousness.",
    interpretations: [
      {
        label: "Physicalism",
        description:
          "Consciousness is a feature or product of physical processes. Versions include identity theory, functionalism, and eliminativism.",
      },
      {
        label: "Dualism",
        description:
          "Mind and body are distinct kinds of thing. Substance dualism posits a non-physical mind; property dualism holds that mental properties are irreducible.",
      },
      {
        label: "Panpsychism",
        description:
          "Consciousness or proto-consciousness is a fundamental feature of reality, not something that emerges only in complex brains.",
      },
    ],
    arguments: [
      {
        title: "The hard problem",
        description:
          "David Chalmers distinguishes the 'easy' problems of explaining cognitive functions from the hard problem of explaining why those functions are accompanied by subjective experience.",
      },
      {
        title: "The knowledge argument",
        description:
          "Frank Jackson's Mary thought experiment asks whether complete physical knowledge of colour vision would still leave something out: what it is like to see red.",
      },
    ],
    criticisms: [
      {
        title: "The hard problem may be illusory",
        description:
          "Some philosophers argue that the sense of an irreducible mystery is a cognitive illusion produced by confusing our concepts of experience.",
      },
      {
        title: "Panpsychism's combination problem",
        description:
          "If micro-level entities have experience, how do their experiences combine into a unified subject? This is a major challenge for panpsychism.",
      },
    ],
    philosophers: ["descartes", "hume", "ibn-sina", "buddha"],
    traditions: ["modern-european", "indian-philosophy", "contemporary-philosophy"],
    relatedConcepts: ["qualia", "the-self", "personal-identity"],
    relatedLessons: ["problem-of-other-minds", "chinese-room", "buddhist-anatta"],
  },
  {
    slug: "qualia",
    name: "Qualia",
    shortDefinition:
      "The intrinsic, subjective qualities of experience, such as the redness of red or the felt sharpness of pain.",
    significance:
      "Qualia are often used to argue that consciousness cannot be fully captured by physical description. They raise questions about the relation between objective science and subjective experience.",
    origins:
      "The term entered modern philosophy through C.S. Peirce and later analytic philosophy of mind. Debates about qualia became central in the late twentieth century.",
    interpretations: [
      {
        label: "Qualia realism",
        description:
          "Qualia are real, introspectively accessible properties of experience that cannot be reduced to physical properties.",
      },
      {
        label: "Representationalism",
        description:
          "Qualia are aspects of representational content. The felt character of experience is explained by what the experience represents.",
      },
      {
        label: "Eliminativism",
        description:
          "Some philosophers argue that the concept of qualia is confused and should be abandoned rather than explained.",
      },
    ],
    arguments: [
      {
        title: "The inverted spectrum",
        description:
          "Imagine two people whose colour experiences are systematically inverted but who use colour words identically. If this is conceivable, qualia are not fully captured by functional or behavioural facts.",
      },
    ],
    criticisms: [
      {
        title: "Introspective reliability",
        description:
          "Our reports about the intrinsic character of experience may be shaped by theory and language. It is not obvious that introspection reveals raw qualia.",
      },
    ],
    philosophers: ["descartes", "hume", "kant"],
    traditions: ["modern-european", "contemporary-philosophy"],
    relatedConcepts: ["consciousness", "the-self"],
    relatedLessons: ["problem-of-other-minds", "chinese-room"],
  },
  {
    slug: "the-self",
    name: "The Self",
    shortDefinition:
      "The subject of experience and agency: what, if anything, unifies a person's mental life over time.",
    significance:
      "The self is at the intersection of metaphysics, ethics, and psychology. Whether it is a substance, a bundle, a narrative, or an illusion affects how we understand identity, responsibility, and death.",
    origins:
      "Ancient traditions offered competing accounts: Plato's tripartite soul, Aristotle's hylomorphism, Buddhist non-self, and Advaita's Atman. Modern philosophy added the problem of personal identity and the bundle theory.",
    interpretations: [
      {
        label: "Substantial self",
        description:
          "The self is a persisting entity that underlies changing experiences. Descartes' thinking substance is one version; the Atman of Advaita is another.",
      },
      {
        label: "Bundle theory",
        description:
          "The self is a collection of perceptions or experiences with no additional owner. Hume's account is the classic modern statement.",
      },
      {
        label: "Narrative self",
        description:
          "The self is constituted by the stories we tell about our lives. This approach is influential in ethics and psychology.",
      },
    ],
    arguments: [
      {
        title: "The unity of consciousness",
        description:
          "At any moment, experiences are unified into a single perspective. Something seems to bind them together, though whether this requires a self is disputed.",
      },
      {
        title: "The persistence argument",
        description:
          "We hold people responsible for past actions because we believe they are the same person. If there is no persisting self, this practice may need justification.",
      },
    ],
    criticisms: [
      {
        title: "No empirical self",
        description:
          "Introspection does not reveal a simple self, only particular experiences. Defenders of the self argue that it is a condition of experience rather than an object within it.",
      },
      {
        title: "Cultural variation",
        description:
          "Conceptions of self vary across cultures and historical periods. Philosophical theories should be careful not to universalise a particular local intuition.",
      },
    ],
    philosophers: ["plato", "hume", "buddha", "shankaracharya", "sartre"],
    traditions: ["ancient-greek", "indian-philosophy", "modern-european"],
    relatedConcepts: ["personal-identity", "anatta", "consciousness", "non-dualism"],
    relatedLessons: ["ship-of-theseus", "buddhist-anatta", "advaita-vedanta"],
  },
  {
    slug: "personal-identity",
    name: "Personal Identity",
    shortDefinition:
      "The question of what makes a person the same person over time, and what kind of continuity matters for survival and responsibility.",
    significance:
      "Personal identity connects metaphysics to ethics: if you are not the same person as your future self, why should you care about that future? If you are, what grounds the sameness?",
    origins:
      "Locke's Essay Concerning Human Understanding (1690) made continuity of consciousness central. Hume, Reid, and later Parfit transformed the debate.",
    interpretations: [
      {
        label: "Psychological continuity",
        description:
          "You persist as long as your memories, beliefs, and personality are connected in the right way. Locke emphasised memory; later accounts broaden this to psychological connectedness.",
      },
      {
        label: "Biological continuity",
        description:
          "Personal identity is grounded in the continuity of a living organism, not in psychological connections.",
      },
      {
        label: "No further fact",
        description:
          "Derek Parfit argues that personal identity is not what matters. What matters is psychological continuity and connectedness, even if it does not add up to identity.",
      },
    ],
    arguments: [
      {
        title: "The Ship of Theseus",
        description:
          "If a ship's planks are gradually replaced, is it the same ship? The puzzle raises the general problem of persistence through change and is often applied to persons.",
      },
      {
        title: "Fission",
        description:
          "If a person's brain is divided and each half is transplanted into a new body, both resulting people seem psychologically continuous with the original. But they cannot both be the original if identity is one-to-one.",
      },
    ],
    criticisms: [
      {
        title: "Thought experiments may mislead",
        description:
          "Intuitions about brain transplants and teleportation may reflect contingent features of our psychology rather than deep metaphysical truths.",
      },
      {
        title: "The importance of embodiment",
        description:
          "Psychological accounts may neglect the body, social relationships, and material environment in constituting who we are.",
      },
    ],
    philosophers: ["plato", "hume", "buddha", "locke"],
    traditions: ["ancient-greek", "modern-european", "indian-philosophy"],
    relatedConcepts: ["the-self", "anatta", "consciousness"],
    relatedLessons: ["ship-of-theseus", "buddhist-anatta"],
  },
  {
    slug: "virtue",
    name: "Virtue",
    shortDefinition:
      "A stable excellence of character that disposes a person to feel and act well.",
    significance:
      "Virtue ethics shifts moral evaluation from isolated acts to character and flourishing. It asks what kind of person one should become, not only what one should do.",
    origins:
      "Virtue is central to ancient Greek ethics, especially Aristotle, and to Confucian ethics. Modern virtue ethics revived in the twentieth century through Anscombe, Foot, MacIntyre, and others.",
    interpretations: [
      {
        label: "Aristotelian virtue",
        description:
          "Virtues are dispositions to hit the mean between excess and deficiency, guided by practical wisdom. They are acquired through habituation.",
      },
      {
        label: "Confucian virtue",
        description:
          "Virtues such as ren and li are cultivated through relationships, ritual, and learning. The exemplary person is defined by ethical conduct rather than birth.",
      },
      {
        label: "Stoic virtue",
        description:
          "Virtue is the only genuine good, sufficient for happiness. External goods are preferred but not necessary for a good life.",
      },
    ],
    arguments: [
      {
        title: "The function argument",
        description:
          "If human beings have a characteristic activity, excellence in that activity is the human good. Aristotle identifies it with rational activity in accordance with virtue.",
      },
      {
        title: "The unity of the virtues",
        description:
          "Some ancient thinkers argue that the virtues are inseparable: one cannot be truly courageous without practical wisdom, and so on.",
      },
    ],
    criticisms: [
      {
        title: "Vagueness",
        description:
          "Virtue ethics is sometimes criticised for offering little action guidance in concrete dilemmas. Virtue ethicists reply that judgment and context are unavoidable.",
      },
      {
        title: "Cultural relativity",
        description:
          "Which traits count as virtues varies across societies. Defenders argue that a core set of human excellences can be defended across cultures.",
      },
    ],
    philosophers: ["socrates", "plato", "aristotle", "confucius", "epictetus"],
    traditions: ["ancient-greek", "confucianism"],
    relatedConcepts: ["eudaimonia", "ren", "pessimism"],
    relatedLessons: ["aristotle-virtue", "confucian-ethics", "stoicism-dichotomy-of-control"],
  },
  {
    slug: "eudaimonia",
    name: "Eudaimonia",
    shortDefinition:
      "Human flourishing or living well; the highest good in Aristotle's ethics.",
    significance:
      "Eudaimonia reframes the question of happiness from a feeling to a life well lived. It connects ethics with psychology, education, and politics.",
    origins:
      "The term is central to ancient Greek ethics, especially Aristotle's Nicomachean Ethics. It is often translated as happiness, but 'flourishing' better captures its objective character.",
    interpretations: [
      {
        label: "Aristotelian activity",
        description:
          "Eudaimonia is an activity of the soul in accordance with virtue over a complete life, supported by external goods.",
      },
      {
        label: "Stoic virtue",
        description:
          "Virtue alone is sufficient for eudaimonia. External circumstances are indifferent, though some are preferred.",
      },
      {
        label: "Epicurean tranquillity",
        description:
          "The good life is a life of stable pleasure, understood as the absence of pain and disturbance, sustained by friendship and understanding.",
      },
    ],
    arguments: [
      {
        title: "The completeness argument",
        description:
          "Eudaimonia is the highest good because it is complete and self-sufficient: it is chosen for its own sake and not for the sake of something else.",
      },
    ],
    criticisms: [
      {
        title: "Objective flourishing",
        description:
          "If eudaimonia is objective, it may conflict with a person's own assessment of their life. Critics ask who has authority over what counts as flourishing.",
      },
      {
        title: "External goods",
        description:
          "Aristotle's inclusion of external goods complicates the claim that virtue is sufficient for happiness. The Stoics and Epicureans disagree.",
      },
    ],
    philosophers: ["aristotle", "epicurus", "epictetus", "confucius"],
    traditions: ["ancient-greek", "confucianism"],
    relatedConcepts: ["virtue", "hedonism", "pessimism"],
    relatedLessons: ["aristotle-virtue", "stoicism-dichotomy-of-control", "confucian-ethics"],
  },
  {
    slug: "hedonism",
    name: "Hedonism",
    shortDefinition:
      "The view that pleasure is the highest good and that a good life maximises pleasure or minimises pain.",
    significance:
      "Hedonism is one of the oldest and most misunderstood ethical positions. Its sophisticated forms are about the quality and structure of experience, not simple indulgence.",
    origins:
      "Aristippus and the Cyrenaics advocated a form of hedonism, while Epicurus developed a more austere version centred on tranquillity. Modern utilitarians such as Bentham and Mill defended hedonistic accounts of value.",
    interpretations: [
      {
        label: "Epicurean hedonism",
        description:
          "The highest pleasure is the absence of pain and mental disturbance, achieved through limited desires, friendship, and understanding.",
      },
      {
        label: "Utilitarian hedonism",
        description:
          "The right action is the one that produces the greatest total pleasure or least pain. Bentham's hedonic calculus is an early version.",
      },
      {
        label: "Mill's qualitative hedonism",
        description:
          "Mill distinguishes higher and lower pleasures, arguing that some pleasures are qualitatively superior. Critics question how this is consistent with hedonism.",
      },
    ],
    arguments: [
      {
        title: "The experience machine",
        description:
          "Nozick's thought experiment asks whether we would plug into a machine that guarantees pleasurable experiences. Many say no, suggesting that we value reality and achievement beyond pleasure.",
      },
    ],
    criticisms: [
      {
        title: "The experience machine objection",
        description:
          "If hedonism were true, a simulated life of pleasure would be as good as a real one. Most people's intuition that it is not challenges the view.",
      },
      {
        title: "Pleasure is not unified",
        description:
          "The term 'pleasure' covers sensory pleasure, satisfaction, and tranquillity. Hedonism may equivocate between different goods.",
      },
    ],
    philosophers: ["epicurus", "aristotle", "seneca"],
    traditions: ["ancient-greek"],
    relatedConcepts: ["eudaimonia", "virtue", "pessimism"],
    relatedLessons: ["experience-machine", "aristotle-virtue", "death-and-meaning"],
  },
  {
    slug: "rationalism",
    name: "Rationalism",
    shortDefinition:
      "The view that reason, rather than sensory experience alone, is a primary source of knowledge.",
    significance:
      "Rationalism shaped modern philosophy, mathematics, and the sciences. It raises questions about innate ideas, a priori knowledge, and the limits of empiricism.",
    origins:
      "Descartes, Spinoza, and Leibniz are the canonical modern rationalists, though rationalist themes appear in Plato's theory of recollection and in medieval philosophy.",
    interpretations: [
      {
        label: "Innate ideas",
        description:
          "Some knowledge or concepts are innate, or at least not derived solely from experience. Descartes and Leibniz defend versions of this claim.",
      },
      {
        label: "A priori knowledge",
        description:
          "Knowledge can be gained through reason independent of experience, as in mathematics and logic. Kant's synthetic a priori is a distinctive version.",
      },
      {
        label: "Rationalism in ethics",
        description:
          "Moral truths can be discovered by reason, as in Kant's categorical imperative or Plato's Form of the Good.",
      },
    ],
    arguments: [
      {
        title: "The argument from mathematics",
        description:
          "Mathematical knowledge seems to be discovered by reason and to hold necessarily. If so, experience cannot be its sole source.",
      },
    ],
    criticisms: [
      {
        title: "The empiricist challenge",
        description:
          "Hume and others argue that all ideas derive from experience. Rationalist claims about innate ideas have been criticised as obscure or unfalsifiable.",
      },
      {
        title: "The success of science",
        description:
          "Modern science is often taken to vindicate empirical methods. Rationalists reply that theory construction and mathematical reasoning are indispensable.",
      },
    ],
    philosophers: ["plato", "descartes", "kant", "ibn-sina"],
    traditions: ["ancient-greek", "modern-european", "islamic-philosophy"],
    relatedConcepts: ["empiricism", "skepticism", "induction"],
    relatedLessons: ["problem-of-induction", "what-is-philosophy"],
  },
  {
    slug: "empiricism",
    name: "Empiricism",
    shortDefinition:
      "The view that knowledge and concepts derive primarily from sensory experience.",
    significance:
      "Empiricism underpins modern science, psychology, and much of analytic philosophy. It raises questions about the scope of experience and the status of abstract concepts.",
    origins:
      "Locke, Berkeley, and Hume are the classic British empiricists. Aristotle and Epicurus also emphasised experience, and modern logical empiricism attempted to formalise the tradition.",
    interpretations: [
      {
        label: "Classical empiricism",
        description:
          "All simple ideas are derived from impressions or sensations. Complex ideas are combinations of simple ones.",
      },
      {
        label: "Logical empiricism",
        description:
          "Meaningful statements are either analytic or empirically verifiable. The movement influenced philosophy of science but collapsed under its own verificationist critique.",
      },
      {
        label: "Constructive empiricism",
        description:
          "Science aims at empirical adequacy rather than literal truth about unobservable entities. Bas van Fraassen's view is a contemporary example.",
      },
    ],
    arguments: [
      {
        title: "The origin of ideas",
        description:
          "If every idea can be traced to experience, then claims about non-empirical realities are suspect. Hume uses this principle to critique traditional metaphysics.",
      },
    ],
    criticisms: [
      {
        title: "The problem of induction",
        description:
          "Empiricism relies on experience to justify predictions, but experience cannot justify the uniformity of nature without circularity.",
      },
      {
        title: "Abstract concepts",
        description:
          "Mathematical and logical concepts seem not to be derived from sensory experience. Empiricists have developed complex responses, but the issue remains contested.",
      },
    ],
    philosophers: ["aristotle", "hume", "kant"],
    traditions: ["ancient-greek", "modern-european"],
    relatedConcepts: ["rationalism", "skepticism", "induction"],
    relatedLessons: ["problem-of-induction", "what-is-philosophy"],
  },
  {
    slug: "skepticism",
    name: "Skepticism",
    shortDefinition:
      "The view that knowledge is uncertain or unattainable, or the practice of suspending judgment after inquiry.",
    significance:
      "Skepticism is a permanent challenge to philosophy and science. It asks what, if anything, can be known with certainty and how we should live without it.",
    origins:
      "Ancient Pyrrhonian and Academic sceptics developed systematic arguments for suspension of judgment. Descartes used methodological doubt to rebuild knowledge; Hume pushed empiricism toward sceptical conclusions.",
    interpretations: [
      {
        label: "Pyrrhonian skepticism",
        description:
          "Sextus Empiricus describes a practice of opposing arguments and suspending judgment, leading to tranquillity rather than paralysis.",
      },
      {
        label: "Cartesian doubt",
        description:
          "Descartes uses doubt as a method to find an indubitable foundation. His scepticism is provisional, not a final position.",
      },
      {
        label: "External world skepticism",
        description:
          "We cannot prove that an external world exists or that our experiences are not systematically deceptive. Brain-in-a-vat scenarios dramatise the problem.",
      },
    ],
    arguments: [
      {
        title: "The dream argument",
        description:
          "Dreams can be indistinguishable from waking experience. If we cannot rule out dreaming, we cannot be certain that our current experience is veridical.",
      },
      {
        title: "The regress of justification",
        description:
          "Every belief requires justification, which requires further justification. The chain either continues indefinitely, circles, or rests on an unjustified foundation.",
      },
    ],
    criticisms: [
      {
        title: "The practical response",
        description:
          "Skeptics argue that suspension of judgment is livable; critics worry that it undermines inquiry and action.",
      },
      {
        title: "Self-refutation",
        description:
          "The claim that knowledge is impossible seems to present itself as knowledge. Defenders distinguish global scepticism from local caution.",
      },
    ],
    philosophers: ["socrates", "descartes", "hume", "zhuangzi"],
    traditions: ["ancient-greek", "modern-european", "daoism"],
    relatedConcepts: ["rationalism", "empiricism", "induction"],
    relatedLessons: ["problem-of-other-minds", "problem-of-induction", "plato-allegory-cave"],
  },
  {
    slug: "induction",
    name: "The Problem of Induction",
    shortDefinition:
      "The difficulty of justifying inferences from observed cases to unobserved cases, or from the past to the future.",
    significance:
      "Induction is essential to science and everyday life, yet it is surprisingly hard to justify. The problem exposes a gap between experience and rational expectation.",
    origins:
      "Hume formulated the problem in the eighteenth century. It remains central to epistemology and philosophy of science, with responses from Kant, Popper, Goodman, and others.",
    interpretations: [
      {
        label: "Hume's scepticism",
        description:
          "We expect the future to resemble the past because of custom or habit, not reason. No non-circular justification of induction is available.",
      },
      {
        label: "Popper's falsificationism",
        description:
          "Science does not rely on induction but on conjecture and refutation. We cannot verify a theory, but we can test and falsify it.",
      },
      {
        label: "Bayesianism",
        description:
          "Probabilistic reasoning updates degrees of belief. Critics ask whether Bayesian priors themselves require justification.",
      },
    ],
    arguments: [
      {
        title: "The uniformity argument",
        description:
          "Any attempt to justify induction by saying nature is uniform assumes that past uniformities will continue, which is itself an inductive inference.",
      },
      {
        title: "The new riddle of induction",
        description:
          "Nelson Goodman's 'grue' puzzle shows that many incompatible predicates fit past observations equally well. Simplicity or entrenchment may be needed to explain which inductions are reasonable.",
      },
    ],
    criticisms: [
      {
        title: "Induction is unavoidable",
        description:
          "Even if we cannot justify induction in a foundationalist way, we cannot abandon it. Pragmatic or naturalistic responses accept this circularity.",
      },
      {
        title: "Falsification has problems too",
        description:
          "Popper's account struggles to explain why some falsifications should be taken seriously and how probabilistic hypotheses can be falsified.",
      },
    ],
    philosophers: ["hume", "kant"],
    traditions: ["modern-european"],
    relatedConcepts: ["empiricism", "skepticism", "rationalism"],
    relatedLessons: ["problem-of-induction", "problem-of-other-minds"],
  },
  {
    slug: "justice",
    name: "Justice",
    shortDefinition:
      "The proper distribution of benefits and burdens, and the quality of institutions and relationships that render to each what is due.",
    significance:
      "Justice is the central concept of political philosophy. Debates about distributive fairness, punishment, rights, and equality all turn on competing accounts of what justice requires.",
    origins:
      "Plato's Republic asks what justice is in the soul and the city. Aristotle distinguishes distributive, corrective, and reciprocal justice. Modern theories include Hobbes, Locke, Rousseau, Kant, Rawls, and feminist and decolonial critiques.",
    interpretations: [
      {
        label: "Rawlsian justice as fairness",
        description:
          "Principles of justice are those chosen behind a veil of ignorance. Rawls defends equal basic liberties and an arrangement benefiting the least advantaged.",
      },
      {
        label: "Libertarian justice",
        description:
          "Justice concerns the protection of rights and property acquired through legitimate means. Redistribution is often seen as unjust coercion.",
      },
      {
        label: "Capabilities approach",
        description:
          "Justice requires ensuring that people have the real freedoms and capabilities to live lives they have reason to value, not merely equal resources.",
      },
    ],
    arguments: [
      {
        title: "The veil of ignorance",
        description:
          "Choosing principles without knowing one's place in society forces impartiality. The device is meant to model fair terms of cooperation.",
      },
      {
        title: "The difference principle",
        description:
          "Inequalities are justified only if they benefit the least advantaged members of society. Critics ask whether this is too demanding or insufficiently egalitarian.",
      },
    ],
    criticisms: [
      {
        title: "Ideal theory",
        description:
          "Rawlsian and other ideal theories are criticised for offering little guidance in unjust, non-ideal conditions. Non-ideal theory addresses this gap.",
      },
      {
        title: "Whose justice?",
        description:
          "Communitarian, feminist, and decolonial critics argue that liberal theories presuppose a particular conception of the person and ignore power and historical injustice.",
      },
    ],
    philosophers: ["plato", "aristotle", "kant", "simone-de-beauvoir"],
    traditions: ["ancient-greek", "modern-european", "contemporary-philosophy"],
    relatedConcepts: ["social-contract", "virtue", "categorical-imperative"],
    relatedLessons: ["veil-of-ignorance", "plato-allegory-cave", "confucian-ethics"],
  },
  {
    slug: "wu-wei",
    name: "Wu-wei",
    shortDefinition:
      "A Daoist concept often translated as non-action or effortless action: acting without force or contrivance, in accord with the situation.",
    significance:
      "Wu-wei offers an alternative to both passivity and coercive control. It has been influential in ethics, politics, aesthetics, and contemporary discussions of skill and flow.",
    origins:
      "The term appears in the Dao De Jing and the Zhuangzi, where it is associated with the sage and the skilled artisan. It later became central to Chinese Buddhism and Neo-Confucian thought.",
    interpretations: [
      {
        label: "Political wu-wei",
        description:
          "Rulers should govern with minimal interference, allowing people and things to develop according to their natures.",
      },
      {
        label: "Skillful action",
        description:
          "The Zhuangzi's stories of cooks and craftsmen illustrate a kind of absorbed, responsive action that is not deliberate rule-following.",
      },
      {
        label: "Critique of forcing",
        description:
          "Wu-wei is often contrasted with action driven by ego, status, or rigid plans. It is not the absence of action but the absence of coercion.",
      },
    ],
    arguments: [
      {
        title: "The water analogy",
        description:
          "Water yields to obstacles and yet shapes stone. The analogy suggests that non-forceful action can be more effective than direct confrontation.",
      },
    ],
    criticisms: [
      {
        title: "Passivity",
        description:
          "Critics ask whether wu-wei can justify inaction in the face of injustice. Defenders distinguish responsive non-coercion from indifference.",
      },
      {
        title: "Elusive concept",
        description:
          "Wu-wei is difficult to specify. Is it a technique, a virtue, a political principle, or a description of skilled activity? The texts support multiple readings.",
      },
    ],
    philosophers: ["laozi", "zhuangzi", "confucius"],
    traditions: ["daoism", "chinese-philosophy"],
    relatedConcepts: ["non-dualism", "ren"],
    relatedLessons: ["daoism-wu-wei", "confucian-ethics"],
    practicalRelevance:
      "Modern adaptations use wu-wei to examine over-control and the difference between effortful striving and responsive engagement.",
  },
  {
    slug: "ren",
    name: "Ren",
    shortDefinition:
      "The Confucian virtue of humaneness, benevolence, or goodness: a caring disposition expressed through conduct toward others.",
    significance:
      "Ren is the central ethical ideal of Confucianism. It connects self-cultivation with social relationships and political responsibility.",
    origins:
      "Ren appears throughout the Analects. Confucius treats it as a demanding achievement rather than a fixed possession, and later Confucians such as Mencius develop accounts of its natural basis.",
    interpretations: [
      {
        label: "Confucius",
        description:
          "Ren is expressed in the golden rule-like principle of not imposing on others what one does not want, and in the love of others.",
      },
      {
        label: "Mencius",
        description:
          "Ren is grounded in the innate sprout of compassion. Ethical cultivation develops this natural tendency.",
      },
      {
        label: "Neo-Confucian",
        description:
          "Ren becomes a cosmic principle of connectedness and care, integrated with metaphysics and self-cultivation.",
      },
    ],
    arguments: [
      {
        title: "The relational argument",
        description:
          "Human beings are constituted by relationships. Ethical life therefore requires cultivating care and responsibility within families, communities, and political life.",
      },
    ],
    criticisms: [
      {
        title: "Hierarchy and partiality",
        description:
          "Critics argue that Confucian ren can justify unequal concern and deference. Defenders distinguish graded care from callous indifference.",
      },
    ],
    philosophers: ["confucius", "mencius", "aristotle"],
    traditions: ["confucianism", "chinese-philosophy"],
    relatedConcepts: ["virtue", "wu-wei", "eudaimonia"],
    relatedLessons: ["confucian-ethics", "aristotle-virtue"],
  },
  {
    slug: "categorical-imperative",
    name: "The Categorical Imperative",
    shortDefinition:
      "Kant's principle that moral requirements are binding regardless of desire, and are determined by maxims that can be willed as universal laws.",
    significance:
      "The categorical imperative grounds morality in reason and autonomy rather than consequences or divine command. It remains a major alternative in normative ethics.",
    origins:
      "Kant develops the idea in the Groundwork of the Metaphysics of Morals (1785) and the Critique of Practical Reason (1788).",
    interpretations: [
      {
        label: "Universal law formulation",
        description:
          "Act only on maxims that you could will to become universal laws. Contradictions in conception or in will indicate impermissible maxims.",
      },
      {
        label: "Humanity formulation",
        description:
          "Treat humanity, whether in yourself or others, always as an end and never merely as a means.",
      },
      {
        label: "Kingdom of ends",
        description:
          "Act as if you were a legislating member of a kingdom of ends, where all rational beings are treated as ends in themselves.",
      },
    ],
    arguments: [
      {
        title: "The lying promise",
        description:
          "If everyone made false promises when convenient, the institution of promising would collapse. The maxim cannot be universalised, so the action is wrong.",
      },
    ],
    criticisms: [
      {
        title: "Formalism",
        description:
          "The imperative may be too abstract to resolve concrete dilemmas, and its universalisation tests can yield counterintuitive results.",
      },
      {
        title: "Rigidity",
        description:
          "Kant's absolute prohibitions, such as the prohibition on lying, have been criticised for ignoring consequences in extreme cases.",
      },
    ],
    philosophers: ["kant", "socrates", "simone-de-beauvoir"],
    traditions: ["modern-european"],
    relatedConcepts: ["justice", "social-contract", "free-will", "virtue"],
    relatedLessons: ["veil-of-ignorance", "what-is-philosophy"],
  },
  {
    slug: "social-contract",
    name: "The Social Contract",
    shortDefinition:
      "The idea that legitimate political authority rests on an agreement, actual or hypothetical, among the governed.",
    significance:
      "Social contract theory grounds political obligation in consent rather than divine right or mere tradition. It shaped modern democracy, rights, and constitutionalism.",
    origins:
      "Hobbes, Locke, and Rousseau developed the modern theory. Earlier anticipations appear in Greek and medieval thought, and Kant and Rawls reformulated it as a hypothetical device.",
    interpretations: [
      {
        label: "Hobbes",
        description:
          "Without a sovereign, life is a war of all against all. The social contract exchanges natural liberty for security under an absolute sovereign.",
      },
      {
        label: "Locke",
        description:
          "Government exists to protect natural rights to life, liberty, and property. Tyranny can justify resistance.",
      },
      {
        label: "Rawls",
        description:
          "Principles of justice are chosen behind a veil of ignorance. The contract is hypothetical, modelling fair impartiality rather than historical agreement.",
      },
    ],
    arguments: [
      {
        title: "The consent argument",
        description:
          "Political authority is legitimate only if it could be reasonably accepted by free and equal persons. Actual consent is often too demanding, so hypothetical consent is used.",
      },
    ],
    criticisms: [
      {
        title: "The fiction of consent",
        description:
          "Most people never consent to their government. Hypothetical consent may not generate real obligation.",
      },
      {
        title: "Exclusion",
        description:
          "Classic social contract theories excluded women, the propertyless, and colonised peoples. Critics argue that the tradition's universalism masks particular exclusions.",
      },
    ],
    philosophers: ["plato", "hobbes", "locke", "kant", "simone-de-beauvoir"],
    traditions: ["modern-european", "contemporary-philosophy"],
    relatedConcepts: ["justice", "categorical-imperative"],
    relatedLessons: ["veil-of-ignorance"],
  },
  {
    slug: "pessimism",
    name: "Pessimism",
    shortDefinition:
      "The view that life contains more suffering than happiness, or that existence is not worth the cost.",
    significance:
      "Pessimism challenges optimistic accounts of the good life and asks whether the value of existence can be justified. It is a recurring theme in Schopenhauer, Buddhist thought, and existentialism.",
    origins:
      "Schopenhauer gave modern pessimism its most systematic expression, influenced by Kant and Indian thought. Buddhist traditions offer related analyses of suffering, though with different soteriological aims.",
    interpretations: [
      {
        label: "Schopenhauer's metaphysical pessimism",
        description:
          "The will is endless striving, so satisfaction is temporary and suffering is structural. Aesthetic and compassionate experience offer temporary relief.",
      },
      {
        label: "Buddhist suffering",
        description:
          "Dukkha is a characteristic of conditioned existence, but Buddhism affirms a path to liberation. It is not pessimism in the sense of despair.",
      },
      {
        label: "Existential pessimism",
        description:
          "Camus and others confront the absence of meaning without concluding that life is worthless. Revolt and solidarity offer alternative responses.",
      },
    ],
    arguments: [
      {
        title: "The asymmetry argument",
        description:
          "Some pessimists argue that suffering is bad in a way that pleasure is not good, or that the presence of suffering outweighs the value of pleasure.",
      },
    ],
    criticisms: [
      {
        title: "The value of life is contested",
        description:
          "Pessimism often relies on contestable comparisons between suffering and flourishing. It is unclear how to measure or aggregate such experiences.",
      },
      {
        title: "Self-defeating",
        description:
          "If pessimism is true, why write books arguing for it? The pessimist may reply that alleviating suffering, not optimism, is the point.",
      },
    ],
    philosophers: ["schopenhauer", "nietzsche", "buddha", "camus"],
    traditions: ["modern-european", "buddhist-philosophy", "indian-philosophy"],
    relatedConcepts: ["nihilism", "hedonism", "eudaimonia", "the-absurd"],
    relatedLessons: ["death-and-meaning", "nietzsche-nihilism", "buddhist-anatta"],
  },
  {
    slug: "will-to-power",
    name: "Will to Power",
    shortDefinition:
      "Nietzsche's idea that life is characterised by a tendency toward growth, expansion, and self-overcoming, often expressed through the creation of values.",
    significance:
      "Will to power is one of Nietzsche's most contested ideas. It is often misread as a glorification of domination, while Nietzsche uses it to analyse psychology, culture, and morality.",
    origins:
      "The idea appears in Thus Spoke Zarathustra and later works. The posthumous compilation The Will to Power was assembled by Nietzsche's sister and should be treated with caution.",
    interpretations: [
      {
        label: "Psychological interpretation",
        description:
          "Will to power describes the drive to overcome resistance and expand one's capacities, not merely the desire to control others.",
      },
      {
        label: "Cultural interpretation",
        description:
          "Nietzsche uses the concept to evaluate values and institutions according to whether they promote flourishing or decadence.",
      },
      {
        label: "Misreading as domination",
        description:
          "Nazi appropriations treated will to power as a warrant for political violence. This reading is widely rejected by scholars but persists in popular culture.",
      },
    ],
    arguments: [
      {
        title: "The self-overcoming argument",
        description:
          "Living things strive to discharge and enhance their power. Human excellence involves giving form to oneself and creating values rather than merely conforming.",
      },
    ],
    criticisms: [
      {
        title: "Normative ambiguity",
        description:
          "It is unclear whether will to power is a descriptive claim about all life or a normative ideal. Nietzsche's texts support both readings.",
      },
      {
        title: "Political danger",
        description:
          "The concept has been used to justify domination. Defenders argue that Nietzsche's critique of cruelty and his elitism are more complex than such uses suggest.",
      },
    ],
    philosophers: ["nietzsche", "schopenhauer", "sartre"],
    traditions: ["modern-european"],
    relatedConcepts: ["nihilism", "existentialism", "pessimism"],
    relatedLessons: ["nietzsche-nihilism", "camus-absurd"],
  },
  {
    slug: "bad-faith",
    name: "Bad Faith",
    shortDefinition:
      "Sartre's term for the self-deception by which a person denies their freedom and responsibility by identifying with a role, desire, or social expectation.",
    significance:
      "Bad faith connects existentialist metaphysics to everyday life. It explains how people can be complicit in their own unfreedom without simply being coerced.",
    origins:
      "The concept is developed in Sartre's Being and Nothingness (1943), with examples such as the waiter who plays at being a waiter and the woman who refuses to acknowledge a companion's intentions.",
    interpretations: [
      {
        label: "Sartre",
        description:
          "Consciousness is not a thing and cannot be identified with any fact about a person. Bad faith is the attempt to become a thing, to escape the anguish of freedom.",
      },
      {
        label: "Social critique",
        description:
          "Bad faith can be read structurally: social roles and expectations encourage people to mistake themselves for their functions.",
      },
      {
        label: "Beauvoir's development",
        description:
          "Beauvoir extends the analysis to gender, showing how women may internalise the role of the Other while still retaining a degree of freedom.",
      },
    ],
    arguments: [
      {
        title: "The waiter example",
        description:
          "The waiter's exaggerated performance of his role illustrates the attempt to be nothing but a waiter. Yet he is free in a way his performance denies.",
      },
    ],
    criticisms: [
      {
        title: "Is bad faith coherent?",
        description:
          "If bad faith is self-deception, the person must somehow both know and not know the truth. Critics ask whether Sartre's account is psychologically plausible.",
      },
      {
        title: "Structural constraints",
        description:
          "Critics argue that what Sartre calls bad faith may sometimes be a realistic response to limited options. The concept can become a way of blaming people for their circumstances.",
      },
    ],
    philosophers: ["sartre", "simone-de-beauvoir", "camus"],
    traditions: ["modern-european", "contemporary-philosophy"],
    relatedConcepts: ["existentialism", "free-will", "the-self"],
    relatedLessons: ["free-will-problem", "camus-absurd"],
  },
];
