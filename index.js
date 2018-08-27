window.onload = function () {
    var appDiv = new Vue({
        el: '#container',
        data: {
            temp:{
                id:'',
                originalText:'',
                translateText:'',
                imgUrl:'',
                date:'2018-08-26'
            },
            content:[
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