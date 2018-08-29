window.onload = function () {
    var appDiv = new Vue({
        el: '#container',
        data: {
            temp:{
                originalText:'',
                translateText:'',
                imgUrl:'',
                date:'2018-08-26'
            },
            content:[
                {
                    originalText:'Add the 2026 World Cup to our long list of accomplishments!',
                    translateText:'将2026年世界杯加入我们的长期成就列表中！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'Report just out: “China hacked Hillary Clinton’s private Email Server.” Are they sure it wasn’t Russia (just kidding!)? What are the odds that the FBI and DOJ are right on top of this? Actually, a very big story. Much classified information!',
                    translateText:'报告刚刚说：“中国攻击希拉里克林顿的私人电子邮件服务器。”他们确定不是俄罗斯（只是开玩笑！）？ FBI和DOJ在这方面的优势是什么？ 实际上，这是一个非常大的故事。 很多机密信息！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'Congratulations to Governor Rick Scott of Florida on his conclusive Republican Primary Win. He will be a great Senator!',
                    translateText:'恭喜佛罗里达州州长里克斯科特在他的共和党初选胜利中获胜。 他将是一位伟大的参议员！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'Such a fantastic win for Ron DeSantis and the people of the Great State of Florida. Ron will be a fantastic Governor. On to November!',
                    translateText:'对于Ron DeSantis和佛罗里达州的人民来说，这是一场如此美妙的胜利。 罗恩将成为一名出色的州长。 到11月！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'“Consumer confidence pops in August to highest level since October 2000”',
                    translateText:'“8月消费者信心自2000年10月以来达到最高水平”',
                    imgUrl:'./img/tweets-img/14.jpg',
                    date:'2018-08-28'
                },
                {
                    originalText:'....results on “Trump News” are from National Left-Wing Media, very dangerous. Google & others are suppressing voices of Conservatives and hiding information and news that is good. They are controlling what we can & cannot see. This is a very serious situation-will be addressed!',
                    translateText:'......“特朗普新闻”的结果来自国家左翼媒体，非常危险。 谷歌和其他人正在压制保守党的声音，并隐藏信息和新闻。 他们控制着我们能够和不能看到的东西。 这是一个非常严重的情况 - 将得到解决！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'Google search results for “Trump News” shows only the viewing/reporting of Fake News Media. In other words, they have it RIGGED, for me & others, so that almost all stories & news is BAD. Fake CNN is prominent. Republican/Conservative & Fair Media is shut out. Illegal? 96% of....',
                    translateText:'“特朗普新闻”的谷歌搜索结果仅显示了对新闻媒体的观看/报道。 换句话说，对于我和其他人来说，他们已经拥有了RIGGED，因此几乎所有的故事和新闻都很糟糕。 假CNN很突出。 共和党/保守派和博览会媒体被拒之门外。 非法？ 96％....',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'I smile at Senators and others talking about how good free trade is for the U.S. What they don’t say is that we lose Jobs and over 800 Billion Dollars a year on really dumb Trade Deals....and these same countries Tariff us to death. These lawmakers are just fine with this!',
                    translateText:'我对参议员和其他人谈论美国的自由贸易有多好，他们对此表示不满意的是，我们每年因真正愚蠢的贸易交易而失去乔布斯和超过800亿美元......而这些国家则对我们施以压力。 死亡。 这些立法者对此很好！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'NASDAQ has just gone above 8000 for the first time in history!',
                    translateText:'纳斯达克有史以来第一次超过8000！',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'“President Trump has done more for minority groups in this country than any president in decades.”  @LouDobbs',
                    translateText:'“特朗普总统在这个国家为少数民族团体做的事情比几十年来任何总统都要多。”@路博布斯',
                    imgUrl:'',
                    date:'2018-08-28'
                },
                {
                    originalText:'.@FLOTUS Melania and I were honored to welcome the President of the Republic of Kenya, @UKenyatta and Mrs. Margaret Kenyatta to the @WhiteHouse today!',
                    translateText:'。@ FLOTUS Melania和我很荣幸今天欢迎肯尼亚共和国总统@UKenyatta和Margaret Kenyatta女士来到@WhiteHouse！',
                    imgUrl:'./img/tweets-img/13.jpg',
                    date:'2018-08-27'
                },
                {
                    originalText:'United States-Mexico Trade Agreement: https://www.whitehouse.gov/briefings-statements/remarks-president-trump-phone-call-president-pena-nieto-mexico-united-states-mexico-trade-agreement/ …',
                    translateText:'美国 - 墨西哥贸易协定：https：//www.whitehouse.gov/briefings-statements/remarks-president-trump-phone-call-president-pena-nieto-mexico-united-states-mexico-trade-agreement/ ...',
                    imgUrl:'./img/tweets-img/12.jpg',
                    date:'2018-08-27'
                },
                {
                    originalText:'Governor Doug Ducey of Arizona is doing a great job. It would be really nice to show your support tomorrow by voting for him in Tuesdays Primary. Doug is strong on Crime, the Border, and our Second Amendment. Loves our Military & our Vets. He has my full and complete Endorsement.',
                    translateText:'亚利桑那州州长Doug Ducey表现出色。 明天通过在周二小学投票支持他，显示你的支持真的很不错。 道格在犯罪，边界和我们的第二修正案上表现出色。 爱我们的军队和我们的兽医。 他有我完整而完整的认可。',
                    imgUrl:'',
                    date:'2018-08-27'
                },
                {
                    originalText:'Congressman Ron DeSantis is a special person who has done an incredible job. He is running in Tuesdays Primary for Governor of Florida….Strong on Crime, Borders and wants Low Taxes. He will be a great Governor and has my full and total Endorsement!',
                    translateText:'国会议员Ron DeSantis是一位做出了令人难以置信的工作的特殊人物。 他正在佛罗里达州州长的星期二小学... ...强烈的犯罪，边界，并希望低税。 他将是一位伟大的州长，并得到我的全面和全面的支持！',
                    imgUrl:'',
                    date:'2018-08-27'
                },
                {
                    originalText:'Rick Scott of Florida is doing a fantastic job as Governor. Jobs are pouring into the State and its economic health is better than ever before. He is strong on Crime, Borders, and loves our Military and Vets. Vote for Rick on Tuesday!',
                    translateText:'佛罗里达州的里克斯科特作为州长做得非常出色。 乔布斯涌入国家，其经济健康状况比以往任何时候都好。 他在犯罪，边界上很强大，并且热爱我们的军队和兽医。 星期二投票给瑞克！',
                    imgUrl:'',
                    date:'2018-08-27'
                },
                {
                    originalText:'A big deal looking good with Mexico!',
                    translateText:'对墨西哥来说很不错！',
                    imgUrl:'',
                    date:'2018-08-27'
                },
                {
                    originalText:'The Fake News Media worked hard to get Tiger Woods to say something that he didn’t want to say. Tiger wouldn’t play the game - he is very smart. More importantly, he is playing great golf again!',
                    translateText:'假新闻媒体努力让老虎伍兹说出一些他不想说的话。 老虎不会参加比赛 - 他非常聪明。 更重要的是，他再次打出了高尔夫球！',
                    imgUrl:'',
                    date:'2018-08-27'
                },
                {
                    originalText:'Thank you to the great @JimBrownNFL32, perhaps the greatest running back of all time, for your wonderful words and support. Since our meeting in New York, African-American UNEMPLOYMENT has reached the LOWEST LEVEL IN HISTORY. You get it!',
                    translateText:'感谢伟大的@ JimBrownNFL32，也许是有史以来最伟大的跑步，感谢您的精彩言辞和支持。 自从我们在纽约开会以来，非裔美国人的失业率达到了历史最低水平。 你懂了！',
                    imgUrl:'',
                    date:'2018-08-27'
                },
                {
                    originalText:'Over 90% approval rating for your all time favorite (I hope) President within the Republican Party and 52% overall. This despite all of the made up stories by the Fake News Media trying endlessly to make me look as bad and evil as possible. Look at the real villains please!',
                    translateText:'超过90％的支持率是你所有人最喜欢（我希望）共和党内的总统和52％的总体。 尽管假新闻媒体所做的所有编曲故事都在无休止地试图让我看起来尽可能地变坏和邪恶。 请看真正的恶棍！',
                    imgUrl:'',
                    date:'2018-08-26'
                },
                {
                    originalText:'“Mainstream Media tries to rewrite history to credit Obama for Trump accomplishments. Since President Trump took office, the economy is booming. The stronger the economy gets, the more desperate his critics are. O had weakest recovery since Great Depression.” @WashTimes',
                    translateText:'“主流媒体试图重写历史，以颂扬奥巴马的特朗普成就。 自特朗普总统上任以来，经济蓬勃发展。 经济越强劲，他的批评者就越绝望。 自大萧条以来，O的复苏最为疲软。“@WashTimes',
                    imgUrl:'',
                    date:'2018-08-26'
                },
                {
                    originalText:'Fantastic numbers on consumer spending released on Friday. Stock Market hits all time high!',
                    translateText:'周五公布的消费者支出数据非常好。 股市创下历史新高！',
                    imgUrl:'',
                    date:'2018-08-26'
                },
                {
                    id:'23',
                    originalText:'My deepest sympathies and respect go out to the family of Senator John McCain. Our hearts and prayers are with you!',
                    translateText:'我对参议员约翰麦凯恩的家人表示最深切的同情和敬意。 我们的心和祈祷与你同在！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'22',
                    originalText:'Stock Market hit all time high on Friday. Congratulations U.S.A.!',
                    translateText:'股市周五创下历史新高。 祝贺美国！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
				{
                    id:'21',
                    originalText:'Our relationship with Mexico is getting closer by the hour. Some really good people within both the new and old government, and all working closely together....A big Trade Agreement with Mexico could be happening soon!',
                    translateText:'我们与墨西哥的关系日益紧密。 新老政府中的一些非常优秀的人，并且所有人都密切合作......与墨西哥的大贸易协议很快就会发生！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'20',
                    originalText:'“The FBI looked at less than 1%” of Crooked’s Emails!',
                    translateText:'“联邦调查局看起来不到1％”的克罗克的电子邮件！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'19',
                    originalText:'“The FBI only looked at 3000 of 675,000 Crooked Hillary Clinton Emails.” They purposely didn’t look at the disasters. This news is just out. @FoxNews',
                    translateText:'“联邦调查局只看了675,000个弯曲的希拉里克林顿电子邮件中的3000个。”他们故意不看灾难。 这个消息刚刚结束。 @福克斯新闻',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'18',
                    originalText:'Big story out that the FBI ignored tens of thousands of Crooked Hillary Emails, many of which are REALLY BAD. Also gave false election info. I feel sure that we will soon be getting to the bottom of all of this corruption. At some point I may have to get involved!',
                    translateText:'很大的故事说FBI忽略了成千上万的弯曲的希拉里电子邮件，其中许多都是真的很糟糕。 还提供了错误的选举信息。 我确信我们很快就会陷入所有腐败的底层。 在某些时候，我可能需要参与其中！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'17',
                    originalText:'.@LindseyGrahamSC  “Every President deserves an Attorney General they have confidence in. I believe every President has a right to their Cabinet, these are not lifetime appointments. You serve at the pleasure of the President.”',
                    translateText:'。@ LindseyGrahamSC“每位总统都值得他们有信心的司法部长。我相信每位总统都有权获得内阁，这些不是终身任命。 你是在总统的陪伴下服务的。“',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'16',
                    originalText:'Jeff Sessions said he wouldn’t allow politics to influence him only because he doesn’t understand what is happening underneath his command position. Highly conflicted Bob Mueller and his gang of 17 Angry Dems are having a field day as real corruption goes untouched. No Collusion!',
                    translateText:'杰夫塞申斯说他不会让政治影响他只是因为他不明白他的指挥位置下发生了什么。 高度冲突的鲍勃穆勒和他的17个愤怒的民主团伙正在进行实地日，因为真正的腐败没有受到影响。 没有勾结！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'15',
                    originalText:'Michaels Cohen’s attorney clarified the record, saying his client does not know if President Trump knew about the Trump Tower meeting (out of which came nothing!). The answer is that I did NOT know about the meeting. Just another phony story by the Fake News Media!',
                    translateText:'Michaels Cohen的律师澄清了这一记录，称他的客户不知道特朗普总统是否知道特朗普大厦会议（其中没有任何结果！）。 答案是我不知道会议。 只是假新闻媒体的另一个虚假故事！',
                    imgUrl:'',
                    date:'2018-08-25'
                },
                {
                    id:'14',
                    originalText:'Happy birthday Vince, you are truly one of the greats!',
                    translateText:'文斯生日快乐，你真是伟人之一！',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'13',
                    originalText:'Great to see the Senate working on solutions to end the secrecy around ridiculously high drug prices, something I called for in my drug pricing Blueprint. Will now work with the House to help American patients! #AmericanPatientsFirst',
                    translateText:'很高兴看到参议院致力于解决方案，以结束可笑的高药价的秘密，我在药物定价蓝图中呼吁。 现在将与众议院合作帮助美国患者！ ＃美国患者优先',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'12',
                    originalText:'Congratulations to new Australian Prime Minister Scott Morrison. There are no greater friends than the United States and Australia!',
                    translateText:'祝贺新任澳大利亚总理斯科特莫里森。 没有比美国和澳大利亚更大的朋友了！',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'11',
                    originalText:'I spoke with Governor David Ige of Hawaii today to express our full support for the people of Hawaii as the State is impacted by #HurricaneLane. The Federal Government is fully committed to helping the people of Hawaii.',
                    translateText:'我今天与夏威夷州州长大卫·伊格交谈，表达了我们对夏威夷人民的全力支持，因为该州受到了#HurricaneLane的影响。 联邦政府完全致力于帮助夏威夷人民。',
                    imgUrl:'./img/tweets-img/11.jpg',
                    date:'2018-08-24'
                },
                {
                    id:'10',
                    originalText:'Social Media Giants are silencing millions of people. Can’t do this even if it means we must continue to hear Fake News like CNN, whose ratings have suffered gravely. People have to figure out what is real, and what is not, without censorship!',
                    translateText:'社交媒体巨头正在沉默数百万人。 不能做到这一点，即使这意味着我们必须继续听CNN这样的假新闻，其收视率严重受损。 没有审查，人们必须弄明白什么是真实的，什么不是真的！',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'9',
                    originalText:'Ex-NSA contractor to spend 63 months in jail over “classified” information. Gee, this is “small potatoes” compared to what Hillary Clinton did! So unfair Jeff, Double Standard.',
                    translateText:'前国家安全局承包商将在“机密”信息中度过63个月的监禁。 哎呀，与希拉里克林顿所做的相比，这是“小土豆”！ 如此不公平的Jeff，Double Standard。',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'8',
                    originalText:'....FISA abuse, Christopher Steele & his phony and corrupt Dossier, the Clinton Foundation, illegal surveillance of Trump Campaign, Russian collusion by Dems - and so much more. Open up the papers & documents without redaction? Come on Jeff, you can do it, the country is waiting!',
                    translateText:'...... FISA滥用，克里斯托弗斯蒂尔及其虚假和腐败的档案，克林顿基金会，特朗普运动的非法监视，俄罗斯与德姆斯的勾结 - 等等。 打开文件和文件，没有编辑？ 来吧杰夫，你可以做到，这个国家正在等待！',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                // {
                //     id:'7',
                //     originalText:'Target CEO raves about the Economy. “This is the best consumer environment I’ve seen in my career.” A big statement from a top executive. But virtually everybody is saying this, & when our Trade Deals are made, & cost cutting done, you haven’t seen anything yet!  @DRUDGE_REPORT',
                //     translateText:'Target CEO对经济赞不绝口。 “这是我职业生涯中见过的最好的消费环境。”一位高管的重要声明。 但实际上每个人都这么说，当我们的交易成交，成本削减完成后，你还没有看到任何东西！@DRUDGE_REPORT',
                //     imgUrl:''
                // },
                {
                    id:'6',
                    originalText:'“Department of Justice will not be improperly influenced by political considerations.” Jeff, this is GREAT, what everyone wants, so look into all of the corruption on the “other side” including deleted Emails, Comey lies & leaks, Mueller conflicts, McCabe, Strzok, Page, Ohr......',
                    translateText:'“司法部不会受到政治考虑的不当影响。”杰夫，这是伟大的，每个人都想要的，所以调查“另一方面”的所有腐败，包括删除的电子邮件，Comey谎言和泄密，Mueller冲突，McCabe ，Strzok，佩奇，......',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'5',
                    originalText:'Our Economy is setting records on virtually every front - Probably the best our country has ever done. Tremendous value created since the Election. The World is respecting us again! Companies are moving back to the U.S.A.',
                    translateText:'我们的经济几乎在每个方面都创下了记录 - 可能是我们国家所做过的最好的。 自选举以来创造的巨大价值。 世界再次尊重我们！ 公司正在回到美国。',
                    imgUrl:'',
                    date:'2018-08-24'
                }, 
                {
                    id:'4',
                    originalText:'Target CEO raves about the Economy. “This is the best consumer environment I’ve seen in my career.” A big statement from a top executive. But virtually everybody is saying this, & when our Trade Deals are made, & cost cutting done, you haven’t seen anything yet!  @DRUDGE_REPORT',
                    translateText:'Target CEO对经济赞不绝口。 “这是我职业生涯中见过的最好的消费环境。”一位高管的重要声明。 但实际上每个人都这么说，当我们的交易成交，成本削减完成后，你还没有看到任何东西！@DRUDGE_REPORT',
                    imgUrl:'',
                    date:'2018-08-24'
                },
                {
                    id:'3',
                    originalText:'...Cindy has voted for our Agenda in the Senate 100% of the time and has my complete and total Endorsement. We need Cindy to win in Mississippi!',
                    translateText:'...... Cindy在100％的时间里在参议院投票赞成我们的议程，并得到了我的全面和全面支持。 我们需要Cindy在密西西比州获胜！',
                    imgUrl:'',
                    date:'2018-08-23'
                },                    
                {
                    id:'2',
                    originalText:'I have authorized an emergency disaster declaration to provide Hawaii the necessary support ahead of #HurricaneLane. Our teams are closely coordinating with the state and local authorities. You are in our thoughts!',
                    translateText:'我已授权紧急灾难声明，以便在#HurricaneLane之前为夏威夷提供必要的支持。 我们的团队正在与州和地方当局密切协调。 你在我们的想法！',
                    imgUrl:'./img/tweets-img/2.jpg',
                    date:'2018-08-23'
                },
                {
                    id:'1',
                    originalText:'It was my great honor to host the Foreign Investment Risk Review Modernization Act Roundtable today at the @WhiteHouse!',
                    translateText:'我很荣幸今天在@WhiteHouse举办外国投资风险评估现代化法案圆桌会议！',
                    imgUrl:'./img/tweets-img/1.jpg',
                    date:'2018-08-23'
                },
                {
                    id:'0',
                    originalText:'Thank you West Virginia. I love you!',
                    translateText:'谢谢西弗吉尼亚州。 我爱你！',
                    imgUrl:'./img/tweets-img/0.jpg',
                    date:'2018-08-21'
                },
            ]
        },
        methods: {
            load: function () {
                
            }
        }
    });
}