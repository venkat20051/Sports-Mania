function rotate(event) {
    var s=document.getElementsByClassName('ve_card');
    var clickedCard = event.currentTarget;
    var isCurrentlyRotated = clickedCard.classList.contains('ve_rotate');
    for(var i=0;i<s.length;i++)
    {
        s[i].classList.remove('ve_rotate');
    }
    if (!isCurrentlyRotated) {
        clickedCard.classList.add('ve_rotate');
    }
}
var headData={
    "ve_1st":"World Chess Championship",
     "ve_2nd":"Chess Olympiad",
    "ve_3rd":" Grand Chess Tour",
     "ve_4th":"Tata Steel Chess Tournament",
     "ve_5th":"Carrom Federation of Sri Lanka",
     "ve_6th":"Carrom World Cup",
     "ve_7th":" SAARC Carrom Championship",
     "ve_8th":"Asian Carrom Championship",
     "ve_9th":"World Table Tennis Championships",
     "ve_10th":"Olympic Games (Table Tennis)",
     "ve_11th":"ITTF World Cup",
     "ve_12th":"Asian Table Tennis Championships",
     "ve_13th":"All England Open Badminton Championships",
     "ve_14th":"BWF World Championships",
     "ve_15th":"Thomas & Uber Cup",
     "ve_16th":"Indonesia Open",
     "ve_17th":"The Heavyweight Championship",
     "ve_18th":" The World Boxing Association (WBA) Championships",
     "ve_19th":"The World Boxing Council (WBC) Championships",
     "ve_20th":"The International Boxing Federation (IBF) Championships",
 }
var Description={
   "ve_1st":"The World Chess Championship is the pinnacle of chess competitions, where the top two players face off to claim the title of World Chess Champion. The 2023 championship featured a dramatic tie-break match between Ding Liren and Ian Nepomniachtchi.",
    "ve_2nd":"The Chess Olympiad is a biennial team event where national teams from around the world compete for the top position. The 2022 Olympiad was held in Chennai, India, and showcased extraordinary performances by various teams.",
   "ve_3rd":"The Grand Chess Tour is a series of high-profile chess tournaments featuring the world's elite players. The 2023 tour included events like the Sinquefield Cup and the London Chess Classic.",
    "ve_4th":"This is Known as the “Wimbledon of Chess,” the Tata Steel Chess Tournament is held annually in Wijk aan Zee, Netherlands. It is renowned for its strong field and high-quality games.",
    "ve_5th":"The Carrom Federation of Sri Lanka is the most prestigious event in the carrom calendar, organized by the International Carrom Federation (ICF).",
    "ve_6th":"The Carrom World Cup is an international event held every four years, bringing together top players from all member countries of the International Carrom Federation.",
    "ve_7th":"The SAARC Carrom Championship is a regional event organized by the South Asian Association for Regional Cooperation (SAARC).",
    "ve_8th":"The Asian Carrom Championship is organized by the Asian Carrom Confederation (ACC), featuring top players from across Asia.",
    "ve_9th":"Organized by the International Table Tennis Federation (ITTF), the World Table Tennis Championships is the most prestigious event in the sport, held biennially",
     "ve_10th":" Table tennis has been a part of the Summer Olympic Games since 1988. The event is one of the most highly anticipated competitions, featuring the best athletes from across the globe.",
     "ve_11th":"The ITTF World Cup is an annual competition that invites the top 20 players based on world rankings and regional championships. It is considered one of the most competitive tournaments in table tennis.",
     "ve_12th":"Held biennially, the Asian Table Tennis Championships feature the best players from Asia, a continent known for producing top table tennis talent. The event includes singles, doubles, and team competitions.",
     "ve_13th":"The All England Open is one of the oldest and most prestigious badminton tournaments in the world, held annually in Birmingham, England. It is part of the BWF World Tour Super 1000 events.",
     "ve_14th":" The BWF World Championships is an annual event organized by the Badminton World Federation to crown the best badminton players in the world.",
     "ve_15th":"The Thomas Cup (men's teams) and Uber Cup (women's teams) are the world team championships in badminton. National teams compete in a knockout format to determine the best team in the world.",
     "ve_16th":" The Indonesia Open is one of the premier badminton tournaments, part of the BWF World Tour Super 1000 events. It is known for its enthusiastic crowds and high-energy atmosphere.",
     "ve_17th":"The heavyweight championship is the premier boxing title for the heaviest weight class. It is contested by the top heavyweights in the world and includes multiple belts like the WBC, WBA, IBF, and WBO.",
     "ve_18th":" The WBA is one of the oldest boxing organizations, holding championship bouts across various weight classes. It is known for its long history and prestigious titles.",
     "ve_19th":"The WBC is one of the most prominent boxing organizations, with championship bouts held in multiple weight classes. It is known for its rigorous standards and high-profile fights.",
     "ve_20th":"The IBF is known for its competitive fights and holds titles across various weight classes. It is a major title in professional boxing.",
}
var Winner={
   "ve_1st":"Ding Liren",
    "ve_2nd":"Uzbekistan",
   "ve_3rd":"Magnus Carlsen",
    "ve_4th":"Magnus Carlsen",
    "ve_5th":"Rashmi Kumari (India)",
    "ve_6th":"Yogesh Pardeshi (India)",
    "ve_7th":" Mohamed Azmeer (Maldives)",
    "ve_8th":"Surajit Saha (India)",
    "ve_9th":"Fan Zhendong (Men's Singles), Chen Meng (Women's Singles)",
     "ve_10th":"Ma Long (Men's Singles), Chen Meng (Women's Singles)",
     "ve_11th":"Fan Zhendong (Men's Singles), Mima Ito (Women's Singles)",
     "ve_12th":"Xu Xin (Men's Singles), Sun Yingsha (Women's Singles)",
     "ve_13th":"Li Shifeng (Men's Singles), An Se-young (Women's Singles)",
     "ve_14th":"Kunlavut Vitidsarn (Men's Singles), Akane Yamaguchi (Women's Singles)",
     "ve_15th":"Indonesia (Thomas Cup), China (Uber Cup)",
     "ve_16th":"Viktor Axelsen (Men's Singles), Chen Yufei (Women's Singles)",
     "ve_17th":"Tyson Fury (for recent notable fights)",
     "ve_18th":" Canelo Álvarez (as of the latest fights)",
     "ve_19th":" Deontay Wilder (for recent notable fights)",
     "ve_20th":"Errol Spence Jr. (for recent notable fights)",
}
var Runner={
   "ve_1st":"Ian Nepomniachtchi",
    "ve_2nd":"Ukraine",
   "ve_3rd":"No Runner up",
    "ve_4th":"Anish Giri",
    "ve_5th":"Irshad Ahmed (Sri Lanka)",
    "ve_6th":"Nishantha Fernando (Sri Lanka)",
    "ve_7th":"  S. Ilavazhagi (India)",
    "ve_8th":"Hemantha Ranaweera (Sri Lanka)",
    "ve_9th":" Ma Long (Men's Singles), Sun Yingsha (Women's Singles)",
    "ve_10th":"Fan Zhendong (Men's Singles), Sun Yingsha (Women's Singles)",
    "ve_11th":"Liang Jingkun (Men's Singles), Chen Meng (Women's Singles)",
    "ve_12th":"Tomokazu Harimoto (Men's Singles), Mima Ito (Women's Singles)",
    "ve_13th":"Shi Yuqi (Men's Singles), Akane Yamaguchi (Women's Singles)",
    "ve_14th":"Kodai Naraoka (Men's Singles), Tai Tzu-ying (Women's Singles)",
    "ve_15th":"Denmark (Thomas Cup), South Korea (Uber Cup)",
    "ve_16th":"Anthony Sinisuka Ginting (Men's Singles), Tai Tzu-ying (Women's Singles)",
    "ve_17th":"Deontay Wilder (for recent notable fights)",
     "ve_18th":"Gennady Golovkin (for recent notable fights)",
     "ve_19th":"Tyson Fury (for recent notable fights)",
     "ve_20th":"Shawn Porter (for recent notable fights)",
}
var Prize_Money={
   "ve_1st":"Winner: $1.1 million, Runner-up: $900,000",
    "ve_2nd":" Each winning team received $50,000.",
   "ve_3rd":"Total prize fund: $1.75 million, Overall winner: $350,000",
    "ve_4th":"Winner: €10,000, Runner-up: €6,500",
    "ve_5th":"Winner: $10,000, Runner-up: $5,000",
    "ve_6th":"Winner: $8,000, Runner-up: $4,000",
    "ve_7th":" Winner: $6,000, Runner-up: $3,000",
    "ve_8th":"Winner: $7,000, Runner-up: $3,500",
    "ve_9th":" Total prize fund: $2.7 million",
    "ve_10th":"Total prize fund: $1.2 million",
    "ve_11th":"Total prize fund: $500,000",
    "ve_12th":"Total prize fund: $200,000",
    "ve_13th":"$1,000,000 (2023)",
    "ve_14th":"$1,500,000",
    "ve_15th":"$1,300,000 (2023)",
    "ve_16th":"$1,250,000 (2023)",
    "ve_17th":"Varies by fight; can be tens of millions of dollars for top bouts.",
     "ve_18th":"Varies by fight; top bouts can involve millions of dollars.",
     "ve_19th":"Varies widely; top bouts can see prize money in the tens of millions.",
     "ve_20th":"Prize money varies by bout, with top fights often involving significant sums.",
}
var Highlights={
   "ve_1st":"Ding Liren became the first Chinese World Champion after a thrilling victory in tie-breaks.",
    "ve_2nd":" Historic victories for Uzbekistan in the Open section and Ukraine in the Women's section.",
    "ve_3rd":"Magnus Carlsen's stellar performance across the tour earned him the overall first place.",
    "ve_4th":"Magnus Carlsen won the tournament for a record eighth time, demonstrating his exceptional skills",
    "ve_5th":" Rashmi Kumari's strategic play and precision led her to victory, making her one of the few female champions in the history of the tournament.",
    "ve_6th":"Yogesh Pardeshi's consistent performance throughout the tournament earned him the championship, adding another title to his illustrious career.",
    "ve_7th":" Mohamed Azmeer's tactical brilliance and mental fortitude led him to secure the championship, marking a historic win for the Maldives.",
    "ve_8th":" Surajit Saha's exceptional shot-making and strategic acumen were key to his victory in this highly competitive tournament.",
    "ve_9th":" Xu Xin's tactical brilliance and Sun Yingsha's aggressive play were the highlights of the 2023 championships.",
    "ve_10th":" The 2023 World Cup showcased remarkable performances, particularly from Mima Ito, who clinched her first World Cup title.",
    "ve_11th":"Ma Long cemented his legacy as one of the greatest table tennis players by winning back-to-back Olympic gold medals in singles.",
    "ve_12th":"The 2023 championships saw thrilling matches with Fan Zhendong and Chen Meng defending their titles in intense finals.",
    "ve_13th":"Known for its historic significance and high level of competition, attracting the world's best players.",
    "ve_14th":" Considered one of the most important events in the badminton calendar, showcasing top-tier talent and fierce competition.",
    "ve_15th":"Known for their team-based format, these tournaments bring out intense national rivalry and camaraderie",
    "ve_16th":"Renowned for its passionate fans and strong field of participants, making it a favorite among players and spectators alike.",
    "ve_17th":"The 2020 bout between Tyson Fury and Deontay Wilder was a historic fight where Fury won decisively, showcasing his dominance in the division.",
    "ve_18th":" Canelo Álvarez's victories in multiple weight classes have solidified his position as one of boxing's all-time greats.",
    "ve_19th":"Deontay Wilder's knockout power has made him a prominent figure in the heavyweight division.",
    "ve_20th":" Errol Spence Jr.'s dominant performances in the welterweight division have highlighted his skill and strength.",
}
var headings=["Description","Winner","Runner","Prize_Money","Highlights"]
var data = [Description, Winner, Runner, Prize_Money, Highlights];
var tournament_head=headData
function ve_showDetails(blockId) {
    document.body.classList.add('noscroll')
   
    var details = document.getElementById("ve_details3");
    var spans = document.getElementsByClassName("ve_span");
    var values = document.getElementsByClassName("ve_value");
    var tdata=document.getElementsByClassName("ve_thead")[0];
    tdata.innerHTML=tournament_head[blockId];
    for (var i = 0; i < headings.length; i++) {
        spans[i].innerHTML = headings[i];
        values[i].innerHTML = data[i][blockId];
    }
    var backBody = document.getElementsByTagName('ve_men')[0];
    console.log(backBody);
    // backBody.style.opacity=0.6;
    // backBody.style.backdropFilter = 'blur(40px)';
    details.style.display = "block";
    // details.style.zIndex = 9;
    // details.style="z-index:9";
}
function ve_closeDetails() {
    var details = document.getElementById("ve_details3");
    details.style.display = "none";
    document.body.classList.remove('noscroll')
}
// var headings2=["Advancing_Theory","Popularizing","Inspiration","Education"]
// // var data2=[Advancing_Theory,Popularizing]
// var dt=
// [ {
//     "ve_one":"Steinitz, Fischer, and Kasparov significantly advanced chess strategy and theory.",
//     "ve_two":"Judit Polgár, Nona Gaprindashvili, and Hou Yifan achieved significant milestones in chess.",
//     "ve_three":"Notable players like S. R. Venkatesh and A. S. Suresh have advanced carrom strategy and techniques.",
//     "ve_four":"Players like Rani Devi and Anu Sharma have made significant contributions to carrom techniques and strategies.",
//     "ve_five":"Players like Wang Liqin and Ma Long have significantly advanced table tennis techniques and strategies.",
//     "ve_six":"Players like Ding Ning and Liu Shiwen have made notable advancements in table tennis techniques and strategies.",
//     "ve_seven":"Players like Lin Dan and Lee Chong Wei have significantly advanced badminton techniques and strategies.",
//     "ve_eight":"Players like Carolina Marín and Saina Nehwal have made notable advancements in badminton techniques and strategies.",
//     "ve_nine":"Boxers like Muhammad Ali and Floyd Mayweather Jr. have significantly advanced boxing techniques and strategies.",
//     "ve_ten":"Boxers like Claressa Shields and Katie Taylor have made significant advancements in boxing techniques and strategies.",
// },
//  {
//     "ve_one":"Fischer, Kasparov, and Carlsen played key roles in promoting chess globally through media and public engagements.",
//     "ve_two":"Players like Judit Polgár and Susan Polgár advocate for greater female involvement in chess.",
//     "ve_three":"Figures such as P. V. P. Suresh and K. V. Kumar have helped promote carrom through tournaments and media.",
//     "ve_four":"Women like Asha Kumari and Shweta Patel have helped promote carrom through national and international events.",
//     "ve_five":"Figures such as Jan-Ove Waldner and Timo Boll have popularized table tennis through international success and media presence.",
//     "ve_six":"Women like Zhang Yining and Mima Ito have helped promote table tennis through their success in international competitions and media.",
//     "ve_seven":"Figures such as Peter Gade and Viktor Axelsen have helped popularize badminton through international success and media coverage.",
//     "ve_eight":"Women like Tai Tzu-ying and PV Sindhu have helped promote badminton through their success in international competitions and media presence.",
//     "ve_nine":"Figures such as Mike Tyson and Canelo Álvarez have helped popularize boxing through their high-profile fights and media presence.",
//     "ve_ten":"Women like Laila Ali and Amanda Serrano have helped promote boxing through their achievements and media presence.",
// },
// {
//     "ve_one":"Champions like Capablanca, Tal, and Carlsen inspire young players with their dedication and success",
//     "ve_two":"Figures such as Judit Polgár, Maia Chiburdanidze, and Hou Yifan inspire young female players.",
//     "ve_three":"Champions like Rajesh Verma and Shubham Agarwal inspire aspiring players with their achievements and skill",
//     "ve_four":"Figures such as Jaya Sharma and Priya Kapoor inspire young female players with their dedication and success.",
//     "ve_five":"Champions like Zhang Jike and Xu Xin inspire aspiring players with their exceptional skills and achievements.",
//     "ve_six":"Figures such as Feng Tianwei and Chen Meng inspire young female players with their dedication and accomplishments.",
//     "ve_seven":"Champions like Taufik Hidayat and Chen Long inspire aspiring players with their skill and achievements.",
//     "ve_eight":"Figures such as Ratchanok Intanon and Wang Yihan inspire young female players with their dedication and accomplishments.",
//     "ve_nine":"Champions like Sugar Ray Leonard and Manny Pacquiao inspire aspiring boxers with their skill and achievements.",
//     "ve_ten":"Figures such as Holly Holm and Cecilia Brækhus inspire young female boxers with their dedication and success."
// },{
//     "ve_one":"Top players improved chess education by authoring influential books and establishing training programs and schools.",
//     "ve_two":"Female players have contributed to chess education through books and training programs, enhancing learning resources.",
//     "ve_three":"Top players have contributed to carrom education through coaching, training programs, and instructional content.",
//     "ve_four":"Female players have enhanced carrom education through workshops, coaching, and educational materials.",
//     "ve_five":"Top players have contributed to table tennis education through coaching, training programs, and instructional resources.",
//     "ve_six":"Female players have contributed to table tennis education through coaching, workshops, and educational content.",
//     "ve_seven":"Top players have contributed to badminton education through coaching, training programs, and instructional resources.",
//     "ve_eight":"Female players have contributed to badminton education through coaching, workshops, and educational content.",
//     "ve_nine":"Top boxers have contributed to boxing education through coaching, training programs, and instructional materials.",
//     "ve_ten":"Female boxers have contributed to boxing education through coaching, workshops, and educational resources."
// }]
// function ve_matterDetails(Id,n) {
//     var spans1 = document.getElementsByClassName("ve_matter1");
//     var values1 = document.getElementsByClassName("ve_matter2");
//     for (var i=n, j=0; i<n+4; j++,i++) {
//         spans1[i].innerHTML = headings2[j];
//         values1[i].innerHTML = dt[j][Id];
//     }
// }
// ve_matterDetails('ve_one',0);
// ve_matterDetails('ve_two',4);
// ve_matterDetails('ve_three',8);
// ve_matterDetails('ve_four',12);
// ve_matterDetails('ve_five',16);
// ve_matterDetails('ve_six',20);
// ve_matterDetails('ve_seven',24);
// ve_matterDetails('ve_eight',28);
// ve_matterDetails('ve_nine',32);
// ve_matterDetails('ve_ten',36);
