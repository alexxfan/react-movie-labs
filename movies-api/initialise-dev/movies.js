const movies = [
    {
        "adult": false,
        "backdrop_path": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
        "genre_ids": [
            28,
            14,
            878
        ],
        "id": 590706,
        "original_language": "en",
        "original_title": "Jiu Jitsu",
        "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
        "popularity": 2633.943,
        "poster_path": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
        "release_date": "2020-11-20",
        "title": "Jiu Jitsu",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 111
    },
    {
        "adult": false,
        "backdrop_path": "/vam9VHLZl8tqNwkp1zjEAxIOrkk.jpg",
        "genre_ids": [
            10751,
            14,
            10770
        ],
        "id": 671583,
        "original_language": "en",
        "original_title": "Upside-Down Magic",
        "overview": "Nory and her best friend Reina enter the Sage Academy for Magical Studies, where Nory’s unconventional powers land her in a class for those with wonky, or “upside-down,” magic. Undaunted, Nory sets out to prove that that upside-down magic can be just as powerful as right-side-up.",
        "popularity": 2362.99,
        "poster_path": "/xfYMQNApIIh8KhpNVtG1XRz0ZAp.jpg",
        "release_date": "2020-07-31",
        "title": "Upside-Down Magic",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 64
    },
    {
        "adult": false,
        "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "id": 577922,
        "original_language": "en",
        "original_title": "Tenet",
        "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "popularity": 1973.492,
        "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        "release_date": "2020-08-22",
        "title": "Tenet",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 2638
    },
    {
        "adult": false,
        "backdrop_path": "/ckfwfLkl0CkafTasoRw5FILhZAS.jpg",
        "genre_ids": [
            28,
            35,
            14
        ],
        "id": 602211,
        "original_language": "en",
        "original_title": "Fatman",
        "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
        "popularity": 1848.361,
        "poster_path": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
        "release_date": "2020-11-13",
        "title": "Fatman",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 118
    },
    {
        "adult": false,
        "backdrop_path": "/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg",
        "genre_ids": [
            37
        ],
        "id": 729648,
        "original_language": "en",
        "original_title": "The Dalton Gang",
        "overview": "When their brother Frank is killed by an outlaw, brothers Bob Dalton, Emmett Dalton and Gray Dalton join their local sheriff's department. When they are cheated by the law, they turn to crime, robbing trains and anything else they can steal from over the course of two years in the early 1890's. Trying to out do Jesse James, they attempt to rob two banks at once in October of 1892, and things get ugly",
        "popularity": 1441.44,
        "poster_path": "/6OeGqp18oZucUGziMIRNhLouZ75.jpg",
        "release_date": "2020-11-02",
        "title": "The Dalton Gang",
        "video": false,
        "vote_average": 4.3,
        "vote_count": 13
    },
    {
        "adult": false,
        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        "genre_ids": [
            80,
            53,
            18
        ],
        "id": 475557,
        "original_language": "en",
        "original_title": "Joker",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "popularity": 1340.942,
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "release_date": "2019-10-02",
        "title": "Joker",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 15818
    },
    {
        "adult": false,
        "backdrop_path": "/mZgbq4Zpxz7ozWXl4asj6vNdlIi.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 454433,
        "original_language": "en",
        "original_title": "Magic Camp",
        "overview": "Andy, at the urging of his former mentor and Magic Camp owner Roy Preston, returns to the camp of his youth hoping to reignite his career. Instead, he finds inspiration in his ragtag bunch of rookie magicians.",
        "popularity": 1307.25,
        "poster_path": "/awcPLFFYjufRXd2oAAP6ZIXF9vM.jpg",
        "release_date": "2020-08-14",
        "title": "Magic Camp",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 102
    },
    {
        "adult": false,
        "backdrop_path": "/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 524047,
        "original_language": "en",
        "original_title": "Greenland",
        "overview": "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
        "popularity": 1143.073,
        "poster_path": "/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg",
        "release_date": "2020-07-29",
        "title": "Greenland",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 853
    },
    {
        "adult": false,
        "backdrop_path": "/qAKvUu2FSaDlnqznY4VOp5PmjIF.jpg",
        "genre_ids": [
            28,
            12,
            18,
            14
        ],
        "id": 337401,
        "original_language": "en",
        "original_title": "Mulan",
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "popularity": 1104.142,
        "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "release_date": "2020-09-04",
        "title": "Mulan",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 3241
    },
    {
        "adult": false,
        "backdrop_path": "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 724989,
        "original_language": "en",
        "original_title": "Hard Kill",
        "overview": "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
        "popularity": 1067.409,
        "poster_path": "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
        "release_date": "2020-10-23",
        "title": "Hard Kill",
        "video": false,
        "vote_average": 5,
        "vote_count": 224
    },
    {
        "adult": false,
        "backdrop_path": "/5846jHODKbja38USbFcXgOnsfqb.jpg",
        "genre_ids": [
            10751,
            14,
            12
        ],
        "id": 654028,
        "original_language": "en",
        "original_title": "The Christmas Chronicles: Part Two",
        "overview": "Kate Pierce is reluctantly spending Christmas with her mom’s new boyfriend and his son Jack. But when the North Pole and Christmas are threatened to be destroyed, Kate and Jack are unexpectedly pulled into a new adventure with Santa Claus.",
        "popularity": 1004.099,
        "poster_path": "/6sG0kbEvAi3RRLcGGU5h8l3qAPa.jpg",
        "release_date": "2020-11-18",
        "title": "The Christmas Chronicles: Part Two",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 201
    },
    {
        "adult": false,
        "backdrop_path": "/fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 682377,
        "original_language": "en",
        "original_title": "Chick Fight",
        "overview": "When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.",
        "popularity": 984.768,
        "poster_path": "/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg",
        "release_date": "2020-11-13",
        "title": "Chick Fight",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 48
    },
    {
        "adult": false,
        "backdrop_path": "/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
        "genre_ids": [
            28,
            27,
            53
        ],
        "id": 581392,
        "original_language": "ko",
        "original_title": "반도",
        "overview": "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
        "popularity": 973.861,
        "poster_path": "/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
        "release_date": "2020-07-15",
        "title": "Peninsula",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 867
    },
    {
        "adult": false,
        "backdrop_path": "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
        "genre_ids": [
            14,
            10751,
            12,
            35,
            27
        ],
        "id": 531219,
        "original_language": "en",
        "original_title": "Roald Dahl's The Witches",
        "overview": "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
        "popularity": 870.023,
        "poster_path": "/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg",
        "release_date": "2020-10-26",
        "title": "Roald Dahl's The Witches",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 869
    },
    {
        "adult": false,
        "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
        "genre_ids": [
            53,
            28,
            18,
            80
        ],
        "id": 671039,
        "original_language": "fr",
        "original_title": "Bronx",
        "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
        "popularity": 794.676,
        "poster_path": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
        "release_date": "2020-10-30",
        "title": "Rogue City",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 272
    },
    {
        "adult": false,
        "backdrop_path": "/iQxJuPqCGOO4Iy3uFbMWCIGHkwE.jpg",
        "genre_ids": [
            10752,
            28
        ],
        "id": 635780,
        "original_language": "en",
        "original_title": "Rogue Warfare: Death of a Nation",
        "overview": "After rescuing Daniel from the terrorist Black Mask Organization, the team uncovers plans for a deadly bomb set to detonate in 36 hours that threatens world order. With no time to recover, Daniel must throw his life back on the line as he and his elite team of soldiers race against time to find the bomb and defeat their enemy once and for all. Outnumbered and overmatched, each soldier must find their inner strength and skill to overcome insurmountable odds.",
        "popularity": 790.044,
        "poster_path": "/8GVpIEBqlRBvx28G0LfEX0U8D2k.jpg",
        "release_date": "2020-09-25",
        "title": "Rogue Warfare: Death of a Nation",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 10
    },
    {
        "adult": false,
        "backdrop_path": "/d1sVANghKKMZNvqjW0V6y1ejvV9.jpg",
        "genre_ids": [
            16,
            28,
            12,
            14,
            18
        ],
        "id": 635302,
        "original_language": "ja",
        "original_title": "劇場版「鬼滅の刃」無限列車編",
        "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "popularity": 738.31,
        "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        "release_date": "2020-10-16",
        "title": "Demon Slayer the Movie: Mugen Train",
        "video": false,
        "vote_average": 6,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
        "genre_ids": [
            16,
            14,
            12,
            35,
            10751
        ],
        "id": 400160,
        "original_language": "en",
        "original_title": "The SpongeBob Movie: Sponge on the Run",
        "overview": "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",
        "popularity": 716.962,
        "poster_path": "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
        "release_date": "2020-08-14",
        "title": "The SpongeBob Movie: Sponge on the Run",
        "video": false,
        "vote_average": 8,
        "vote_count": 1669
    },
    {
        "adult": false,
        "backdrop_path": "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
        "genre_ids": [
            28,
            80,
            18,
            53
        ],
        "id": 539885,
        "original_language": "en",
        "original_title": "Ava",
        "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
        "popularity": 663.458,
        "poster_path": "/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        "release_date": "2020-07-02",
        "title": "Ava",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 757
    },
    {
        "adult": false,
        "backdrop_path": "/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg",
        "genre_ids": [
            28,
            53,
            12,
            18
        ],
        "id": 741067,
        "original_language": "en",
        "original_title": "Welcome to Sudden Death",
        "overview": "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        "popularity": 624.502,
        "poster_path": "/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        "release_date": "2020-09-29",
        "title": "Welcome to Sudden Death",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 184
    },
    {
        "adult": false,
        "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
        "genre_ids": [
            80,
            18,
            36
        ],
        "id": 466420,
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
        "popularity": 1145.813,
        "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        "release_date": "2023-10-18",
        "title": "Killers of the Flower Moon",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 1476
    },
    {
        "adult": false,
        "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 897087,
        "original_language": "en",
        "original_title": "Freelance",
        "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
        "popularity": 1065.299,
        "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
        "release_date": "2023-01-05",
        "title": "Freelance",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 322
    },
    {
        "adult": false,
        "backdrop_path": "/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 1059.479,
        "poster_path": "/6UktQYe7ZCAh3sSXthSyKJliLMy.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 315
    },
    {
        "adult": false,
        "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
        "genre_ids": [
            16,
            10751,
            10402,
            14,
            35
        ],
        "id": 901362,
        "original_language": "en",
        "original_title": "Trolls Band Together",
        "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "popularity": 920.108,
        "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
        "release_date": "2023-10-12",
        "title": "Trolls Band Together",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 376
    },
    {
        "adult": false,
        "backdrop_path": "/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 1075794,
        "original_language": "en",
        "original_title": "Leo",
        "overview": "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
        "popularity": 780.064,
        "poster_path": "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
        "release_date": "2023-11-17",
        "title": "Leo",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 594
    },
    {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "popularity": 701.123,
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 5460
    },
    {
        "adult": false,
        "backdrop_path": "/tB59fpPnQITgnfxPfMf2gxASTeC.jpg",
        "genre_ids": [
            28,
            53,
            18
        ],
        "id": 656156,
        "original_language": "ko",
        "original_title": "보호자",
        "overview": "After 10 years of incarceration on behalf of his employer, all Su-hyuk wants is a normal life - one he hopes will include his former girlfriend, Min-seo, and their daughter, In-bi. But once you've penetrated the upper echelons of the underworld, normal can prove hard to come by. Sometime in the past decade, meanwhile, Su-hyuk's employer has adopted an air of legitimacy. These days, the old gang steal and murder in the name of urban development. And they want the reluctant Su-hyuk on board.",
        "popularity": 705.143,
        "poster_path": "/ePwZs1oOh4pg8UZP8DuVZZeIn89.jpg",
        "release_date": "2023-08-15",
        "title": "A Man of Reason",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 30
    },
    {
        "adult": false,
        "backdrop_path": "/AucuqDaUW4z1oT5XyL71qwRY2F6.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 983507,
        "original_language": "no",
        "original_title": "Meg, deg & Frank",
        "overview": "Christian - a millionaire heir, meets Sigrid - a young student, on a dating app. They hit it off quickly, but there's only one problem: Christian lives with Frank, a man who dresses up and constantly acts like a dog.",
        "popularity": 609.004,
        "poster_path": "/9DPG1gxLwV2oyFdHq3SnISsWbse.jpg",
        "release_date": "2022-06-03",
        "title": "Good Boy",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 107
    },
    {
        "adult": false,
        "backdrop_path": "/tLsc8SCFO0rMVgVyNm9XtfnyX84.jpg",
        "genre_ids": [
            18,
            9648,
            53,
            878
        ],
        "id": 726209,
        "original_language": "en",
        "original_title": "Leave the World Behind",
        "overview": "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices—and two strangers appear at their door.",
        "popularity": 779.281,
        "poster_path": "/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg",
        "release_date": "2023-11-22",
        "title": "Leave the World Behind",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 861
    },
    {
        "adult": false,
        "backdrop_path": "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
            28,
            12,
            18
        ],
        "id": 670292,
        "original_language": "en",
        "original_title": "The Creator",
        "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
        "popularity": 635.647,
        "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
        "release_date": "2023-09-27",
        "title": "The Creator",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1485
    },
    {
        "adult": false,
        "backdrop_path": "/sxmazOtNWi6IiZ1QqG0wkliHzgA.jpg",
        "genre_ids": [
            27,
            53,
            18
        ],
        "id": 762079,
        "original_language": "fr",
        "original_title": "Le Calendrier",
        "overview": "Eva, an ex-dancer, is now living in a wheelchair, unable to walk. When her friend Sophie gives her an old wooden antique advent calendar before Christmas, she realizes each window contains a surprise that triggers repercussions in real life: some of them good, but most of them bad... Now Eva will have to choose between getting rid of the calendar or walking again… even if it causes death around her.",
        "popularity": 558.398,
        "poster_path": "/psaYUHDotafhVNAE1pZN2GkRXJY.jpg",
        "release_date": "2021-12-01",
        "title": "The Advent Calendar",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 239
    },
    {
        "adult": false,
        "backdrop_path": "/rb3QQ2TQfJoCpCZlfXBlBbzYy1D.jpg",
        "genre_ids": [
            53,
            28
        ],
        "id": 844416,
        "original_language": "en",
        "original_title": "Rumble Through the Dark",
        "overview": "Set in the dark landscape of the Mississippi Delta, where a former bare-knuckle fighter must win one last fight to pay off his debts to the local mob boss and save his childhood home—the stakes nothing less than life or death.",
        "popularity": 608.637,
        "poster_path": "/19UbYIT9WEQS5qSD3BREDxVXk8g.jpg",
        "release_date": "2023-11-03",
        "title": "Rumble Through the Dark",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 23
    },
    {
        "adult": false,
        "backdrop_path": "/ixhr0YVs0Du0fPIYQSYYOIf3j0R.jpg",
        "genre_ids": [
            878,
            28
        ],
        "id": 854648,
        "original_language": "en",
        "original_title": "Robot Apocalypse",
        "overview": "An expert hacker is targeted by a sentient AI after she realizes the threat it poses, and she must try to stay off its radar long enough to stop it.",
        "popularity": 415.781,
        "poster_path": "/zpbgktIR7GkOS83PBAzLlzLSQ5W.jpg",
        "release_date": "2021-07-26",
        "title": "Robot Apocalypse",
        "video": false,
        "vote_average": 6,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/sERD1155J1cJyXug1QwlA0fa354.jpg",
        "genre_ids": [
            14
        ],
        "id": 995906,
        "original_language": "en",
        "original_title": "Galaxy Games",
        "overview": "A group of young adults are sent to a faraway planet to compete in the prestigious Sol Invictus games. When disaster strikes and the teams are stranded without equipment or communication, they must work together to survive long enough to be rescued.",
        "popularity": 538.419,
        "poster_path": "/8aoIMYZUu8DRrJFkDvz13rehSFL.jpg",
        "release_date": "2022-07-04",
        "title": "Galaxy Games",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 4
    },
    {
        "adult": false,
        "backdrop_path": "/uOvcyJ3XmUv4geypGvZBeZEFMO6.jpg",
        "genre_ids": [
            28,
            80,
            18
        ],
        "id": 945937,
        "original_language": "en",
        "original_title": "Fast Charlie",
        "overview": "When his aging mob boss is whacked, Charlie Swift, a loyal friend and hired gun, will stop at nothing to destroy the upcoming crew that took him out.",
        "popularity": 581.772,
        "poster_path": "/3y72ffwYRUPOj4yOQbiTaN897Tm.jpg",
        "release_date": "2023-12-08",
        "title": "Fast Charlie",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 34
    },
    {
        "adult": false,
        "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 589.379,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 4483
    },
    {
        "adult": false,
        "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
        "genre_ids": [
            27,
            9648
        ],
        "id": 507089,
        "original_language": "en",
        "original_title": "Five Nights at Freddy's",
        "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        "popularity": 576.778,
        "poster_path": "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
        "release_date": "2023-10-25",
        "title": "Five Nights at Freddy's",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2874
    },
    {
        "adult": false,
        "backdrop_path": "/jhpsTzbXEu5bkCPmBqxv7vUTjIT.jpg",
        "genre_ids": [
            14,
            12,
            878,
            28
        ],
        "id": 566810,
        "original_language": "en",
        "original_title": "Dragon Kingdom",
        "overview": "To save their Kingdom from an army of undead, a group of warriors must travel through the forbidden lands fighting the fearsome beasts that call The Dark Kingdom their home.",
        "popularity": 527.795,
        "poster_path": "/o7StI2iR8yY1N67meSkNcXfojyD.jpg",
        "release_date": "2018-11-26",
        "title": "The Dark Kingdom",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 41
    },
    {
        "adult": false,
        "backdrop_path": "/evxXVJtomJJbAXcDxF6wsCJzVDe.jpg",
        "genre_ids": [
            27
        ],
        "id": 1019836,
        "original_language": "en",
        "original_title": "Christmas Bloody Christmas",
        "overview": "It's Christmas Eve and Tori just wants to get drunk and party, but when a robotic Santa Claus at a nearby toy store goes haywire and begins a rampant killing spree through her small town, she's forced into a battle for survival.",
        "popularity": 475.22,
        "poster_path": "/97PaQ7r4H3y0x9RTXusfedmzf86.jpg",
        "release_date": "2022-10-05",
        "title": "Christmas Bloody Christmas",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 152
    },
    {
        "adult": false,
        "backdrop_path": "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
            28,
            12,
            53
        ],
        "id": 299054,
        "original_language": "en",
        "original_title": "Expend4bles",
        "overview": "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
        "popularity": 485.407,
        "poster_path": "/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Expend4bles",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 899
    },
    {
        "adult": false,
        "backdrop_path": "/h3X1YZXNeklLNKRVOS6DHGRosog.jpg",
        "genre_ids": [
            27,
            35,
            14
        ],
        "id": 287903,
        "original_language": "en",
        "original_title": "Krampus",
        "overview": "When his dysfunctional family clashes over the holidays, young Max is disillusioned and turns his back on Christmas.  Little does he know, this lack of festive spirit has unleashed the wrath of Krampus: a demonic force of ancient evil intent on punishing non-believers.",
        "popularity": 462.54,
        "poster_path": "/sAolMRD9rFSTU7tssfFuLEJJa7w.jpg",
        "release_date": "2015-11-26",
        "title": "Krampus",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 1984
    },
    {
        "adult": false,
        "backdrop_path": "/lDlVgD9IGAmki7CgIlH5eYUwrhW.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 857879,
        "original_language": "en",
        "original_title": "Mount Adams",
        "overview": "UFO investigators find themselves fighting for survival as alien monsters hunt them on the slopes of Mount Adams.",
        "popularity": 428.502,
        "poster_path": "/nddTKKAu6z771duaxr1D32pHZ8j.jpg",
        "release_date": "2021-07-21",
        "title": "Mount Adams",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 8
    },
    {
        "adult": false,
        "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 572802,
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        "popularity": 522.991,
        "poster_path": "/e71ZaR31LYhJZFUqMz309fbM8ZB.jpg",
        "release_date": "2023-12-20",
        "title": "Aquaman and the Lost Kingdom",
        "video": false,
        "vote_average": 8.9,
        "vote_count": 10
    },
    {
        "adult": false,
        "backdrop_path": "/4MUfDtBqUFqotGF5RJOfNfoBTLo.jpg",
        "genre_ids": [
            28,
            27,
            14
        ],
        "id": 951546,
        "original_language": "en",
        "original_title": "Reign of Chaos",
        "overview": "When the world is gripped by a plague unleashed by the evil lord Chaos, and humans are turned into rabid creatures, mankind can only be saved by three young women, descendants of a Goddess, with the power to stop Chaos' evil.",
        "popularity": 440.377,
        "poster_path": "/nTMmpvR9TyV631tpFr4FtYxG0FC.jpg",
        "release_date": "2022-04-12",
        "title": "Reign of Chaos",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 29
    },
    {
        "adult": false,
        "backdrop_path": "/a21obwG9qMSf1qa6oG4ZgpOyMaA.jpg",
        "genre_ids": [
            16,
            28,
            10751,
            35
        ],
        "id": 870358,
        "original_language": "en",
        "original_title": "Merry Little Batman",
        "overview": "This Christmas, Damian Wayne wants to be a superhero like his dad – the one and only Batman. When Damian is left home alone while Batman takes on Gotham’s worst supervillains on Christmas Eve, he stumbles upon a villainous plot to steal Christmas and leaps at the chance to save the day.",
        "popularity": 391.875,
        "poster_path": "/2J70guF8wcErbYbRgZUBcvShgI1.jpg",
        "release_date": "2023-12-08",
        "title": "Merry Little Batman",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 64
    },
    {
        "adult": false,
        "backdrop_path": "/mIpdOcss3oedSYB8juiSXg89uLL.jpg",
        "genre_ids": [
            28,
            878,
            12,
            53
        ],
        "id": 479753,
        "original_language": "en",
        "original_title": "Shockwave: Countdown to Disaster",
        "overview": "A stolen seismic weapon is activated in Yemen. A hostage freed there tries in vain to warn against its global effect. It starts seismic activity at the Californian fault line where her daughter and ex are monitoring it. Can they stop it?",
        "popularity": 433.01,
        "poster_path": "/sBD608VF4TcFHmP7SuC0OcvZQ0b.jpg",
        "release_date": "2017-09-02",
        "title": "Shockwave: Countdown to Disaster",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 56
    },
    {
        "adult": false,
        "backdrop_path": "/h56edmERPTkey89SqyKu4hINVNy.jpg",
        "genre_ids": [
            28
        ],
        "id": 575264,
        "original_language": "en",
        "original_title": "Mission: Impossible - Dead Reckoning Part One",
        "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
        "popularity": 393.444,
        "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Mission: Impossible - Dead Reckoning Part One",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2699
    },
    {
        "adult": false,
        "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
        "genre_ids": [
            35,
            12,
            14
        ],
        "id": 346698,
        "original_language": "en",
        "original_title": "Barbie",
        "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        "popularity": 441.576,
        "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        "release_date": "2023-07-19",
        "title": "Barbie",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 6338
    },
    {
        "adult": false,
        "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
        "genre_ids": [
            878,
            27,
            28
        ],
        "id": 940721,
        "original_language": "ja",
        "original_title": "ゴジラ-1.0",
        "overview": "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
        "popularity": 439.588,
        "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
        "release_date": "2023-11-03",
        "title": "Godzilla Minus One",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 142
    },
    {
        "adult": false,
        "backdrop_path": "/s8ryrjpl6GjSLoEHagzmgE4Yl2f.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 844069,
        "original_language": "ko",
        "original_title": "귀문",
        "overview": "In 1990, at a secluded community center, the custodian murders all the guest lodgers and kills himself. Ever since, on every Old Year's Night, paranormal events begin to take place within the building. Eventually, the center is shut down and left abandoned for years. A renowned paranormal investigator who had lost his mother during an exorcism and three college students who heard about the rumor of the unexplained phenomena heads over to the building, resolved to uncover the buried secret.",
        "popularity": 540.915,
        "poster_path": "/e1cZ4LaYv1M1RThyUh1sVi21Loe.jpg",
        "release_date": "2021-08-25",
        "title": "Guimoon: The Lightless Door",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 78
    },
    {
        "adult": false,
        "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 412.958,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 7460
    },
    {
        "adult": false,
        "backdrop_path": "/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg",
        "genre_ids": [
            28,
            10749,
            18
        ],
        "id": 695721,
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "popularity": 413.316,
        "poster_path": "/ePquoeNxJ6vg8U7iSjRAZ2KdztX.jpg",
        "release_date": "2023-11-15",
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 770
    },
    {
        "adult": false,
        "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 667538,
        "original_language": "en",
        "original_title": "Transformers: Rise of the Beasts",
        "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
        "popularity": 381.176,
        "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        "release_date": "2023-06-06",
        "title": "Transformers: Rise of the Beasts",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 3710
    },
    {
        "adult": false,
        "backdrop_path": "/4uHyfIApZSRXSVEqSuk92PdN8Yx.jpg",
        "genre_ids": [
            10751,
            35,
            14
        ],
        "id": 8871,
        "original_language": "en",
        "original_title": "How the Grinch Stole Christmas",
        "overview": "The Grinch decides to rob Whoville of Christmas - but a dash of kindness from little Cindy Lou Who and her family may be enough to melt his heart...",
        "popularity": 379.243,
        "poster_path": "/52EpMoLTTbKAkM6rSrnNHV2mpLF.jpg",
        "release_date": "2000-11-17",
        "title": "How the Grinch Stole Christmas",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 6882
    },
    {
        "adult": false,
        "backdrop_path": "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg",
        "genre_ids": [
            28,
            878,
            27
        ],
        "id": 615656,
        "original_language": "en",
        "original_title": "Meg 2: The Trench",
        "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        "popularity": 359.191,
        "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        "release_date": "2023-08-02",
        "title": "Meg 2: The Trench",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 2682
    },
    {
        "adult": false,
        "backdrop_path": "/LfUXJQOhBa0cfQsGnYwuSUaHId.jpg",
        "genre_ids": [
            37
        ],
        "id": 940175,
        "original_language": "en",
        "original_title": "A Tale of Two Guns",
        "overview": "In the lawless West, The Cowboys, a notorious brotherhood of killers and thieves, reigned over the land with brutal fists and fast guns. Fate had finally caught up with them and now the merciless gang has but a single surviving member. When a deputized gunslinger takes up the call to hunt down the last Cowboy, the chase is on and the bullets fly, and only one of these hardened men can survive.",
        "popularity": 359.421,
        "poster_path": "/kT3Zy7kOQERHnpEHT1wMwXEpJsk.jpg",
        "release_date": "2022-02-17",
        "title": "A Tale of Two Guns",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 23
    },
    {
        "adult": false,
        "backdrop_path": "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 609681,
        "original_language": "en",
        "original_title": "The Marvels",
        "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
        "popularity": 392.306,
        "poster_path": "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
        "release_date": "2023-11-08",
        "title": "The Marvels",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 704
    },
    {
        "adult": false,
        "backdrop_path": "/biRLtgt3t8MwxeLRRJkf1BsHoeq.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1060090,
        "original_language": "en",
        "original_title": "The Collective",
        "overview": "A group of righteous assassins called The Collective take aim at a highly sophisticated human trafficking ring backed by a network of untouchable billionaires. With their backs against the wall, The Collective has no choice but to put their most important mission in the hands of rookie assassin, Sam Alexander.",
        "popularity": 354.078,
        "poster_path": "/Ah9H6Sj434nJiZpTPQrovHaEePV.jpg",
        "release_date": "2023-08-04",
        "title": "The Collective",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 31
    },
    {
        "adult": false,
        "backdrop_path": "/3xvdNyZ9WsVJpyeGhm85fukeZz4.jpg",
        "genre_ids": [
            878,
            9648,
            53
        ],
        "id": 1001835,
        "original_language": "en",
        "original_title": "Wifelike",
        "overview": "A grieving detective in the near-future hunts down criminals who trade artificial humans on the black market. In the fight to end AI exploitation, an underground resistance attempts to infiltrate him by sabotaging the programming of the artificial human assigned as his companion to behave like his late wife. She begins to question her reality as memories of a past life begin to surface in a world where nothing is as it seems.",
        "popularity": 358.913,
        "poster_path": "/tea2gDZPxw0wfKC2S2VRWHagtt4.jpg",
        "release_date": "2022-08-12",
        "title": "Wifelike",
        "video": false,
        "vote_average": 7,
        "vote_count": 205
    },
    {
        "adult": false,
        "backdrop_path": "/cCIbJZVL3RQXp7CXohkAobhyNaw.jpg",
        "genre_ids": [
            35
        ],
        "id": 1172029,
        "original_language": "es",
        "original_title": "Sobreviviendo mis XV",
        "overview": "Quinceañeras, a magical age... except when your family wants to put you in a bulky dress and make you waltz in front of everyone, which is exactly what happens to Danae shortly after she transfers to a very proper private school.  Now Danae has to manage to balance the demands of her family, those of her new friends and organize a cool, but traditional, but modern, but emotional, but aesthetic, but also grandmother-pleasing Quinceañera party... without dying in the process.",
        "popularity": 326.747,
        "poster_path": "/kr50u2w3G5L7RqLf6frFliJqPrZ.jpg",
        "release_date": "2023-09-21",
        "title": "Surviving My Quinceañera",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 41
    },
    {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 153.949,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.708,
        "vote_count": 19148
    },
    {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 134.671,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.707,
        "vote_count": 25126
    },
    {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 75.064,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.589,
        "vote_count": 11543
    },
    {
        "adult": false,
        "backdrop_path": "/3f92DMBTFqr3wgXpfxzrb0qv8nG.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 73.983,
        "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "video": false,
        "vote_average": 8.574,
        "vote_count": 14894
    },
    {
        "adult": false,
        "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 19404,
        "original_language": "hi",
        "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
        "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
        "popularity": 41.427,
        "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
        "release_date": "1995-10-20",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.547,
        "vote_count": 4302
    },
    {
        "adult": false,
        "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
        "genre_ids": [
            18
        ],
        "id": 389,
        "original_language": "en",
        "original_title": "12 Angry Men",
        "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        "popularity": 59.682,
        "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        "release_date": "1957-04-10",
        "title": "12 Angry Men",
        "video": false,
        "vote_average": 8.546,
        "vote_count": 7867
    },
    {
        "adult": false,
        "backdrop_path": "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "id": 129,
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "popularity": 101.673,
        "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "release_date": "2001-07-20",
        "title": "Spirited Away",
        "video": false,
        "vote_average": 8.54,
        "vote_count": 15226
    },
    {
        "adult": false,
        "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
        "genre_ids": [
            35,
            53,
            18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "popularity": 83.924,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.514,
        "vote_count": 16793
    },
    {
        "adult": false,
        "backdrop_path": "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
        "genre_ids": [
            18,
            28,
            80,
            53
        ],
        "id": 155,
        "original_language": "en",
        "original_title": "The Dark Knight",
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        "popularity": 106.339,
        "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "release_date": "2008-07-16",
        "title": "The Dark Knight",
        "video": false,
        "vote_average": 8.513,
        "vote_count": 31072
    },
    {
        "adult": false,
        "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
        "genre_ids": [
            14,
            18,
            80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "popularity": 73.529,
        "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        "release_date": "1999-12-10",
        "title": "The Green Mile",
        "video": false,
        "vote_average": 8.509,
        "vote_count": 16235
    },
    {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
            10749,
            16,
            18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        "popularity": 85.56,
        "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.501,
        "vote_count": 10587
    },
    {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
            53,
            80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "popularity": 106.192,
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 26278
    },
    {
        "adult": false,
        "backdrop_path": "/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 122,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        "popularity": 104.791,
        "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "release_date": "2003-12-01",
        "title": "The Lord of the Rings: The Return of the King",
        "video": false,
        "vote_average": 8.476,
        "vote_count": 22712
    },
    {
        "adult": false,
        "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 13,
        "original_language": "en",
        "original_title": "Forrest Gump",
        "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "popularity": 92.701,
        "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        "release_date": "1994-06-23",
        "title": "Forrest Gump",
        "video": false,
        "vote_average": 8.476,
        "vote_count": 25807
    },
    {
        "adult": false,
        "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
        "genre_ids": [
            37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        "popularity": 85.407,
        "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        "release_date": "1966-12-23",
        "title": "The Good, the Bad and the Ugly",
        "video": false,
        "vote_average": 8.472,
        "vote_count": 7939
    },
    {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "popularity": 95.049,
        "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "release_date": "1990-09-12",
        "title": "GoodFellas",
        "video": false,
        "vote_average": 8.465,
        "vote_count": 11970
    },
    {
        "adult": false,
        "backdrop_path": "/dlC0ed9Ugh3FzydnkBtV5lRXUu4.jpg",
        "genre_ids": [
            16,
            18,
            10752
        ],
        "id": 12477,
        "original_language": "ja",
        "original_title": "火垂るの墓",
        "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
        "popularity": 0.6,
        "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
        "release_date": "1988-04-15",
        "title": "Grave of the Fireflies",
        "video": false,
        "vote_average": 8.456,
        "vote_count": 4987
    },
    {
        "adult": false,
        "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 637,
        "original_language": "it",
        "original_title": "La vita è bella",
        "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
        "popularity": 62.601,
        "poster_path": "/6tEJnof1DKWPnl5lzkjf0FVv7oB.jpg",
        "release_date": "1997-12-20",
        "title": "Life Is Beautiful",
        "video": false,
        "vote_average": 8.455,
        "vote_count": 12408
    },
    {
        "adult": false,
        "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 346,
        "original_language": "ja",
        "original_title": "七人の侍",
        "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
        "popularity": 50.96,
        "poster_path": "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
        "release_date": "1954-04-26",
        "title": "Seven Samurai",
        "video": false,
        "vote_average": 8.457,
        "vote_count": 3322
    },
    {
        "adult": false,
        "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 11216,
        "original_language": "it",
        "original_title": "Nuovo Cinema Paradiso",
        "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
        "popularity": 29.161,
        "poster_path": "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
        "release_date": "1988-11-17",
        "title": "Cinema Paradiso",
        "video": false,
        "vote_average": 8.448,
        "vote_count": 4040
    },
    {
        "adult": false,
        "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
        "id": 1029575,
        "title": "The Family Plan",
        "original_language": "en",
        "original_title": "The Family Plan",
        "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
        "poster_path": "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            35
        ],
        "popularity": 321.553,
        "release_date": "2023-12-14",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 186
    },
    {
        "adult": false,
        "backdrop_path": "/aNG1BSIULxbHtUmBiar0i3fR1S4.jpg",
        "id": 520758,
        "title": "Chicken Run: Dawn of the Nugget",
        "original_language": "en",
        "original_title": "Chicken Run: Dawn of the Nugget",
        "overview": "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
        "poster_path": "/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            12,
            35,
            10751
        ],
        "popularity": 383.198,
        "release_date": "2023-12-08",
        "video": false,
        "vote_average": 7.627,
        "vote_count": 126
    },
    {
        "adult": false,
        "backdrop_path": "/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg",
        "id": 695721,
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "poster_path": "/ePquoeNxJ6vg8U7iSjRAZ2KdztX.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            10749,
            18
        ],
        "popularity": 413.316,
        "release_date": "2023-11-15",
        "video": false,
        "vote_average": 7.249,
        "vote_count": 774
    },
    {
        "adult": false,
        "backdrop_path": "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
        "id": 1071215,
        "title": "Thanksgiving",
        "original_language": "en",
        "original_title": "Thanksgiving",
        "overview": "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        "poster_path": "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            53,
            9648
        ],
        "popularity": 130.127,
        "release_date": "2023-11-16",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 111
    },
    {
        "adult": false,
        "backdrop_path": "/kF9o9P7LEUJA0SpUHlQ3M1MbUlA.jpg",
        "id": 507532,
        "title": "Finestkind",
        "original_language": "en",
        "original_title": "Finestkind",
        "overview": "Two brothers are pulled into a deal with an organized crime syndicate in Boston.",
        "poster_path": "/90D6sXfbXKhDpd4S1cHICdAe8VD.jpg",
        "media_type": "movie",
        "genre_ids": [
            80,
            18,
            53
        ],
        "popularity": 87.339,
        "release_date": "2023-09-08",
        "video": false,
        "vote_average": 7.486,
        "vote_count": 37
    },
    {
        "adult": false,
        "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
        "id": 572802,
        "title": "Aquaman and the Lost Kingdom",
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        "poster_path": "/e71ZaR31LYhJZFUqMz309fbM8ZB.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            12,
            14
        ],
        "popularity": 522.991,
        "release_date": "2023-12-20",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 15
    },
    {
        "adult": false,
        "backdrop_path": "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
        "id": 891699,
        "title": "Silent Night",
        "original_language": "en",
        "original_title": "Silent Night",
        "overview": "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
        "poster_path": "/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            80
        ],
        "popularity": 126.164,
        "release_date": "2023-11-30",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 47
    },
    {
        "adult": false,
        "backdrop_path": "/r1eCvALF6fN7anVYL8Zn7PaceD1.jpg",
        "id": 787699,
        "title": "Wonka",
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "poster_path": "/6UktQYe7ZCAh3sSXthSyKJliLMy.jpg",
        "media_type": "movie",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "popularity": 1059.479,
        "release_date": "2023-12-06",
        "video": false,
        "vote_average": 7.276,
        "vote_count": 321
    },
    {
        "adult": false,
        "backdrop_path": "/50stq3Jlny6oEgJjsXbQvbajCNw.jpg",
        "id": 1020006,
        "title": "Priscilla",
        "original_language": "en",
        "original_title": "Priscilla",
        "overview": "When teenage Priscilla Beaulieu meets Elvis Presley at a party, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
        "poster_path": "/nmYB2z1M83IrxeNI4etrs3YGSxO.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            10749
        ],
        "popularity": 130.201,
        "release_date": "2023-10-27",
        "video": false,
        "vote_average": 7.167,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/tLsc8SCFO0rMVgVyNm9XtfnyX84.jpg",
        "id": 726209,
        "title": "Leave the World Behind",
        "original_language": "en",
        "original_title": "Leave the World Behind",
        "overview": "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices—and two strangers appear at their door.",
        "poster_path": "/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            9648,
            53,
            878
        ],
        "popularity": 779.281,
        "release_date": "2023-11-22",
        "video": false,
        "vote_average": 6.571,
        "vote_count": 882
    },
    {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "id": 872585,
        "title": "Oppenheimer",
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            36
        ],
        "popularity": 701.123,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 8.129,
        "vote_count": 5467
    },
    {
        "adult": false,
        "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
        "id": 466420,
        "title": "Killers of the Flower Moon",
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
        "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        "media_type": "movie",
        "genre_ids": [
            80,
            18,
            36
        ],
        "popularity": 1145.813,
        "release_date": "2023-10-18",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 1488
    },
    {
        "adult": false,
        "backdrop_path": "/mowTk9LFSr8rW3EG2CUSwzuvx0g.jpg",
        "id": 1160164,
        "title": "TAYLOR SWIFT | THE ERAS TOUR",
        "original_language": "en",
        "original_title": "TAYLOR SWIFT | THE ERAS TOUR",
        "overview": "The cultural phenomenon continues on the big screen! Immerse yourself in this once-in-a-lifetime concert film experience with a breathtaking, cinematic view of the history-making tour.",
        "poster_path": "/jf3YO8hOqGHCupsREf5qymYq1n.jpg",
        "media_type": "movie",
        "genre_ids": [
            10402
        ],
        "popularity": 292.778,
        "release_date": "2023-10-13",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 160
    },
    {
        "adult": false,
        "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
        "id": 346698,
        "title": "Barbie",
        "original_language": "en",
        "original_title": "Barbie",
        "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        "media_type": "movie",
        "genre_ids": [
            35,
            12,
            14
        ],
        "popularity": 441.576,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 7.173,
        "vote_count": 6347
    },
    {
        "adult": false,
        "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
        "id": 940721,
        "title": "Godzilla Minus One",
        "original_language": "ja",
        "original_title": "ゴジラ-1.0",
        "overview": "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
        "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
        "media_type": "movie",
        "genre_ids": [
            878,
            27,
            28
        ],
        "popularity": 439.588,
        "release_date": "2023-11-03",
        "video": false,
        "vote_average": 8.045,
        "vote_count": 145
    },
    {
        "adult": false,
        "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
        "id": 507089,
        "title": "Five Nights at Freddy's",
        "original_language": "en",
        "original_title": "Five Nights at Freddy's",
        "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        "poster_path": "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            9648
        ],
        "popularity": 576.778,
        "release_date": "2023-10-25",
        "video": false,
        "vote_average": 7.82,
        "vote_count": 2883
    },
    {
        "adult": false,
        "backdrop_path": "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "id": 670292,
        "title": "The Creator",
        "original_language": "en",
        "original_title": "The Creator",
        "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
        "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            12,
            18
        ],
        "popularity": 635.647,
        "release_date": "2023-09-27",
        "video": false,
        "vote_average": 7.128,
        "vote_count": 1488
    },
    {
        "adult": false,
        "backdrop_path": "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
        "id": 335977,
        "title": "Indiana Jones and the Dial of Destiny",
        "original_language": "en",
        "original_title": "Indiana Jones and the Dial of Destiny",
        "overview": "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
        "poster_path": "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
        "media_type": "movie",
        "genre_ids": [
            12,
            28
        ],
        "popularity": 263.995,
        "release_date": "2023-06-28",
        "video": false,
        "vote_average": 6.676,
        "vote_count": 2305
    },
    {
        "adult": false,
        "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
        "id": 901362,
        "title": "Trolls Band Together",
        "original_language": "en",
        "original_title": "Trolls Band Together",
        "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            10751,
            10402,
            14,
            35
        ],
        "popularity": 920.108,
        "release_date": "2023-10-12",
        "video": false,
        "vote_average": 7.166,
        "vote_count": 380
    },
    {
        "adult": false,
        "backdrop_path": "/ptz5ETMxDoRRiE69BVuIxJzyTEO.jpg",
        "id": 940551,
        "title": "Migration",
        "original_language": "en",
        "original_title": "Migration",
        "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, via New York City, to tropical Jamaica.",
        "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            35,
            12,
            10751
        ],
        "popularity": 323.777,
        "release_date": "2023-12-06",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 31
    },
    {
        "adult": false,
        "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 572802,
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        "popularity": 522.991,
        "poster_path": "/e71ZaR31LYhJZFUqMz309fbM8ZB.jpg",
        "release_date": "2023-12-21",
        "title": "Aquaman and the Lost Kingdom",
        "video": false,
        "vote_average": 9.1,
        "vote_count": 12
    },
    {
        "adult": false,
        "backdrop_path": "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
        "genre_ids": [
            16,
            12,
            14,
            18
        ],
        "id": 508883,
        "original_language": "ja",
        "original_title": "君たちはどう生きるか",
        "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
        "popularity": 122.123,
        "poster_path": "/jDQPkgzerGophKRRn7MKm071vCU.jpg",
        "release_date": "2023-12-15",
        "title": "The Boy and the Heron",
        "video": false,
        "vote_average": 7.242,
        "vote_count": 277
    },
    {
        "adult": false,
        "backdrop_path": "/50stq3Jlny6oEgJjsXbQvbajCNw.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 1020006,
        "original_language": "en",
        "original_title": "Priscilla",
        "overview": "When teenage Priscilla Beaulieu meets Elvis Presley at a party, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
        "popularity": 130.201,
        "poster_path": "/nmYB2z1M83IrxeNI4etrs3YGSxO.jpg",
        "release_date": "2023-12-26",
        "title": "Priscilla",
        "video": false,
        "vote_average": 7.167,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/pcRCkUtOJ1HSHJ9ZU5mOZ3zpboI.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 906126,
        "original_language": "es",
        "original_title": "La sociedad de la nieve",
        "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
        "popularity": 85.733,
        "poster_path": "/k7rEpZfNPB35FFHB00ZhXHKTL7X.jpg",
        "release_date": "2023-12-22",
        "title": "Society of the Snow",
        "video": false,
        "vote_average": 7.75,
        "vote_count": 4
    },
    {
        "adult": false,
        "backdrop_path": "/uJwTRJxMnZcnDTyesNyeZhkHaOp.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 621587,
        "original_language": "en",
        "original_title": "Next Goal Wins",
        "overview": "Dutch coach Thomas Rongen attempts the nearly impossible task of turning the American Samoa soccer team from perennial losers into winners.",
        "popularity": 77.169,
        "poster_path": "/zWmKqcox4AgM3deEEVCeYqEOOJ2.jpg",
        "release_date": "2023-12-04",
        "title": "Next Goal Wins",
        "video": false,
        "vote_average": 6.306,
        "vote_count": 18
    },
    {
        "adult": false,
        "backdrop_path": "/hsdwzxdX7oHWa7SX4dMAMuq2RqJ.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 365620,
        "original_language": "en",
        "original_title": "Ferrari",
        "overview": "A biopic of automotive mogul Enzo Ferrari, whose family redefined the idea of the high-powered Italian sports car and practically spawned the concept of Formula One racing.",
        "popularity": 79.453,
        "poster_path": "/dAP9QTLVvglGvtsa0VesaOgHcTW.jpg",
        "release_date": "2023-12-25",
        "title": "Ferrari",
        "video": false,
        "vote_average": 7.102,
        "vote_count": 44
    },
    {
        "adult": false,
        "backdrop_path": "/1PkBhxXdEejw8c5BC7T3cN7jz9g.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 1072790,
        "original_language": "en",
        "original_title": "Anyone But You",
        "overview": "After an amazing first date, Bea and Ben's fiery attraction turns ice cold - until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        "popularity": 78.966,
        "poster_path": "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
        "release_date": "2023-12-26",
        "title": "Anyone But You",
        "video": false,
        "vote_average": 9.5,
        "vote_count": 3
    },
    {
        "adult": false,
        "backdrop_path": "/9yUoLlrdV130FKr69r9zqm0bBkV.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 1072342,
        "original_language": "en",
        "original_title": "Night Swim",
        "overview": "Forced into early retirement by a degenerative illness, former baseball player Ray Waller moves into a new house with his wife and two children. He hopes that the backyard swimming pool will be fun for the kids and provide physical therapy for himself. However, a dark secret from the home's past soon unleashes a malevolent force that drags the family into the depths of inescapable terror.",
        "popularity": 30.744,
        "poster_path": "/gSkfBGdxdialBMM7P02V4hcI6Ij.jpg",
        "release_date": "2024-01-05",
        "title": "Night Swim",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/1aRQfzerE6M0vnXMdR2BFUlAoOx.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14
        ],
        "id": 923579,
        "original_language": "ru",
        "original_title": "Коты Эрмитажа",
        "overview": "A cartoon about the famous four-legged inhabitants of the St. Petersburg Winter Palace - museum cats that protect the territory of the State Hermitage from rats and mice.",
        "popularity": 44.09,
        "poster_path": "/3NrXKidbEsViHq3aLvmX1FEncna.jpg",
        "release_date": "2023-12-26",
        "title": "Cats in the Museum",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 36
    },
    {
        "adult": false,
        "backdrop_path": "/hOx2kPyniEHJj9wquzJMuStFFUG.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 770906,
        "original_language": "te",
        "original_title": "సలార్: Part 1 - Ceasefire",
        "overview": "A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs.",
        "popularity": 31.721,
        "poster_path": "/tvp7vaLbiUD76P3DTiUe4iz8up9.jpg",
        "release_date": "2023-12-21",
        "title": "Salaar: Part 1 – Ceasefire",
        "video": false,
        "vote_average": 7,
        "vote_count": 2
    },
    {
        "adult": false,
        "backdrop_path": "/sdCf5jFzyZRGS1umUlmXz7Gn3ao.jpg",
        "genre_ids": [
            27,
            18,
            9648
        ],
        "id": 879689,
        "original_language": "en",
        "original_title": "Raging Grace",
        "overview": "An undocumented Filipina immigrant lands a job as a careworker for a seemingly terminal old man, securing a better life for her and her daughter. But a dark discovery threatens to destroy everything she’s strived for and holds dear.",
        "popularity": 31.31,
        "poster_path": "/6jTCxDmiQmrgBvtbf6hWynmWX39.jpg",
        "release_date": "2023-12-29",
        "title": "Raging Grace",
        "video": false,
        "vote_average": 6,
        "vote_count": 2
    },
    {
        "adult": false,
        "backdrop_path": "/xCXMHUMQJess3GACbR2PQI7sjeH.jpg",
        "genre_ids": [
            878,
            35,
            18
        ],
        "id": 1072371,
        "original_language": "en",
        "original_title": "Jules",
        "overview": "A flying saucer lands in the backyard of an elderly suburbanite with memory problems, who forms a bond with the scared alien inside.",
        "popularity": 18.476,
        "poster_path": "/yMOWu8rpZPiBI0j8MInBTtNO0vU.jpg",
        "release_date": "2023-12-29",
        "title": "Jules",
        "video": false,
        "vote_average": 7.586,
        "vote_count": 122
    },
    {
        "adult": false,
        "backdrop_path": "/5R19VzUX3unBGgWAMmCJKLcOsbo.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 960876,
        "original_language": "hi",
        "original_title": "डंकी",
        "overview": "Four friends from a sleepy little village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier alights from a train one day, and their lives change. He gives them a soldier's promise: He will take them to the land of their dreams. What follows is a hilarious and heartwarming tale of a perilous journey through the desert and the sea, but most crucially through the hinterlands of their mind.",
        "popularity": 29.774,
        "poster_path": "/kPRb1mbVHGop0egQ7153y0lhzGL.jpg",
        "release_date": "2023-12-21",
        "title": "Dunki",
        "video": false,
        "vote_average": 10,
        "vote_count": 1
    },
    {
        "adult": false,
        "backdrop_path": "/bX6C4gPpNF6SoVRIBqmD9MW3oU8.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 1109586,
        "original_language": "zh",
        "original_title": "三大队",
        "overview": "Adapted from documentary literature \" Please tell the director, three brigade task completed. \" The rape and murder suspect died in the interrogation room after being beaten by the crowd. The three brigades in charge of the case were also sent to prison. The other suspect is still at large. After his release from prison, three brigade under the leadership of Captain Old Cheng to track down his whereabouts, and finally assist the police to capture the suspect, chasing the murderer for 12 years.",
        "popularity": 19.082,
        "poster_path": "/vo4JbsDUg4O9TmeefZEHzneXYaz.jpg",
        "release_date": "2023-12-22",
        "title": "Endless Journey",
        "video": false,
        "vote_average": 7,
        "vote_count": 1
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            35,
            80
        ],
        "id": 1206988,
        "original_language": "en",
        "original_title": "A Tribe Called Judah",
        "overview": "With the help of their mother, the Judah boys plan to rob a small mall. But when they arrive, they're met by real armed robbers.",
        "popularity": 13.119,
        "poster_path": "/44CUFoxVdnCixPbH5BaIFBtKkC9.jpg",
        "release_date": "2023-12-29",
        "title": "A Tribe Called Judah",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/5GIsSR2cV43yDwYDzlgoZ8IL7En.jpg",
        "genre_ids": [
            18,
            36,
            10749,
            53
        ],
        "id": 901358,
        "original_language": "ru",
        "original_title": "Жена Чайковского",
        "overview": "Antonina Miliukova is a beautiful and bright young woman, born in the aristocracy of 19th century Russia. She could have anything she'd want, and yet her only obsession is to marry Pyotr Tchaikovsky, with whom she falls in love from the very moment she hears his music. The composer finally accepts this union, but after blaming her for his misfortunes and breakdowns, his attempts to get rid of his wife are brutal. Consumed by her feelings for him, Antonina decides to endure and do whatever it takes to stay with him. Humiliated, disgraced and discarded, she is slowly driven to madness.",
        "popularity": 19.424,
        "poster_path": "/3SHL9l0gCACJExESoYUP4Rlr7tL.jpg",
        "release_date": "2023-12-29",
        "title": "Tchaikovsky’s Wife",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 33
    },
    {
        "adult": false,
        "backdrop_path": "/nlDmuxSjJS1Fi2FgVToPm9ytm5S.jpg",
        "genre_ids": [
            28,
            18,
            53
        ],
        "id": 1213076,
        "original_language": "ta",
        "original_title": "Fight Club",
        "overview": "A young boy Selva chasing his football sports dreams suffers a major setback, grows into an angry young man who is drawn into conflicts by evil forces involving him and his family, which he must navigate and reform",
        "popularity": 11.106,
        "poster_path": "/1h6t9nCYVWOLRskB35K51payMok.jpg",
        "release_date": "2023-12-20",
        "title": "Fight Club",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/cmunCeGDxPoamBeglhMhf0e92dG.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 760774,
        "original_language": "en",
        "original_title": "One Life",
        "overview": "British stockbroker Nicholas Winton visits Czechoslovakia in the 1930s and forms plans to assist in the rescue of Jewish children before the onset of World War II, in an operation that came to be known as the Kindertransport.",
        "popularity": 15.901,
        "poster_path": "/eo5qwePOV4cxCJ2pX9sx1MQbDP3.jpg",
        "release_date": "2024-01-01",
        "title": "One Life",
        "video": false,
        "vote_average": 8,
        "vote_count": 6
    },
    {
        "adult": false,
        "backdrop_path": "/o3EuhA51thgZfFxJTgK7nzAOU4P.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 823598,
        "original_language": "cn",
        "original_title": "金手指",
        "overview": "In 1970s Hong Kong, the Independent Commission Against Corruption (ICAC) was formed to bring down the corruption syndicate led by British government officials. One of its top investigators is Senior Investigator Lau Kai-Yuen, who brought down countless corrupted officials. Just as he thought stability and prosperity are within reach, a new era of greed and riches takes him into a new battlefield of corruption.",
        "popularity": 15.62,
        "poster_path": "/53lyXVLL83dC9AYrpEXfB7Xe34j.jpg",
        "release_date": "2023-12-30",
        "title": "The Goldfinger",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/fD4e9fSeiyXEJJDbbOipSKMA7Fg.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 1063756,
        "original_language": "en",
        "original_title": "Sweet Sue",
        "overview": "Sue is back on the dating scene. She meets a mysterious biker called Ron at her brother's funeral and sparks fly. But when Ron introduces her to her social media-influence son, Anthony, Sue finds herself in an increasingly surreal battle of wills with this ambitious teenager who, despite showing no signs of talent, is convinced his dance troupe 'Electric Destiny' is tipped for stardom. Will she find the purpose and imagination to bring this little unconventional family together for a chance of happiness?",
        "popularity": 11.533,
        "poster_path": "/hu6EzWmUjJxijWu8yjAr01jPZaR.jpg",
        "release_date": "2023-12-22",
        "title": "Sweet Sue",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }
];

export default movies;