import type { Connection } from "@/lib/content/schemas";

export const connections: Connection[] = [
  {
    slug: "nietzsche-buddhism-suffering",
    title: "Nietzsche and Buddhism on Suffering",
    left: { label: "Friedrich Nietzsche", href: "/thinkers/philosophers/nietzsche" },
    right: { label: "The Buddha", href: "/thinkers/philosophers/buddha" },
    summary:
      "Both Nietzsche and Buddhist traditions take suffering seriously and suspect that ordinary consolation is dishonest. Their diagnoses are close enough to be illuminating and different enough to prevent a simple synthesis.",
    resonance: [
      "Both reject the idea that suffering is a superficial problem to be solved by optimism or distraction.",
      "Both analyse the self and its desires as unstable, conditioned processes rather than fixed substances.",
      "Both challenge the authority of inherited moral values and ask what a life-affirming response would look like.",
    ],
    difference: [
      "Nietzsche seeks self-overcoming and the creation of values; Buddhist practice seeks liberation from craving and the cessation of suffering.",
      "Nietzsche often treats Buddhism as a life-denying, passive response to suffering, though his knowledge of Buddhism was partial and mediated by European sources.",
      "Buddhism offers a path of ethical and meditative discipline; Nietzsche offers aphorism, provocation, and genealogy rather than a method.",
    ],
    caveat:
      "The comparison is a philosophical provocation, not a claim that Nietzsche was a Buddhist or that the traditions share a doctrine. Nietzsche's remarks on Buddhism are scattered and often polemical.",
    relatedLessons: ["nietzsche-nihilism", "buddhist-anatta", "dependent-origination"],
  },
  {
    slug: "stoicism-vedanta-attachment",
    title: "Stoicism and Advaita Vedanta on Attachment",
    left: { label: "Stoicism", href: "/learn/traditions/ancient-greek" },
    right: { label: "Advaita Vedanta", href: "/learn/traditions/vedanta" },
    summary:
      "Stoics and Advaitins both distinguish the self from external goods and locate freedom in a kind of inner detachment. The metaphysical frameworks behind that detachment are very different.",
    resonance: [
      "Both argue that identifying happiness with external circumstances produces bondage.",
      "Both treat philosophical understanding as transformative, not merely theoretical.",
      "Both cultivate a perspective from which status, loss, and bodily change appear less ultimate.",
    ],
    difference: [
      "Stoicism works within an immanent, rational cosmos and emphasises virtue, duty, and the exercise of agency.",
      "Advaita Vedanta holds that the individual self is ultimately non-different from Brahman; liberation is knowledge of that identity.",
      "Stoic detachment is compatible with active political life; Advaita's ultimate goal is often described as release from cyclic existence.",
    ],
    caveat:
      "Detachment is not indifference in either tradition, and the two accounts of the self are not interchangeable. Comparing them should not erase the differences between Greek and Indian metaphysics.",
    relatedLessons: ["stoicism-dichotomy-of-control", "advaita-vedanta", "buddhist-anatta"],
  },
  {
    slug: "camus-sartre-meaning",
    title: "Camus and Sartre on Meaning",
    left: { label: "Albert Camus", href: "/thinkers/philosophers/camus" },
    right: { label: "Jean-Paul Sartre", href: "/thinkers/philosophers/sartre" },
    summary:
      "Camus and Sartre are often grouped as existentialists, but their responses to meaninglessness diverge in ways that illuminate the limits of the label.",
    resonance: [
      "Both reject appeals to transcendent meaning as a flight from freedom.",
      "Both emphasise lucidity, responsibility, and the absence of ready-made justification.",
      "Both treat the confrontation with absurdity or contingency as a starting point for living.",
    ],
    difference: [
      "Camus explicitly rejected the existentialist label and emphasised limits, revolt, and solidarity rather than radical freedom.",
      "Sartre's account of freedom is more systematic and more willing to speak of projects, bad faith, and the constitution of meaning.",
      "Their political disagreements, especially over Algeria and revolutionary violence, reflect different views about the limits of revolt.",
    ],
    caveat:
      "The two thinkers were friends and then rivals. Grouping them under one school can obscure the philosophical and political stakes of their disagreement.",
    relatedLessons: ["camus-absurd", "free-will-problem", "death-and-meaning"],
  },
  {
    slug: "plato-advaita-appearance",
    title: "Plato and Advaita Vedanta on Appearance and Reality",
    left: { label: "Plato", href: "/thinkers/philosophers/plato" },
    right: { label: "Adi Shankaracharya", href: "/thinkers/philosophers/shankaracharya" },
    summary:
      "Plato's cave and Advaita Vedanta's maya both describe ordinary experience as a kind of imprisonment and philosophy as a difficult ascent. The similarities are real, but the destinations are not the same.",
    resonance: [
      "Both distinguish a changing, apparent world from a stable reality known through reason or insight.",
      "Both treat education as a transformation of the whole person, not the transfer of information.",
      "Both use images of light, ascent, and waking to describe philosophical understanding.",
    ],
    difference: [
      "Plato's ultimate reality includes a plurality of Forms; Advaita's Brahman is non-dual.",
      "Plato's ascent is tied to a political and educational programme; Shankara's is primarily soteriological.",
      "Maya is not simply the same as Plato's shadow world, and the causal explanations of ignorance differ.",
    ],
    caveat:
      "The comparison is suggestive, not genealogical. There is no evidence that Plato read Indian philosophy, and the traditions developed in different languages and institutional contexts.",
    relatedLessons: ["plato-allegory-cave", "advaita-vedanta", "dependent-origination"],
  },
  {
    slug: "confucius-aristotle-virtue",
    title: "Confucius and Aristotle on Virtue",
    left: { label: "Confucius", href: "/thinkers/philosophers/confucius" },
    right: { label: "Aristotle", href: "/thinkers/philosophers/aristotle" },
    summary:
      "Confucian and Aristotelian ethics both centre character, habituation, and practical judgment. Their accounts of the social context of virtue differ in instructive ways.",
    resonance: [
      "Both treat virtue as acquired through practice rather than innate perfection.",
      "Both emphasise the importance of relationships and social roles in ethical formation.",
      "Both distinguish the person of practical wisdom from the rule-follower.",
    ],
    difference: [
      "Confucian ethics is more explicitly relational and ritual-centred; Aristotle's ethics is embedded in a teleological account of human nature and the polis.",
      "Ren and eudaimonia are not equivalent concepts, and the traditions disagree about the ultimate good.",
      "Confucian self-cultivation includes family and ancestor reverence in ways that have no exact Aristotelian analogue.",
    ],
    caveat:
      "The comparison should not flatten the differences between Chinese and Greek conceptions of the person, community, and cosmos.",
    relatedLessons: ["confucian-ethics", "aristotle-virtue", "what-is-philosophy"],
  },
  {
    slug: "hume-buddhism-self",
    title: "Hume and Buddhism on the Self",
    left: { label: "David Hume", href: "/thinkers/philosophers/hume" },
    right: { label: "Buddhist Anatta", href: "/thinkers/concepts/anatta" },
    summary:
      "Hume's bundle theory and the Buddhist teaching of non-self both reject a permanent, simple self. Their reasons and consequences are different, but the comparison is philosophically productive.",
    resonance: [
      "Both analyse the self as a collection of changing perceptions or processes rather than a substance.",
      "Both question the reliability of the intuition of a unified owner of experience.",
      "Both use introspection as a starting point for sceptical conclusions.",
    ],
    difference: [
      "Hume's account is naturalistic and sceptical; Buddhist anatta is embedded in a soteriological framework of karma, rebirth, and liberation.",
      "Hume does not offer a path of practice; Buddhism does.",
      "Buddhist traditions disagree among themselves about the status of persons and the nature of consciousness.",
    ],
    caveat:
      "Hume was not a Buddhist, and the comparison should not imply direct influence. The resemblance is a useful philosophical juxtaposition, not a historical claim.",
    relatedLessons: ["buddhist-anatta", "ship-of-theseus", "problem-of-other-minds"],
  },
];
