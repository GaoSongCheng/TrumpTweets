window.onload = function () {
    var appDiv = new Vue({
        el: '#container',
        data: {
            temp:{
                id:'',
                originalText:'',
                translateText:'',
                imgUrl:''
            },
            content:[
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