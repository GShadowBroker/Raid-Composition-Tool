const specList = [
  {
    name: "Combat Rogue",
    role: "dps",
    buffs: [],
    debuffs: [
      { name: "Wound Poison", type: "Healing", tooltip: "item=43235" },
      { name: "Mind-numbing Poison", type: "Cast Speed", tooltip: "item=5237" },

      { name: "Expose Armor", type: "Armor(Major)", tooltip: "spell=8647" },
      {
        name: "Savage Combat",
        type: "Physical Vulnerability",
        tooltip: "spell=58413",
      },
    ],
  },
  {
    name: "Assassination Rogue",
    role: "dps",
    buffs: [],
    debuffs: [
      { name: "Wound Poison", type: "Healing", tooltip: "item=43235" },
      { name: "Mind-numbing Poison", type: "Cast Speed", tooltip: "item=5237" },
      { name: "Expose Armor", type: "Armor(Major)", tooltip: "spell=8647" },
      {
        name: "Master Poisoner",
        type: "Critical Strike",
        tooltip: "spell=58410",
      },
    ],
  },
  {
    name: "Elemental Shaman",
    role: "dps",
    buffs: [
      {
        name: "Strength of Earth Totem",
        type: "Agility and Strength",
        tooltip: "spell=58643",
      },
      { name: "Bloodlust/Heroism", type: "Heroism", tooltip: "spell=2825" },
      { name: "Elemental Oath", type: "Spell Crit", tooltip: "spell=51470" },
      {
        name: "Wrath of Air Totem",
        type: "Spell Haste",
        tooltip: "spell=3738",
      },
      {
        name: "Totem of Wrath",
        type: "Spellpower",
        tooltip: "spell=57722",
      },
      {
        name: "Flametongue Totem",
        type: "Spellpower",
        tooltip: "spell=58656",
      },
    ],
    debuffs: [
      {
        name: "Totem of Wrath",
        type: "Critical Strike",
        tooltip: "spell=57722",
      },
    ],
  },
  {
    name: "Restoration Shaman",
    role: "healer",
    buffs: [
      {
        name: "Strength of Earth Totem",
        type: "Agility and Strength",
        tooltip: "spell=58643",
      },
      { name: "Bloodlust/Heroism", type: "Heroism", tooltip: "spell=2825" },
      {
        name: "Wrath of Air Totem",
        type: "Spell Haste",
        tooltip: "spell=3738",
      },
      {
        name: "Flametongue Totem",
        type: "Spellpower",
        tooltip: "spell=58656",
      },
      {
        name: "Ancestral Healing",
        type: "Armor %",
        tooltip: "spell=16240",
      },
      {
        name: "Mana Spring Totem",
        type: "Mana Per 5",
        tooltip: "spell=10497",
      },
      {
        name: "Restorative Totems",
        type: "Mana Per 5",
        tooltip: "spell=16206",
      },
    ],
    debuffs: [],
  },
  {
    name: "Enhancement Shaman",
    role: "dps",
    buffs: [
      {
        name: "Strength of Earth Totem",
        type: "Agility and Strength",
        tooltip: "spell=58643",
      },
      { name: "Bloodlust/Heroism", type: "Heroism", tooltip: "spell=2825" },
      {
        name: "Wrath of Air Totem",
        type: "Spell Haste",
        tooltip: "spell=3738",
      },
      {
        name: "Unleashed Rage",
        type: "Attack Power %",
        tooltip: "spell=30809",
      },
      {
        name: "Flametongue Totem",
        type: "Spellpower",
        tooltip: "spell=58656",
      },
      {
        name: "Improved Windfury Totem",
        type: "Melee Haste",
        tooltip: "spell=29193",
      },
    ],
    debuffs: [],
  },
  {
    name: "Fire Mage",
    role: "dps",
    buffs: [
      { name: "Arcane Intellect", type: "Intellect", tooltip: "spell=42995" },
    ],
    debuffs: [
      {
        name: "Improved Scorch",
        type: "Spell Crit",
        tooltip: "spell=12873",
      },
    ],
  },
  {
    name: "Arcane Mage",
    role: "dps",
    buffs: [
      { name: "Arcane Intellect", type: "Intellect", tooltip: "spell=42995" },
      { name: "Arcane Empowerment", type: "Damage %", tooltip: "spell=31583" },
    ],
    debuffs: [
      {
        name: "Slow",
        type: "Cast Speed",
        tooltip: "spell=31589",
      },
    ],
  },
  {
    name: "Frost Mage",
    role: "dps",
    buffs: [
      { name: "Arcane Intellect", type: "Intellect", tooltip: "spell=42995" },
      {
        name: "Enduring Winter",
        type: "Replenishment",
        tooltip: "spell=44561",
      },
    ],
    debuffs: [
      { name: "Winter's Chill", type: "Spell Crit", tooltip: "spell=28593" },
    ],
  },
  {
    name: "Retribution Paladin",
    role: "dps",
    buffs: [
      {
        name: "Blessing of Might",
        type: "Attack Power",
        tooltip: "spell=48932",
      },
      {
        name: "Improved Blessing of Might",
        type: "Attack Power",
        tooltip: "spell=20045",
      },
      {
        name: "Blessing of Wisdom",
        type: "Mana Per 5",
        tooltip: "spell=25290",
      },
      {
        name: "Blessing of Kings",
        type: "Stat %",
        tooltip: "spell=20217",
      },
      {
        name: "Sanctified Retribution",
        type: "Damage %",
        tooltip: "spell=31869",
      },
      {
        name: "Swift Retribution",
        type: "Haste %",
        tooltip: "spell=53648",
      },
      {
        name: "Judgements of the Wise",
        type: "Replenishment",
        tooltip: "spell=31878",
      },
    ],
    debuffs: [
      {
        name: "Heart of the Crusader",
        type: "Critical Strike",
        tooltip: "spell=20337",
      },
      {
        name: "Judgement of Light",
        type: "Health Restore",
        tooltip: "spell=20271",
      },
      {
        name: "Judgement of Wisdom",
        type: "Mana Restore",
        tooltip: "spell=53408",
      },
    ],
  },
  {
    name: "Protection Paladin",
    role: "tank",
    buffs: [
      {
        name: "Blessing of Might",
        type: "Attack Power",
        tooltip: "spell=48932",
      },
      {
        name: "Blessing of Wisdom",
        type: "Mana Per 5",
        tooltip: "spell=25290",
      },
      {
        name: "Blessing of Kings",
        type: "Stat %",
        tooltip: "spell=20217",
      },
      {
        name: "Blessing of Sanctuary",
        type: "Stat %",
        tooltip: "spell=20911",
      },
      {
        name: "Blessing of Sanctuary",
        type: "Damage Reduction %",
        tooltip: "spell=20911",
      },
      {
        name: "Improved Devotion Aura",
        type: "Healing Received %",
        tooltip: "spell=20911",
      },
    ],
    debuffs: [
      {
        name: "Heart of the Crusader",
        type: "Critical Strike",
        tooltip: "spell=20337",
      },
      {
        name: "Judgement of Light",
        type: "Health Restore",
        tooltip: "spell=20271",
      },
      {
        name: "Judgement of Wisdom",
        type: "Mana Restore",
        tooltip: "spell=53408",
      },
      {
        name: "Judgements of the Just",
        type: "Melee Attack Speed",
        tooltip: "spell=53696",
      },
    ],
  },
  {
    name: "Holy Paladin",
    role: "healer",
    buffs: [
      {
        name: "Blessing of Might",
        type: "Attack Power",
        tooltip: "spell=48932",
      },
      {
        name: "Blessing of Wisdom",
        type: "Mana Per 5",
        tooltip: "spell=25290",
      },
      {
        name: "Improved Blessing of Wisdom",
        type: "Mana Per 5",
        tooltip: "spell=20245",
      },
      {
        name: "Blessing of Kings",
        type: "Stat %",
        tooltip: "spell=20217",
      },
    ],
    debuffs: [
      {
        name: "Judgement of Light",
        type: "Health Restore",
        tooltip: "spell=20271",
      },
      {
        name: "Judgement of Wisdom",
        type: "Mana Restore",
        tooltip: "spell=53408",
      },
    ],
  },
  {
    name: "Disciple Priest",
    role: "healer",
    buffs: [
      {
        name: "Inspiration",
        type: "Armor %",
        tooltip: "spell=15363",
      },
      {
        name: "Renewed Hope",
        type: "Damage Reduction %",
        tooltip: "spell=57472",
      },
      {
        name: "Divine Spirit",
        type: "Spirit",
        tooltip: "spell=48073",
      },
      {
        name: "Power Word: Fortitude",
        type: "Stamina",
        tooltip: "spell=48161",
      },
      {
        name: "Improved Power Word: Fortitude",
        type: "Stamina",
        tooltip: "spell=14767",
      },
    ],
    debuffs: [],
  },
  {
    name: "Holy Priest",
    role: "healer",
    buffs: [
      {
        name: "Inspiration",
        type: "Armor %",
        tooltip: "spell=15363",
      },
      {
        name: "Divine Spirit",
        type: "Spirit",
        tooltip: "spell=48073",
      },
      {
        name: "Power Word: Fortitude",
        type: "Stamina",
        tooltip: "spell=48161",
      },
      {
        name: "Improved Power Word: Fortitude",
        type: "Stamina",
        tooltip: "spell=14767",
      },
    ],
    debuffs: [],
  },
  {
    name: "Shadow Priest",
    role: "dps",
    buffs: [
      {
        name: "Divine Spirit",
        type: "Spirit",
        tooltip: "spell=48073",
      },
      {
        name: "Power Word: Fortitude",
        type: "Stamina",
        tooltip: "spell=48161",
      },
      {
        name: "Improved Power Word: Fortitude",
        type: "Stamina",
        tooltip: "spell=14767",
      },
      {
        name: "Vampiric Touch",
        type: "Replenishment",
        tooltip: "spell=48160",
      },
    ],
    debuffs: [
      {
        name: "Misery",
        type: "Spell Hit",
        tooltip: "spell=33193",
      },
    ],
  },
  {
    name: "Demonology Warlock",
    role: "dps",
    buffs: [
      {
        name: "Demonic Pact",
        type: "Spellpower",
        tooltip: "spell=47240",
      },
    ],
    debuffs: [
      {
        name: "Curse of Weakness",
        type: "Armor(Minor)",
        tooltip: "spell=50511",
      },
      {
        name: "Curse of Weakness",
        type: "Attack Power",
        tooltip: "spell=50511",
      },
      {
        name: "Curse of Tongues",
        type: "Cast Speed",
        tooltip: "spell=11719",
      },
      {
        name: "Improved Shadow Bolt",
        type: "Spell Crit",
        tooltip: "spell=17803",
      },
      {
        name: "Curse of the Elements",
        type: "Spell Damage",
        tooltip: "spell=47865",
      },
    ],
  },
  {
    name: "Affliction Warlock",
    role: "dps",
    buffs: [
      {
        name: "Fel Intelligence",
        type: "Intellect",
        tooltip: "spell=57567",
      },
      {
        name: "Fel Intelligence",
        type: "Spirit",
        tooltip: "spell=57567",
      },
    ],
    debuffs: [
      {
        name: "Curse of Weakness",
        type: "Armor(Minor)",
        tooltip: "spell=50511",
      },
      {
        name: "Curse of Weakness",
        type: "Attack Power",
        tooltip: "spell=50511",
      },
      {
        name: "Improved Curse of Weakness",
        type: "Attack Power",
        tooltip: "spell=50511",
      },
      {
        name: "Curse of Tongues",
        type: "Cast Speed",
        tooltip: "spell=11719",
      },
      {
        name: "Improved Shadow Bolt",
        type: "Spell Crit",
        tooltip: "spell=17803",
      },
      {
        name: "Curse of the Elements",
        type: "Spell Damage",
        tooltip: "spell=47865",
      },
    ],
  },
  {
    name: "Destruction Warlock",
    role: "dps",
    buffs: [
      {
        name: "Improved Imp",
        type: "Health",
        tooltip: "spell=18696",
      },
      {
        name: "Improved Soul Leech",
        type: "Replenishment",
        tooltip: "spell=54118",
      },
    ],
    debuffs: [
      {
        name: "Curse of Weakness",
        type: "Armor(Minor)",
        tooltip: "spell=50511",
      },
      {
        name: "Curse of Weakness",
        type: "Attack Power",
        tooltip: "spell=50511",
      },
      {
        name: "Curse of Tongues",
        type: "Cast Speed",
        tooltip: "spell=11719",
      },
      {
        name: "Curse of the Elements",
        type: "Spell Damage",
        tooltip: "spell=47865",
      },
    ],
  },
  {
    name: "Fury Warrior",
    role: "dps",
    buffs: [
      {
        name: "Battle Shout",
        type: "Attack Power",
        tooltip: "spell=47436",
      },
      {
        name: "Commanding Presence",
        type: "Attack Power",
        tooltip: "spell=12861",
      },
      {
        name: "Commanding Presence",
        type: "Health",
        tooltip: "spell=12861",
      },
      {
        name: "Commanding Shout",
        type: "Health",
        tooltip: "spell=47440",
      },
      {
        name: "Rampage",
        type: "Melee Crit",
        tooltip: "spell=29801",
      },
    ],
    debuffs: [
      {
        name: "Demoralizing Shout",
        type: "Attack Power",
        tooltip: "spell=47437",
      },
      {
        name: "Improved Demoralizing Shout",
        type: "Attack Power",
        tooltip: "spell=12879",
      },
      {
        name: "Furious Attacks",
        type: "Healing",
        tooltip: "spell=46911",
      },
      {
        name: "Thunder Clap",
        type: "Melee Attack Speed",
        tooltip: "spell=47502",
      },
    ],
  },
  {
    name: "Arms Warrior",
    role: "dps",
    buffs: [
      {
        name: "Battle Shout",
        type: "Attack Power",
        tooltip: "spell=47436",
      },
      {
        name: "Commanding Shout",
        type: "Health",
        tooltip: "spell=47440",
      },
    ],
    debuffs: [
      {
        name: "Demoralizing Shout",
        type: "Attack Power",
        tooltip: "spell=47437",
      },
      {
        name: "Improved Demoralizing Shout",
        type: "Attack Power",
        tooltip: "spell=12879",
      },
      {
        name: "Thunder Clap",
        type: "Melee Attack Speed",
        tooltip: "spell=47502",
      },
      {
        name: "Trauma",
        type: "Bleed Damage",
        tooltip: "spell=46855",
      },
      {
        name: "Mortal Strike",
        type: "Healing",
        tooltip: "spell=47486",
      },
      {
        name: "Blood Frenzy",
        type: "Physical Vulnerability",
        tooltip: "spell=29859",
      },
    ],
  },
  {
    name: "Protection Warrior",
    role: "tank",
    buffs: [
      {
        name: "Battle Shout",
        type: "Attack Power",
        tooltip: "spell=47436",
      },
      {
        name: "Commanding Shout",
        type: "Health",
        tooltip: "spell=47440",
      },
      {
        name: "Vigilance",
        type: "Damage Reduction %",
        tooltip: "spell=50720",
      },
    ],
    debuffs: [
      {
        name: "Demoralizing Shout",
        type: "Attack Power",
        tooltip: "spell=47437",
      },
      {
        name: "Improved Demoralizing Shout",
        type: "Attack Power",
        tooltip: "spell=12879",
      },
      {
        name: "Thunder Clap",
        type: "Melee Attack Speed",
        tooltip: "spell=47502",
      },
      {
        name: "Improved Thunder Clap",
        type: "Melee Attack Speed",
        tooltip: "spell=12666",
      },
      {
        name: "Sunder Armor",
        type: "Armor(Major)",
        tooltip: "spell=7386",
      },
    ],
  },
  {
    name: "Marksmanship Hunter",
    role: "dps",
    buffs: [
      {
        name: "Trueshot Aura",
        type: "Attack Power %",
        tooltip: "spell=19506",
      },
    ],
    debuffs: [
      {
        name: "Sting",
        type: "Armor(Minor)",
        tooltip: "spell=56631",
      },
      {
        name: "Aimed Shot",
        type: "Healing",
        tooltip: "spell=49050",
      },
      {
        name: "Scorpid Sting",
        type: "Melee Hit Reduction",
        tooltip: "spell=3043",
      },
    ],
  },
  {
    name: "Survival Hunter",
    role: "dps",
    buffs: [
      {
        name: "Hunting Party",
        type: "Replenishment",
        tooltip: "spell=53292",
      },
    ],
    debuffs: [
      {
        name: "Sting",
        type: "Armor(Minor)",
        tooltip: "spell=56631",
      },
      {
        name: "Aimed Shot",
        type: "Healing",
        tooltip: "spell=49050",
      },
      {
        name: "Scorpid Sting",
        type: "Melee Hit Reduction",
        tooltip: "spell=3043",
      },
    ],
  },
  {
    name: "Beast Mastery Hunter",
    role: "dps",
    buffs: [
      {
        name: "Ferocious Inspiration",
        type: "Damage %",
        tooltip: "spell=34460",
      },
    ],
    debuffs: [
      {
        name: "Sting",
        type: "Armor(Minor)",
        tooltip: "spell=56631",
      },
      {
        name: "Aimed Shot",
        type: "Healing",
        tooltip: "spell=49050",
      },
      {
        name: "Scorpid Sting",
        type: "Melee Hit Reduction",
        tooltip: "spell=3043",
      },
      {
        name: "Acid Spit",
        type: "Armor(Major)",
        tooltip: "spell=55754",
      },
      {
        name: "Stampede",
        type: "Bleed Damage",
        tooltip: "spell=57393",
      },
      {
        name: "Lava Breath",
        type: "Cast Speed",
        tooltip: "spell=58611",
      },
    ],
  },
  {
    name: "Blood Death Knight",
    role: "dps",
    buffs: [
      {
        name: "Horn of Winter",
        type: "Agility and Strength",
        tooltip: "spell=57623",
      },
      {
        name: "Abomination's Might",
        type: "Attack Power %",
        tooltip: "spell=53138",
      },
    ],
    debuffs: [],
  },
  {
    name: "Unholy Death Knight",
    role: "dps",
    buffs: [
      {
        name: "Horn of Winter",
        type: "Agility and Strength",
        tooltip: "spell=57623",
      },
    ],
    debuffs: [
      {
        name: "Ebon Plaguebringer",
        type: "Spell Damage",
        tooltip: "spell=51161",
      },
    ],
  },
  {
    name: "Frost Death Knight",
    role: "dps",
    buffs: [
      {
        name: "Horn of Winter",
        type: "Agility and Strength",
        tooltip: "spell=57623",
      },
      {
        name: "Icy Talons",
        type: "Melee Haste",
        tooltip: "spell=50887",
      },
      {
        name: "Improved Icy Talons",
        type: "Melee Haste",
        tooltip: "spell=55610",
      },
      {
        name: "Icy Touch",
        type: "Melee Haste",
        tooltip: "spell=49904",
      },
      {
        name: "Improved Icy Touch",
        type: "Melee Haste",
        tooltip: "spell=51456",
      },
    ],
    debuffs: [],
  },
  {
    name: "Restoration Druid",
    role: "healer",
    buffs: [
      {
        name: "Tree of Life",
        type: "Healing Received %",
        tooltip: "spell=33891",
      },
      {
        name: "Mark of the Wild",
        type: "Stat Add",
        tooltip: "spell=48469",
      },
      {
        name: "Improved Mark of the Wild",
        type: "Stat Add",
        tooltip: "spell=17051",
      },
    ],
    debuffs: [],
  },
  {
    name: "Feral Druid",
    role: "dps/tank",
    buffs: [
      {
        name: "Mark of the Wild",
        type: "Stat Add",
        tooltip: "spell=48469",
      },
      {
        name: "Improved Mark of the Wild",
        type: "Stat Add",
        tooltip: "spell=17051",
      },
      {
        name: "Leader of the Pack",
        type: "Melee Crit",
        tooltip: "spell=17007",
      },
    ],
    debuffs: [
      {
        name: "Faerie Fire",
        type: "Armor(Minor)",
        tooltip: "spell=770",
      },
      {
        name: "Demoralizing Roar",
        type: "Attack Power",
        tooltip: "spell=48560",
      },
      {
        name: "Feral Aggression",
        type: "Attack Power",
        tooltip: "spell=16862",
      },
      {
        name: "Mangle",
        type: "Bleed Damage",
        tooltip: "spell=48564",
      },
      {
        name: "Infected Wounds",
        type: "Melee Attack Speed",
        tooltip: "spell=48485",
      },
    ],
  },
  {
    name: "Balance Druid",
    role: "dps",
    buffs: [
      {
        name: "Mark of the Wild",
        type: "Stat Add",
        tooltip: "spell=48469",
      },
      {
        name: "Improved Mark of the Wild",
        type: "Stat Add",
        tooltip: "spell=17051",
      },
      {
        name: "Improved Moonkin Form",
        type: "Haste %",
        tooltip: "spell=48396",
      },
      {
        name: "Moonkin Aura",
        type: "Spell Crit",
        tooltip: "spell=24907",
      },
    ],
    debuffs: [
      {
        name: "Insect Swarm",
        type: "Melee Hit Reduction",
        tooltip: "spell=48468",
      },
      {
        name: "Earth and Moon",
        type: "Spell Damage",
        tooltip: "spell=48511",
      },
      {
        name: "Improved Faerie Fire",
        type: "Spell Hit",
        tooltip: "spell=33602",
      },
    ],
  },
];

export default specList;
