from sqlalchemy.sql import text
from app.models.anime import Anime
from app.models.db import db, environment, SCHEMA
from datetime import date



def seed_anime():
    anime1 = Anime(
      user_id= 3,
      showname= 'Rick and Morty',
      desc= 'Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe.',
      release_date=date(2013, 12, 2),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034279118897295/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ._V1_.jpg',
      # carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126643229299834991/Rick-and-Morty-S6.png'
        )
    anime2 = Anime(
      user_id= 2,
      showname= 'King of the Hill',
      desc= 'King of the Hill is set in the fictional small town of Arlen, Texas. The show centers on the Hill family, headed by the ever-responsible, calm, hard-working, loyal, disciplined, and honest propane and propane accessory salesman Hank Hill',
      release_date=date(1997, 1, 12),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034279374762044/p184316_b_v8_ac.jpg',
      # carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126642583557378078/ec00b326c49abe2313d853051423572c7da4f6c26d6b484e160a0284ecae15c8.png'
        )
    anime3 = Anime(
      user_id= 3,
      showname='The Boondocks',
      desc='Adventures of two boys, Riley and Huey Freeman, who undergo a culture clash when they move from Chicago to the suburbs to live with their grandfather.',
      release_date= date(2005, 11, 6),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034279597068409/p9766190_b_v10_aa.jpg',
      # carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126643418748158103/the_boondocks_banner_wallpaper_by_jpninja426_debkaea-fullview.png'
        )
    anime4 = Anime(
      user_id= 3,
      showname='South Park',
      desc='South Park centers around four boys: Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick. The boys live in the fictional small town of South Park, located within the real-life South Park basin in the Rocky Mountains of central Colorado, approximately a one-hour drive from Denver.',
      release_date= date(1997, 8, 13),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1115034888349962292/p184338_b_v13_aq.jpg',
      # carousel_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1126643524415266940/1123312.png'
        )
    anime5 = Anime(
      user_id= 3,
      showname='Popeye',
      desc='Popeye, a pugnacious, wisecracking cartoon sailor who possesses superhuman strength after ingesting an always-handy can of spinach.',
      release_date= date(1933, 7, 14),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1116844335992930364/p13085838_b_v8_aa.png'
        )
    anime6 = Anime(
      user_id= 3,
      showname='Superman',
      desc='The Fleischer Superman cartoons are a series of 17 animated short films released in Technicolor by Paramount Pictures and based upon the comic book character Superman, making them his first animated appearance.',
      release_date= date(1941, 9, 26),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1116844562267250788/MV5BMTg4NDU0NjM1Ml5BMl5BanBnXkFtZTgwMzM0NDQ1MjE.png'
        )
    anime7 = Anime(
      user_id= 3,
      showname='Avatar: The Last Airbender',
      desc='In a world where certain people, known as benders, have the ability to control and manipulate the elements of water, earth, fire, and air. The story follows Aang, the last surviving Airbender and the Avatar, who must restore balance to the world by defeating the tyrannical Fire Nation. Aang, along with his friends Katara, Sokka, and later Toph, embarks on a journey to master the elements and stop the Fire Nations conquest. They encounter allies and adversaries, uncover ancient secrets, and face personal challenges that test their strength and determination.',
      release_date= date(1941, 9, 26),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129521993587380285/avatar-the-last-airbender-cover-the-promise-omnibus-1210813.png'
        )
    anime8 = Anime(
      user_id= 3,
      showname='The Simpsons',
      desc='Created by Matt Groening, the show is a satirical depiction of a middle-class American family, the Simpsons, living in the fictional town of Springfield. The series follows the misadventures of the quirky and dysfunctional Simpson family, consisting of the bumbling father Homer, the patient and loving mother Marge, their mischievous son Bart, intelligent daughter Lisa, and adorable baby Maggie. "The Simpsons" is known for its clever humor, memorable characters, and its ability to satirize various aspects of American culture, society, and the human condition. The show often tackles a wide range of topics, including politics, religion, and popular culture, while delivering social commentary and witty observations. Over the years, "The Simpsons" has become a cultural phenomenon, spawning a vast array of merchandise, numerous awards, and even a feature-length film.',
      release_date= date(1989,12,17),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129522327957286932/The_Simpsons_-_The_Complete_20th_Season.png'
        )
    anime9 = Anime(
      user_id= 3,
      showname='The Amazing World of Gumball',
      desc='A British-American animated television series that premiered on May 3, 2011. Created by Ben Bocquelet, the show combines various animation styles, including traditional animation, CGI, and live-action backgrounds. The series follows the adventures of Gumball Watterson, a blue cat, and his adopted goldfish brother Darwin, who live in the fictional town of Elmore.In this surreal and humorous world, Gumball navigates the challenges of middle school, encounters eccentric characters, and embarks on imaginative adventures with his diverse group of friends and family. The show combines clever humor, satire, and social commentary to explore relatable themes such as friendship, family dynamics, and the absurdity of everyday life."The Amazing World of Gumball" is praised for its unique visual style, clever writing, and meta-humor that appeals to both children and adults. With its blend of comedy, heartwarming moments, and unexpected plot twists, the series has gained a devoted fanbase and is considered a standout in the world of animated television.',
      release_date= date(2011,5,3),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129522433209151568/1362544_xl.png'
        )
    anime10 = Anime(
      user_id= 3,
      showname='Adventure Time',
      desc='American animated television series that aired from April 5, 2010, to September 3, 2018. Created by Pendleton Ward, the show is set in the post-apocalyptic Land of Ooo and follows the adventures of Finn, a brave human boy with a spirit for heroism, and his best friend Jake, a shape-shifting dog with magical powers. Together, Finn and Jake traverse the whimsical and unpredictable landscapes of Ooo, encountering colorful characters and embarking on quests to protect the land from various threats. The series combines elements of fantasy, science fiction, and comedy, exploring themes of friendship, love, courage, and personal growth. "Adventure Time" is celebrated for its unique animation style, imaginative storytelling, and rich world-building. The shows blend of lighthearted humor and deep emotional moments has garnered a dedicated fanbase of all ages. It has received critical acclaim for its creativity, complex characters, and the way it tackles profound themes in a playful and accessible manner.',
      release_date= date(2010,4,5),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129522536674238474/adventure-time-season-2.png'
        )
    anime11 = Anime(
      user_id= 3,
      showname='Regular Show',
      desc='American animated television series that aired from September 6, 2010, to January 16, 2017. Created by J.G. Quintel, the show revolves around the lives of two best friends, a blue jay named Mordecai and a raccoon named Rigby, who work as groundskeepers at a park. While their job seems mundane, Mordecai and Rigby often find themselves caught up in extraordinary and supernatural adventures. The series combines elements of comedy, surrealism, and pop culture references, creating a unique blend of humor and nostalgia. Throughout their escapades, the duo encounters eccentric characters, faces bizarre challenges, and learns valuable life lessons about responsibility, friendship, and growing up. "Regular Show" gained popularity for its clever writing, offbeat humor, and nostalgic appeal to 80s and 90s pop culture. It has been praised for its relatable characters, imaginative storytelling, and ability to balance lighthearted comedy with heartfelt moments. The series has become a cult favorite and has left a lasting impact on animated television.',
      release_date= date(2010,9,6),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129522581372928060/9k.png'
        )
    anime12 = Anime(
      user_id= 3,
      showname='Seinfield',
      desc='An American sitcom that originally aired from July 5, 1989, to May 14, 1998. Created by Larry David and Jerry Seinfeld, the show follows the lives of Jerry Seinfeld and his eccentric group of friends—George Costanza, Elaine Benes, and Cosmo Kramer—as they navigate everyday life in New York City. Known for its unique "show about nothing" concept, "Seinfeld" explores the mundane and often absurd situations that arise in the characters lives. The series humorously delves into the complexities of social interaction, dating, work, and the trivial aspects of daily routines. With its quick-witted dialogue and observational humor, "Seinfeld" became a cultural phenomenon and is often regarded as one of the greatest sitcoms of all time. The shows success can be attributed to its memorable characters, including Jerrys stand-up comedian persona, Georges perpetual misfortune, Elaines strong-willed demeanor, and Kramers eccentricity. "Seinfeld" is praised for its sharp writing, innovative structure, and ability to find humor in the ordinary.',
      release_date= date(1989,7,5),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129522709324382238/250px-Seinfeld1262.png'
        )
    anime13 = Anime(
      user_id= 3,
      showname='MasterChef',
      desc='A competitive cooking reality TV show that originated in the United Kingdom and has been adapted in various countries worldwide. The series brings together amateur home cooks from diverse backgrounds who showcase their culinary skills in a high-pressure environment. In each season, contestants face a series of culinary challenges, including mystery box challenges, invention tests, and pressure tests, to impress a panel of expert judges. The show tests their creativity, technical abilities, and ability to handle the intense time constraints. "MasterChef" celebrates the art of cooking and showcases a wide range of cuisines and cooking techniques. Contestants strive to create innovative and visually stunning dishes that impress the judges and demonstrate their passion for food. Throughout the competition, contestants receive feedback, mentorship, and elimination until a final winner is crowned.The show has become a global phenomenon, captivating audiences with its mix of culinary talent, dramatic moments, and emotional journeys. "MasterChef" has inspired aspiring chefs around the world and has launched successful careers in the culinary industry.',
      release_date= date(2010, 7, 27),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129522754887110847/season-2.png'
        )
    anime14 = Anime(
      user_id= 3,
      showname='American Dad',
      desc='An American animated sitcom that premiered on February 6, 2005. Created by Seth MacFarlane, Mike Barker, and Matt Weitzman, the show follows the daily lives of the Smiths, an eccentric suburban family living in Langley Falls, Virginia. The series centers around Stan Smith, a patriotic and overly enthusiastic CIA agent, and his unconventional family, which includes his wife Francine, their liberal and peace-loving daughter Hayley, socially awkward son Steve, talking goldfish Klaus, and the eccentric alien Roger, who resides with them. "American Dad!" combines comedy, satire, and political humor to explore various social and cultural issues through its offbeat and often outrageous storylines. The show is known for its sharp writing, witty dialogue, and a mix of clever pop culture references and absurd humor. It offers a humorous and sometimes biting commentary on American politics, family dynamics, and contemporary society. "American Dad!" has amassed a dedicated fanbase and continues to entertain audiences with its irreverent and unpredictable comedy.',
      release_date= date(2005,2,6),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129522949498617896/16441240.png'
        )
    anime15 = Anime(
      user_id= 3,
      showname='The Cleveland Show',
      desc='an American animated sitcom that aired from September 27, 2009, to May 19, 2013. Created by Seth MacFarlane, Richard Appel, and Mike Henry, the show is a spin-off of the popular series "Family Guy." It centers around the life of Cleveland Brown, a mild-mannered and good-hearted character from "Family Guy," who moves to Stoolbend, Virginia, with his teenage son Cleveland Jr. "The Cleveland Show" follows Cleveland and his newly blended family, which includes his lively and sassy new wife Donna, her two children Roberta and Rallo, and their eclectic group of friends and neighbors. The series explores the everyday adventures and misadventures of this diverse group of characters, tackling themes of family, friendship, and the challenges of suburban life. Known for its distinctive animation style and irreverent humor, "The Cleveland Show" combines clever pop culture references, musical numbers, and social commentary. The show features a mix of outrageous comedy and heartfelt moments, as Cleveland navigates through the ups and downs of his personal and professional life.',
      release_date= date(2009, 9, 27),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129523063520759878/MV5BN2IxMzk2YTEtOGFhYS00MTE3LWI4N2QtYWFlODIzZjM1MjNlXkEyXkFqcGdeQXVyNTAyODkwOQ.png'
        )
    anime16 = Anime(
      user_id= 3,
      showname='Teenage Mutant Ninja Turtles',
      desc='A media franchise that originated as a comic book series created by Kevin Eastman and Peter Laird. The franchise has since expanded into animated television series, films, video games, and merchandise. It revolves around the adventures of four anthropomorphic turtles—Leonardo, Donatello, Raphael, and Michelangelo—who are trained in the art of ninjutsu by their rat sensei, Splinter. The Teenage Mutant Ninja Turtles, also known as the TMNT or simply the Turtles, reside in the sewers of New York City, where they protect the city from various threats, including the villainous Shredder and his Foot Clan. Each of the turtles has a distinct personality and specialized weapon, contributing to their unique fighting styles and teamwork. The franchises popularity stems from its blend of action, humor, and relatable characters. The Teenage Mutant Ninja Turtles have become cultural icons, known for their catchphrases, distinctive masks, and signature color-coded bandanas. They embody the values of brotherhood, loyalty, and justice as they battle against evil while maintaining their sense of humor.',
      release_date= date(1987, 7, 1),
      cover_picture='https://cdn.discordapp.com/attachments/1113213089702228038/1129523139928395866/teenage-mutant-ninja-turtles-tmnt-volume-2-dvd-season-2-cover.png'
        )
    db.session.add(anime1)
    db.session.add(anime2)
    db.session.add(anime3)
    db.session.add(anime4)
    db.session.add(anime5)
    db.session.add(anime6)
    db.session.add(anime7)
    db.session.add(anime8)
    db.session.add(anime9)
    db.session.add(anime10)
    db.session.add(anime11)
    db.session.add(anime12)
    db.session.add(anime13)
    db.session.add(anime14)
    db.session.add(anime15)
    db.session.add(anime16)
    db.session.commit()

def undo_anime():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.animes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM animes"))

    db.session.commit()
