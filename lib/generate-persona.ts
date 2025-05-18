// This is a simplified persona generator that creates fictional alternate identities
// In a real application, you might want to use an AI model for more creative results

export function generatePersona(
  baseName: string,
  traits: string,
  universe: string,
): {
  name: string
  description: string
  backstory: string
} {
  // Extract first name if full name is provided
  const firstName = baseName.split(" ")[0]

  // Generate universe-specific name variations
  let name = ""
  let description = ""
  let backstory = ""

  switch (universe) {
    case "Sci-Fi":
      name = generateSciFiName(firstName)
      description = generateSciFiDescription(firstName, traits)
      backstory = generateSciFiBackstory(firstName, traits)
      break
    case "Fantasy":
      name = generateFantasyName(firstName)
      description = generateFantasyDescription(firstName, traits)
      backstory = generateFantasyBackstory(firstName, traits)
      break
    case "Noir":
      name = generateNoirName(firstName)
      description = generateNoirDescription(firstName, traits)
      backstory = generateNoirBackstory(firstName, traits)
      break
    case "Anime":
      name = generateAnimeName(firstName)
      description = generateAnimeDescription(firstName, traits)
      backstory = generateAnimeBackstory(firstName, traits)
      break
    case "Prehistoric":
      name = generatePrehistoricName(firstName)
      description = generatePrehistoricDescription(firstName, traits)
      backstory = generatePrehistoricBackstory(firstName, traits)
      break
    default:
      name = firstName
      description = "An alternate version of you"
      backstory = "Your story is yet to be written."
  }

  return {
    name,
    description,
    backstory,
  }
}

// Sci-Fi Universe
function generateSciFiName(name: string): string {
  const prefixes = ["Neo", "Cyber", "Quantum", "Astro", "Vex"]
  const suffixes = ["tron", "nix", "nova", "byte", "flux"]

  if (Math.random() > 0.5) {
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]}-${name}`
  } else {
    return `${name} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`
  }
}

function generateSciFiDescription(name: string, traits: string): string {
  const roles = [
    "a brilliant quantum physicist",
    "a rogue AI programmer",
    "a starship captain",
    "a cybernetic engineer",
    "an interstellar diplomat",
  ]

  const role = roles[Math.floor(Math.random() * roles.length)]
  return `In this universe, you're ${role} navigating a world of advanced technology and interstellar politics.`
}

function generateSciFiBackstory(name: string, traits: string): string {
  return `In the year 2187, the boundaries between human consciousness and artificial intelligence have blurred. You've pioneered revolutionary neural interface technology that allows direct mind-to-machine communication. Your work has made you both celebrated and feared, as corporations and governments vie for control of your innovations. Recently, you've discovered a hidden signal in the quantum substrate that suggests we're not alone in the multiverse. Now you must navigate a web of conspiracy while protecting your discovery from those who would weaponize it.`
}

// Fantasy Universe
function generateFantasyName(name: string): string {
  const prefixes = ["Lord", "Lady", "Sir", "Magus", "Elder"]
  const suffixes = ["the Brave", "Stormborn", "Lightbringer", "of the Ancient Woods", "Dragonheart"]

  if (Math.random() > 0.5) {
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${name}`
  } else {
    return `${name} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`
  }
}

function generateFantasyDescription(name: string, traits: string): string {
  const roles = [
    "a powerful archmage",
    "a legendary warrior",
    "a cunning rogue",
    "a wise druid",
    "a royal heir to a mystical kingdom",
  ]

  const role = roles[Math.floor(Math.random() * roles.length)]
  return `In this realm of magic and wonder, you're ${role} with a destiny that's intertwined with ancient prophecies.`
}

function generateFantasyBackstory(name: string, traits: string): string {
  return `Born under the twin moons of Eldoria, you were marked from birth with the ancient sigil of the Arcane Guardians. Raised in the hidden valley of Mistwood by the elders of the Crystal Order, you mastered the elemental arts while other children learned simple games. When the Shadow Blight began consuming the outer kingdoms, the prophecy of the Seventh Seal pointed to you as the realm's salvation. Now, with your enchanted staff and loyal companions, you journey across treacherous lands to unite the fractured kingdoms against the coming darkness.`
}

// Noir Universe
function generateNoirName(name: string): string {
  const nicknames = ['"Slick"', '"Lucky"', '"Shadow"', '"Trouble"', '"Ace"']

  if (Math.random() > 0.5) {
    return `${name} ${nicknames[Math.floor(Math.random() * nicknames.length)]}`
  } else {
    return `${nicknames[Math.floor(Math.random() * nicknames.length)]} ${name}`
  }
}

function generateNoirDescription(name: string, traits: string): string {
  const roles = [
    "a hard-boiled detective",
    "a mysterious informant",
    "a skilled con artist",
    "a tenacious reporter",
    "a world-weary private eye",
  ]

  const role = roles[Math.floor(Math.random() * roles.length)]
  return `In this shadowy world of intrigue, you're ${role} navigating the dangerous streets of a city that never sleeps.`
}

function generateNoirBackstory(name: string, traits: string): string {
  return `The rain beats against the windows of your downtown office as you light another cigarette. Fifteen years on the force taught you one thing: in this city, everyone's got secrets. After that case went sideways and your partner took a bullet, you turned in your badge and opened your own agency. Now you work in the shadows, taking cases the police won't touch. Your latest client is a dame with trouble written all over her, but the stack of cash she left on your desk means you're already involved. Something about missing jewels, a corrupt politician, and a trail of bodies that keeps getting longer.`
}

// Anime Universe
function generateAnimeName(name: string): string {
  const honorifics = ["-kun", "-chan", "-sama", "-senpai", "-san"]
  const specialNames = ["Hikari", "Yami", "Kaze", "Hoshi", "Tsubasa"]

  if (Math.random() > 0.5) {
    return `${name}${honorifics[Math.floor(Math.random() * honorifics.length)]}`
  } else {
    return `${specialNames[Math.floor(Math.random() * specialNames.length)]} ${name}`
  }
}

function generateAnimeDescription(name: string, traits: string): string {
  const roles = [
    "a legendary swordmaster",
    "a magical girl with hidden powers",
    "a mecha pilot defending humanity",
    "a spirit detective solving supernatural cases",
    "an academy student with extraordinary abilities",
  ]

  const role = roles[Math.floor(Math.random() * roles.length)]
  return `In this vibrant and stylized world, you're ${role} on an epic journey of friendship and self-discovery.`
}

function generateAnimeBackstory(name: string, traits: string): string {
  return `You never expected to be chosen. It was just an ordinary day at school when the mysterious transfer student handed you an ancient amulet, claiming you were the reincarnation of a legendary hero. That night, the amulet glowed with an otherworldly light, awakening powers you never knew you had. Now you balance your school life with your secret identity as a guardian of the realms, fighting alongside your friends against the Dark Syndicate. With each battle, your powers grow stronger, but so does the connection to your past life—and the tragic fate that befell the previous hero.`
}

// Prehistoric Universe
function generatePrehistoricName(name: string): string {
  const prefixes = ["Grog", "Thag", "Krag", "Rok", "Zug"]
  const suffixes = ["the Hunter", "Stonefist", "Mammoth-Slayer", "Fire-Bringer", "Cave-Finder"]

  if (Math.random() > 0.5) {
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${name.substring(0, 3)}`
  } else {
    return `${name.substring(0, 3)}-${name.substring(0, 3)} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`
  }
}

function generatePrehistoricDescription(name: string, traits: string): string {
  const roles = [
    "a respected tribal leader",
    "a skilled hunter-gatherer",
    "a wise shaman with healing knowledge",
    "a brave explorer of uncharted territories",
    "an innovative toolmaker",
  ]

  const role = roles[Math.floor(Math.random() * roles.length)]
  return `In this primordial age of survival, you're ${role} guiding your clan through the dangers of a world ruled by nature's law.`
}

function generatePrehistoricBackstory(name: string, traits: string): string {
  return `When the great ice came and covered the hunting grounds, many tribes perished. But you led your people south, following the migration of the woolly beasts. Your discovery of the red flower (fire) made you revered among the clans, and your ability to read the stars guided your people to fertile valleys when others starved. The cave paintings you created tell stories that will last for generations, and your invention of new hunting tools has made your tribe the most successful in the region. Now, strange two-legs from beyond the great water have arrived with powerful magic, and you must decide whether to fight these invaders or learn their ways.`
}
