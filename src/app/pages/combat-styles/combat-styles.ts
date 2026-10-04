import { Component } from '@angular/core';
import { SecondaryCharacterCard } from '../../components/secondary-character-card/secondary-character-card';
import { CombatStyleModel } from '../../interfaces/combat-style-model';

@Component({
  selector: 'app-combat-styles',
  imports: [SecondaryCharacterCard],
  templateUrl: './combat-styles.html',
  styleUrl: './combat-styles.css',
})
export class CombatStyles {
  combatStylesList = [
    {
      id: 1,
      name: 'Sun Breathing',
      description:
        'Breathing Style only known and taught by the Kamado Family, later revealed to be the first Breathing Style',
      img: 'https://www.demonslayer-api.com/api/v1/combat-styles/images/sun-breathing.webp',
      combat_style_character: [
        {
          id: 1,
          name: 'Tanjiro Kamado',
          description:
            'Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.',
        },
        {
          id: 45,
          name: 'Yoriichi',
          description:
            'He is a Demon Slayer who lived nearly 500 years ago during the Sengoku era. He was the most powerful Demon Slayer to have ever existed.',
        },
      ],
    },
    {
      id: 2,
      name: 'Water Breathing',
      description:
        'Water Breathing is one of the five main Breathing Styles directly derived from Sun Breathing.',
      img: 'https://www.demonslayer-api.com/api/v1/combat-styles/images/water-breathing.webp',
      combat_style_character: [
        {
          id: 1,
          name: 'Tanjiro Kamado',
          description:
            'Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.',
        },
        {
          id: 3,
          name: 'Giyu Tomioka',
          description:
            'He is a Demon Slayer of the Demon Slayer Corps and the current Water Hashira. He has a reserved personality and a very strong sense of justice.',
        },
        {
          id: 4,
          name: 'Sakonji Urokodaki',
          description:
            'Sakonji Urokodaki is a retired member of the Demon Slayer Corps, having held the position of the previous Water Hashira. He is the main cultivator of the Water Breathing style, having trained Makomo, Sabito, Giyu Tomioka, and Tanjiro Kamado.',
        },
        {
          id: 5,
          name: 'Sabito',
          description:
            'Sabito was a former apprentice of Sakonji Urokodaki. He appeared to assist Tanjiro Kamado in his preparations for the Final Selection exam.',
        },
        {
          id: 6,
          name: 'Makomo',
          description:
            'Makomo and Sabito were both orphaned from their respective families and adopted by Sakonji, who trained them both and permitted them to attend the Demon Slayer Corps´Final Selection.',
        },
        {
          id: 11,
          name: 'Aoi Kanzaki',
          description:
            'Aoi Kanzaki is a Demon Slayer of the Demon Slayer Corps. However, she works as a helper at the Butterfly Mansion, rather than taking to the front lines and fighting demons.',
        },
        {
          id: 21,
          name: 'Murata',
          description:
            'Not much is known about Murata, however, he does not like it when a hunter of lower rank chastises him. He is somewhat timid, however he does seem braver than most.',
        },
      ],
    },
    {
      id: 3,
      name: 'Combustible Blood',
      description:
        'Nezuko´s Blood Demon Art allows her to combust her blood into pink-colored flames at will. Her flames have a special property which makes them exclusively harmful to demons.',
      img: 'https://www.demonslayer-api.com/api/v1/combat-styles/images/combustible-blood.webp',
      combat_style_character: [
        {
          id: 2,
          name: 'Nezuko Kamado',
          description:
            'She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.',
        },
      ],
    },
    {
      id: 4,
      name: 'Thunder Breathing',
      description:
        'Thunder Breathing is a Breathing Style that mimics lightning, specifically swift strikes and movements akin to lightning ripping through the sky, and replicates it with the user´s movements, techniques and abilities.',
      img: 'https://www.demonslayer-api.com/api/v1/combat-styles/images/thunder-breathing.webp',
      combat_style_character: [
        {
          id: 9,
          name: 'Zenitsu Agatsuma',
          description:
            'Zenitsu Agatsuma is one of the main characters of Demon Slayer and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps.',
        },
      ],
    },
    {
      id: 5,
      name: 'Flesh Manipulation',
      description:
        'Flesh Manipulation is a supernatural ability possessed by demons that allow them to alter and control their own flesh and body.',
      img: '',
      combat_style_character: [
        {
          id: 7,
          name: 'Hand Demon',
          description:
            'The Hand Demon was the primary antagonist of the Final Selection Arc of Demon Slayer. He was a notorious demon who killed thirteen of Sakonji Urokodaki´s apprentices',
        },
      ],
    },
    {
      id: 6,
      name: 'Dual Wielding',
      description:
        ' Genya utilizes both a double-barreled shotgun with a Nichirin blade. He is shown to excel in blending both long-ranged and short-ranged combat',
      img: '',
      combat_style_character: [
        {
          id: 8,
          name: 'Genya Shinazugawa',
          description:
            'He is the younger brother of the Wind Hashira and as one of the five that survived Final Selection, Genya possesses a relatively strong foundation as a Demon Slayer even without utilizing a Breathing Style.',
        },
      ],
    },
    {
      id: 7,
      name: 'Beast Breathing',
      description:
        ' Beast Breathing is a Breathing Style that mimics beasts/wild animals, specifically their unpredictable, ferocious and wild nature, including movements, attacks and senses, and replicates it with the user´s movements, techniques and abilities.',
      img: 'https://www.demonslayer-api.com/api/v1/combat-styles/images/beast-breathing.webp',
      combat_style_character: [
        {
          id: 10,
          name: 'Inosuke Hashibira',
          description:
            'Inosuke is short-tempered, confrontational, abrasive and proud. He always likes to think he is the strongest fighter in a situation, constantly challenging most people he comes across and wanting others to respect and praise him for his skill.',
        },
      ],
    },
    {
      id: 8,
      name: 'Flower Breathing',
      description:
        'Flower Breathing is a Breathing Style that mimics both perennial flowers and fruit blossoms and replicates them with the user´s movements, techniques, and abilities.',
      img: '',
      combat_style_character: [
        {
          id: 12,
          name: 'Kanao Tsuyuri',
          description:
            'Kanao Tsuyuri is the adopted sister of Shinobu and Kanae Kocho.  She became unable to make decisions by herself and she has a coin to flip and decide which path to follow when she doesn´t know what to do.',
        },
      ],
    },
    {
      id: 9,
      name: 'Swamp Domain',
      description:
        'The Swamp Demon was able to conjure a pocket swamp dimension in which he can navigate freely.',
      img: '',
      combat_style_character: [
        {
          id: 13,
          name: 'Swamp Demon',
          description:
            'He is the main antagonist of the Kidnapper´s Bog Arc. He was a demon who went through a rash of kidnappings during the first mission of Tanjiro Kamado for the Demon Slayer Corps.',
        },
      ],
    },
    {
      id: 10,
      name: 'Biokinesis',
      description:
        'Muzan´s Blood Demon Art grants him powerful biokinetic abilities, most prominently the ability to manipulate his body at will and shapeshift instantly.',
      img: 'https://www.demonslayer-api.com/api/v1/combat-styles/images/biokinesis.webp',
      combat_style_character: [
        {
          id: 14,
          name: 'Muzan Kibutsuji',
          description:
            'Muzan Kibutsuji is the main antagonist of Demon Slayer. He is the Demon King, the progenitor of all other demons in existence, and the leader of the Twelve Kizuki, an organization made up of the twelve strongest demons under his direct command.',
        },
      ],
    },
  ];

  getCombatStyleList(): CombatStyleModel[] {
    return this.combatStylesList.map((element) => this.getCombatStyleModel(element));
  }

  getCombatStyleModel(data: any): CombatStyleModel {
    return {
      id: data.id,
      description: data.description,
      image: data.img,
      combat_style_character: data.combat_style_character,
    };
  }
}
