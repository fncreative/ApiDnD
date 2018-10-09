'use strict';

// mock object for the rooms:
// description
// connecting room(s)
// traps - true or false?
// encounter
//

const roomDescriptions = module.exports = {};

roomDescriptions.dungeonDescriptions = [
  {
    roomName: 'Entrance of the Tomb of Horrors',
    description: 'Bright, brilliant colors are to be seen everywhere, the stones and pigments undimmed by the passage of decades. The floor of the corridor is a colorful mosaic of stone, with a distinct winding path of red tiles about two feet wide snaking its way south down the corridor.  No stonework can be seen on the walls or the ceiling twenty feet above, for some cement or plaster has been smoothed over all of these surfaces and then illustrated. The scenes show fields with kine grazing, workers of various races and strange human-animal mixtures--pig human, ape-human, and dog-human--going about various tasks. Certain of the frescoes show rooms of some building--a library filled with many books and scrolls, the door of a torture chamber, and a wizard\'s work room. There are chairs, windows, boxes, bales, doors, chests, birds, bats, spiders, and all manner of things shown on the walls.',
    connectingRooms: ['Fresco of the Wizardly Work Room', 'The Arch of Mist', 'The Face of the Great Green Devil'],
    traps: false,
    encounter: false,
  },

  {
    roomName: 'Fresco of the Wizardly Work Room',
    description: 'The most outstanding feature in this location is actually outstanding! Two jackal-headed human figures are painted so as to appear to be holding a real bronze chest that protrudes from the wall',
    connectingRooms: ['The Arch of Mist', 'The Face of the Great Green Devil','Gargoyle Lair'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Arch of Mist',
    description: 'The stone archway before you is filled with a veil of thick vapors. The stones on either side of the base and the keystone protrude slightly from the stones around them. As you move to within touching distance, the left-hand base stone begins to glow yellow, the right hand base stone orange, and the keystone seven feet above blue.',
    connectingRooms: ['The Face of the Great Green Devil'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Face of the Great Green Devil',
    description: 'On the wall before you is a relief sculpture of a devil face formed of mosaic tiles. The face has a huge O of a mouth, inside of which the space is dead black',
    connectingRooms: ['Entrance of the Tomb of Horrors', 'The Archway of Mist'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Forsaken Prison',
    description: 'This miserable cubicle appears to have absolutely no means of egress. Three iron levers, each about one foot long, protrude from the south wall of the chamber.',
    connectingRooms: ['The Face of the Great Green Devil'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'Gargoyle Lair',
    description: 'What appeared to be a statue an instant ago comes to life before your eyes! The creature flaps its wings and stares at you.',
    connectingRooms: ['Fresco of the Wizardly Work Room'],
    traps: true,
    encounter: true,
  },
  {
    roomName: 'Complex of Secret Doors',
    description: 'The small room beyond the door is empty and appears to have no other exits.',
    connectingRooms: ['Fresco of the Wizardly Work Room', 'Gargoyle Lair'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'Great Hall of Spheres',
    description: 'No stonework can be seen on the walls or the ceiling twenty feet above, for some cement or plaster has been smoothed over all of these surfaces and then illustrated. The scenes show fields with kine grazing, workers of various races and strange human-animal mixtures--pig human, ape-human, and dog-human--going about various tasks. Certain of the frescoes show rooms of some building. As you come close, three stones in the archway in front of you begin to glow. The left-hand base stone shines with an olive hue; the one on the right glows citron, and the keystone seven feet overhead gives off russet light',
    connectingRooms: ['Gargoyle Lair', 'Trapped False Doors'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Three-Armed Statue',
    description: 'This small room holds what appears to be a statue of a gargoyle, eight feet tall, with four arms. One of the arms is broken off and lies on the floor in front of the statue.',
    connectingRooms: ['Great Hall of Spheres'],
    traps: false,
    encounter: false,
  },
  {
    roomName: 'Trapped False Doors',
    description: '',
    connectingRooms: ['Great Hall of Spheres'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'Chamber of Three Chests',
    description: 'Three large chests are affixed to the floor of this room.',
    traps: true,
    encounter: true,
  },
  {
    roomName: 'Chapel of Evil',
    description: 'You see what is obviously some form of temple area. There are scenes of normal life painted on the walls, but the people have rotting flesh, skeletal hands, worms eating them, and so forth. Yet there are also depicted religious symbols of good alignment. There is a mosaic path leading between four rows of wooden pews that face the worship area. In front of the pews, a wooden railing divides the room. South of it is an altar in front of a tiered dais, on which sits a wooden chair.',
    connectingRooms: ['Great Hall of Spheres', 'Stone Gate'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'Stone Gate',
    description: 'The stone that forms this door in the eastern part of the chapel is 2 feet wide, and 4 feet high.',
    connectingRooms: ['Chapel of Evil', 'Corridor Protected by Fear Gas'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'Corridor Protected by Fear Gas',
    description: 'Stairs descend to the west. The corridor that extends past the bottom of the steps is slightly cloudy.',
    connectingRooms: ['Stone Gate'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'False Crypt',
    description: 'Beyond the door, a stairway leads down. The way is blocked by thick webbing that fills the area from steps to ceiling.',
    connectingRooms: ['Stone Gate'],
    traps: false,
    encounter: true,
  },
  {
    roomName: 'Magical Door',
    description: 'This door has been very well hidden.',
    connectingRooms: ['Laboratory and Mummy Preparation Room'],
    traps: false,
    encounter: false,
  },
  {
    roomName: 'Laboratory and Mummy Preparation Room',
    description: 'The walls of this room are lined with shelves. Old jars filled with dust and impotent ingredients of all sorts. There is a large desk and stool, two workbenches, and two mummy preparation tables.',
    connectingRooms: ['Magical Door'],
    traps: false,
    encounter: false,
  },
  {
    roomName: 'Huge Pit Filled with Spikes',
    description: 'A ten-foot-deep, empty pit completely fills the passageway and extends so far as to make jumping across it impossible for most creatures.',
    connectingRooms: [],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Agitated Chamber',
    description: 'The room appears to be filled with funerary offerings and furniture. There are four rotting sofas, a couple of throne-like chairs, and a jumble of stands, small tables, and vases and urns that are dented, chipped, and broken. Only the rather plain tapestries hanging on the east and west walls appear to have been spared a rough looting. Amid the general havoc are scattered several trunks and a larger number of coffers.',
    connectingRooms: ['Trapped False Doors'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Cavern of Gold and Silver Mists',
    description: 'A thick silver mist, shot through with delicate streamers of gold, partially blocks your view of the areas that lies ahead.',
    connectingRooms: [],
    traps: false,
    encounter: true,
  },
  {
    roomName: 'Pillared Throne Room',
    description: 'You look upon an enormous chamber colored in pastels. A forest of massive, many-hued columns support the ceiling',
    connectingRooms: ['Chamber of Hopelessness', 'The Wondrous Foyer'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'Small Room with a Door of Electric Blue',
    description: 'The door to this room shimmers as you get close to it.',
    connectingRooms: ['Pillared Throne Room'],
    traps: true,
    encounter: true,
  },
  {
    roomName: 'The Portal of Scintillating Violet',
    description: 'You see a bare chamber, with a small door on the north wall, and pairs of swords crossed behind shields hung upon the walls. There are three such sets on each of the walls to either hand, and two sets on the north wall, one flanking each side of the door.',
    connectingRoom: ['Pillared Throne Room'],
    traps: true,
    encounter: true,
  },
  {
    roomName: 'Chamber of Hopelessness',
    description: 'You who dared to violate my tomb now pay the price. Stay here and die slowly of starvation, and know that I, Acererak the Eternal, watch and scoff at your puny efforts and enjoy your death throes.',
    connectingRooms: [],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Wondrous Foyer',
    description: 'The walls of the area ahead are untarnished and gleaming copper panels set between rare woods inlaid with ivory. The ceiling is silver, formed so as to reflect and amplify light brought into the place. The chamber widens to the south, where a set of gently sloping steps leads upward. The six steps, from nearest to farthest, are made of onyx, pink marble, lapis, black marble, yellow serpentine, and malachite.',
    connectingRooms: ['Pillared Throne Room'],
    traps: false,
    encounter: false,
  },
  {
    roomName: 'The Valves of Mithral',
    description: 'The doors at the top of the stairs are 14 feet wides and 28 feet tall.',
    connectingRooms: ['The Wondrous Foyer', 'False Treasure Room'],
    traps: false,
    encounter: false,
  },
  {
    roomName: 'False Treasure Room',
    description: 'This imposing chamber has a silvered ceiling, just as the foyers has, so it is brightly illuminated by reflected light. The walls are ivory with gold inlaid. The floor is polished agate. In each corner stands a statue of black iron, easily nine feet tall. That to the northeast stands with a saw-toothed two-handed sword raised to strike; that to the northwest a huge, spike-ended mace; to the southeast the sculpture holds a wickedly spiked morning star, and the one in the southwest has a voulge. Near the center of the room is a large bronze urn filigreed in gold. A thin stream of smoke issues from a tiny vent in its brass stopper. On the southern wall stands a granite sarcophagus that appears to be damaged. Flanking the sarcophagus are two large iron chests.',
    connectingRooms: ['The Valves of Mithral'],
    traps: true,
    encounter: false,
  },
  {
    roomName: 'The Crypt of Acererak the Demilich',
    description: 'Beyond the door is a smallish rectangular chamber with a ceiling that extends twenty-five feet overhead. There is a small depression a few inches deep and about two feet square in the center of the floor.',
    connectingRooms: ['False Treasure Room'],
    traps: false,
    encounter: true,
  },
];